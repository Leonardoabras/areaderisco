import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import * as Yup from 'yup';
import knex from '../database/connection';

class UsersController {
  async create(req: Request, res: Response): Promise<number | any> {
    const { name, email, password } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const emailV = await knex('users').where('email', '=', email);

    const user = { name, email, password };
    if (!(await schema.isValid(user))) {
      return res.status(400).json({ message: 'Failed on data validation' });
    }

    if (emailV.length > 0) {
      return res.status(400).json({ message: 'E-mail ja cadastrado' });
    }

    user.password = await hash(password, 8);

    const userResp = await knex('users').insert(user);

    return res.json(userResp);
  }
}

export default UsersController;
