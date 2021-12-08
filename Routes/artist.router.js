import express from 'express'

const router = express.Router()

router.get('/api/artists', (req, res) => {
    res.status(200).send('Artist liste')
});

export { router}