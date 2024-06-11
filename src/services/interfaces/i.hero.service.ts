import Hero from '../../models/hero.model'
import CreateHero from '../../util/requests/create-hero.request'
import UpdateHero from '../../util/requests/update-hero.request'
import ApiResponse from '../../util/responses/api.response'

export default interface IHeroService {
    getAll(): ApiResponse<Array<Hero>>
    get(id: number): ApiResponse<Hero | undefined>
    create(hero: CreateHero): ApiResponse<number>
    update(hero: UpdateHero): ApiResponse<Hero>
    delete(id: number): ApiResponse<void>
}