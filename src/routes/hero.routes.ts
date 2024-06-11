import { Router } from 'express'
import HeroController from '../controllers/hero.controller'
import { container } from 'tsyringe'

const heroController = container.resolve(HeroController)
const router = Router()

router.route('/hero')
    .get(heroController.getAll.bind(heroController))
    .post(heroController.save.bind(heroController))

router.route('/hero/:id')
    .get(heroController.getById.bind(heroController))
    .put(heroController.update.bind(heroController))
    .delete(heroController.delete.bind(heroController))

export default router