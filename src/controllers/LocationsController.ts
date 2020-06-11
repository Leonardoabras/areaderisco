import { Request, Response } from 'express';
import * as Yup from 'yup';
import knex from '../database/connection';

class UsersController {
  async create(req: Request, res: Response) {
    const { risk, latitude, longitude } = req.body;

    const schema = Yup.object().shape({
      risk: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    const location = { risk, latitude, longitude };

    if (!(await schema.isValid(location))) {
      return res.status(400).json({ message: 'Failed on data validation' });
    }

    const [id] = await knex('locations').insert(location);

    return res.json(id);
  }

  async index(req: Request, res: Response) {
    const locations = await knex('locations').select('*');

    if (!locations) {
      return res.status(404).json({ message: "locations wasn't founed " });
    }

    return res.json(locations);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (await knex('locations').where('id', id).del()) {
      return res.status(200).send();
    }
    return res.status(400).send();
  }
}

export default UsersController;
