import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'ONRINE MERMAO' }));
routes.post('/user', usersController.create);

export default routes;
