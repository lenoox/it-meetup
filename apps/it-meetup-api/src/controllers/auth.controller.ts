import express, { Request, Response } from 'express';
import { createUserService, signinService } from '../service/auth.service';

const router = express.Router();
router.use(express.json());
router.post('/signin', (req: Request, res: Response) => {
  signinService(req, res).catch((e) => console.log(e));
});
router.post('/register', (req: Request, res: Response) => {
  createUserService(req, res).catch((e) => console.log(e));
});

export default router;
