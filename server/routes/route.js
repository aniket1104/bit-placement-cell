import express, { Router } from 'express';

const router  = express.Router();
import {Updatepost,Viewstudent} from '../controller/updatecontroller.js';
router.post('/update',Updatepost);
router.get('/student/:id',Viewstudent);


export default router;