import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../configuration/auth';
import knex from '../database/connection';

interface IRequest {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

class SessionController {
  async create(req: Request, res: Response): Promise<any> {
    const { email, password }: IRequest = req.body;

    const responseUser = await knex('users').where('email', '=', email);

    if (responseUser.length === 0) {
      return res
        .status(404)
        .json({ message: 'Incorrect Email/Password combination' });
    }

    const user: User = responseUser[0];

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return res
        .status(400)
        .json({ message: 'Incorrect Email/Password combination' });
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    delete user.password;
    return res.status(200).json({ user, token });
  }
}

export default SessionController;
