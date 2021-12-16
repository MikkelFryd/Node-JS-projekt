import express from 'express';
import UserController from '../Controllers/user.controller.js';

const router = express.Router();
const controller = new UserController();

// Kalder routes med controller metoder
router.get('/api/users', (req, res) => { controller.list(req, res)});
router.get('/api/users/search', (req, res) => { controller.search(req, res)})
router.get('/api/users/:id([0-9]*)', (req, res) => { controller.get(req, res)});
router.post('/api/users', (req, res) => { controller.create(req, res)});
router.put('/api/users', (req, res) => { controller.update(req, res)});
router.delete('/api/users', (req, res) => { controller.delete(req, res)});


export { router }