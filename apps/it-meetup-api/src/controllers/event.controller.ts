import express, { Request, Response } from 'express';
import { createEventService, getEvent } from '../service/event.service';

const router = express.Router();
router.use(express.json());

router.post('/', (req: Request, res: Response) => {
  createEventService(req, res).catch((e) => console.log(e));
});
router.get('/', (req: Request, res: Response) => {
  getEvent(req, res).catch((e) => console.log(e));
});
export default router;
