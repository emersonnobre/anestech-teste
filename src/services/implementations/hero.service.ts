import { inject, injectable } from 'tsyringe';
import Hero from '../../models/hero.model'
import IHeroService from '../interfaces/i.hero.service';
import HeroRepository from '../../repositories/implementations/hero.repository';
import IHeroRepository from '../../repositories/interfaces/i.hero.repository';
import ApiResponse from '../../util/responses/api.response';
import CreateHero from '../../util/requests/create-hero.request';
import UpdateHero from '../../util/requests/update-hero.request';

@injectable()
export default class HeroService implements IHeroService {
    readonly INITIAL_ID: number = 1
    constructor(@inject(HeroRepository) private _heroRepository: IHeroRepository) {}
    
    getAll(): ApiResponse<Hero[]> {
        const heroes = this._heroRepository.getAll()
        if (!heroes.length)
            return new ApiResponse(404, 'No heroes was find')
        return new ApiResponse(200, undefined, heroes)
    }

    get(id: number): ApiResponse<Hero | undefined> {
        const hero = this._heroRepository.get(id)
        if (!hero)
            return new ApiResponse(404, 'No hero was find')
        return new ApiResponse(200, undefined, hero)
    }

    create(heroRequest: CreateHero): ApiResponse<number> {
        const lastId = this._heroRepository.getLast()?.id || 0
        const hero = new Hero(lastId + 1, heroRequest.name, heroRequest.alias, heroRequest.powers, heroRequest.affiliation)
        const createdHero = this._heroRepository.save(hero)
        return new ApiResponse(201, undefined, createdHero.id)
    }
    
    update(heroRequest: UpdateHero): ApiResponse<Hero> {
        const hero = this._heroRepository.get(heroRequest.id)
        if (!hero)
            return new ApiResponse(404, 'No hero was find')
        this._heroRepository.delete(hero.id)
        const updatedHero = new Hero(hero.id, heroRequest.name, heroRequest.alias, heroRequest.powers, heroRequest.affiliation)

        console.log(updatedHero)
        this._heroRepository.save(updatedHero)
        return new ApiResponse(204)
    }

    delete(id: number): ApiResponse<void> {
        const exists = this._heroRepository.get(id)
        if (!exists)
            return new ApiResponse(404, 'No hero was find')
        this._heroRepository.delete(id)
        return new ApiResponse(204)
    }
}