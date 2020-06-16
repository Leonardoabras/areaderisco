import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import LocationsController from '../controllers/LocationsController';
import SessionController from '../controllers/SessionsController';

const usersController = new UsersController();
const sessionController = new SessionController();
const locationsController = new LocationsController();

const routes = Router();

routes.get('/location', locationsController.index);
routes.post('/location', locationsController.create);
routes.delete('/location/:id', locationsController.delete);
routes.post('/user', usersController.create);
routes.post('/session', sessionController.create);

export default routes;
