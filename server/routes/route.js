import express, { Router } from 'express';
import requireLogin from '../middlewares/requirelogin.js';

const router  = express.Router();
import {Updatepost,Viewstudent,LoginStudent,LoginFac,CreateUser,Reset} from '../controller/updatecontroller.js';
router.post('/update',requireLogin,Updatepost);
router.get('/student',requireLogin,Viewstudent);
router.post('/loginstudent',LoginStudent);
router.post('/loginfaculty',LoginFac);
router.post('/createuser',CreateUser);
router.post('/reset',Reset);

export default router;