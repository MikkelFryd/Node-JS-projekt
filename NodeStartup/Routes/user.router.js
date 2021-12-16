import express from "express";
import { UserController } from '../Controllers/user.controller.js'

const UserRouter = express.Router();
const user = new UserController();

UserRouter.get('/', (req, res) => { user.list(req, res) })
UserRouter.get('/:id([0-9]*)', (req, res) => { user.get(req, res) })
UserRouter.post('/', (req, res) => { user.create(req, res) })
UserRouter.put('/', (req, res) => { user.update(req, res) })
UserRouter.delete('/:id([0-9]*)', (req, res) => { user.delete(req, res) })

export default UserRouter;