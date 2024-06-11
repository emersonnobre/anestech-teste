import 'reflect-metadata'

import express from 'express'

import heroRoutes from './routes/hero.routes'

const app = express()
app.use(express.json())

app.use(heroRoutes)

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})