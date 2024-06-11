import Hero from '../../models/hero.model'

export default interface IHeroRepository {
    getAll(): Array<Hero>
    get(id: number): Hero | undefined
    getLast(): Hero | undefined
    save(hero: Hero): Hero
    delete(id: number): void
}