import express, { Router } from 'express';

const router  = express.Router();
import {Updatepost} from '../controller/updatecontroller.js';
router.post('/update',Updatepost);


export default router;