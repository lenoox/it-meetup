import { Response } from 'express';

import { getToken } from '../utils/authUtils';
import { userToDto } from '../mappers/userMappers';
import { User } from '../model/user';

export const getUserService = async (req: any, res: Response) => {
  try {
    const token: string | undefined = getToken(req, res);
    if (!token) {
      res.status(401);
      res.json({ message: 'not valid token' });
      return;
    }

    const query = { _id: req.user.id.toString() };
    const user = await User.findOne(query);
    res.status(200).json(userToDto(user));
  } catch (error: any) {
    res.status(401).json({ success: false, error: error.message });
  }
};
