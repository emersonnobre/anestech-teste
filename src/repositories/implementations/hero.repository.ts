import { injectable } from 'tsyringe';
import Hero from '../../models/hero.model';
import IHeroRepository from '../interfaces/i.hero.repository'
import getData, { writeData } from '../data/dataAccess';

@injectable()
export default class HeroRepository implements IHeroRepository {
    heroes: Array<Hero> = getData()

    getAll(): Hero[] {
        return this.heroes
    }

    get(id: number): Hero | undefined {
        return this.heroes.find(hero => hero.id == id)
    }

    save(hero: Hero): Hero {
        this.heroes.push(hero)
        writeData({ heroes: this.heroes })
        this.heroes = getData()
        return hero
    }

    delete(id: number): void {
        this.heroes = this.heroes.filter(hero => hero.id != id)
        writeData({ heroes: this.heroes })
    }

    getLast(): Hero | undefined {
        return this.heroes[(this.heroes.length - 1) < 0 ? 0 : (this.heroes.length - 1)]
    }
}