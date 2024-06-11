import { container } from 'tsyringe'
import IHeroRepository from '../repositories/interfaces/i.hero.repository'
import HeroRepository from '../repositories/implementations/hero.repository'
import IHeroService from '../services/interfaces/i.hero.service'
import HeroService from '../services/implementations/hero.service'
import HeroController from '../controllers/hero.controller'

container.registerSingleton<IHeroRepository>(HeroRepository)
container.registerSingleton<IHeroService>(HeroService)

container.registerSingleton(HeroController)
