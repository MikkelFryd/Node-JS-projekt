import express from 'express';
import dotenv from 'dotenv';
import SongRouter from './Routes/song.router.js';
import UserRouter from './Routes/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(SongRouter);
app.use(UserRouter)

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
})

