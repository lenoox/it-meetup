import express, { Request, Response } from 'express';
import { getUserService } from '../service/user.service';

const router = express.Router();
router.use(express.json());
router.get('/', (req: Request, res: Response) => {
  getUserService(req, res).catch((e) => console.log(e));
});

export default router;
