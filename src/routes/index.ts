import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'ONRINE MERMAO' }));

export default routes;