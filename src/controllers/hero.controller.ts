import { inject, injectable } from 'tsyringe'
import HeroService from '../services/implementations/hero.service';
import IHeroService from '../services/interfaces/i.hero.service';
import { Request, Response } from 'express';
import CreateHero from '../util/requests/create-hero.request';
import UpdateHero from '../util/requests/update-hero.request';

@injectable()
export default class HeroController {
    constructor(@inject(HeroService) private _heroService: IHeroService) {}

    getAll(_: Request, res: Response) {
        const result = this._heroService.getAll()
        res.status(result.statusCode).json(result)
    }

    getById(req: Request, res: Response) {
        const id = req.params.id
        if (!id || isNaN(Number(id))) 
            return res.status(400).json({ message: 'Provide an integer id' })
        const result = this._heroService.get(Number(req.params.id))
        res.status(result.statusCode).json(result)
    }

    delete(req: Request, res: Response) {
        const id = req.params.id
        if (!id || isNaN(Number(id))) 
            return res.status(400).json({ message: 'Provide an integer id' })
        const result = this._heroService.delete(Number(req.params.id))
        res.status(result.statusCode).json(result)
    }

    save(req: Request, res: Response) {
        const heroRequest: CreateHero = req.body
        const result = this._heroService.create(heroRequest)
        res.status(result.statusCode).json(result)
    }

    update(req: Request, res: Response) {
        const heroRequest: UpdateHero = req.body
        const result = this._heroService.update(heroRequest)
        res.status(result.statusCode).json(result)
    }
}