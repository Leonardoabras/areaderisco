import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import LocationsController from '../controllers/LocationsController';

const usersController = new UsersController();
const locationsController = new LocationsController();

const routes = Router();

routes.get('/location', locationsController.index);
routes.post('/location', locationsController.create);
routes.delete('/location/:id', locationsController.delete);
routes.post('/user', usersController.create);

export default routes;
