import { Request, Response } from 'express';

import { comparePasswords, createJWT, hashPassword } from '../core/auth';
import { userToDto } from '../mappers/userMappers';
import { User } from '../model/user';

export const createUserService = async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;
  try {
    if (!name || !email || !phone || !password) {
      throw new Error(
        'Fields name, email, phone and password must be provided.'
      );
    }
    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).json(userToDto(user));
  } catch (error: any) {
    res.status(401).json({ success: false, error: error.message });
  }
};
export const signinService = async (req: Request, res: Response) => {
  try {
    const query = { email: req?.body?.email?.toString() };
    const user = await User.findOne(query);
    if (!user) {
      res.json({ message: 'Error' });
      return;
    }
    const isValid = await comparePasswords(req.body.password, user.password);
    if (!isValid) {
      res.status(401);
      res.json({ message: 'Error' });
      return;
    }

    const token = createJWT(user);
    user.token = token;
    await user.save();
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ success: false, error: error.message });
  }
};
