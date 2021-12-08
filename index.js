import express from 'express'
import dotenv from 'dotenv'

import {router as SongRouter} from './Routes/song.router.js'
import {router as ArtistRouter} from './Routes/artist.router.js'

dotenv.config()

const port = process.env.PORT || 3030

const app = new express()

app.use(SongRouter)
app.use(ArtistRouter)

app.listen(port, () => {
    console.log(`server kører på ${port}`)
})