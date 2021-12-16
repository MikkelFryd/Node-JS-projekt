import { UserModel } from '../Models/user.model.js'
const user = new UserModel();

class UserController {
	constructor() {
		console.log('UserController is running');
	}

	list = async (req, res) => {
		const result = await user.list(req, res);
		res.send(result);
	}

	get = async (req, res) => {
		const result = await user.get(req, res);
		res.send(result);
	}

	create = async (req, res) => {
		const result = await user.create(req, res);
		res.send(result);
	}

	update = async (req, res) => {
		const result = await user.update(req, res);
		res.send(result);
	}

	delete = async (req, res) => {
		const result = await user.delete(req, res);
		res.send(result);
	}
}

export { UserController }