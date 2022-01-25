import express, { Router } from 'express';
import requireLogin from '../middlewares/requireloginstud.js';

const router  = express.Router();
import {Updatepost,Viewstudent,LoginStudent,LoginFac,CreateUser,CreateFac,Reset,ResetPass,Search} from '../controller/updatecontroller.js';
router.post('/update',requireLogin,Updatepost);
router.get('/student',requireLogin,Viewstudent);
router.post('/loginstudent',LoginStudent);
router.post('/loginfaculty',LoginFac);
router.post('/createuser',CreateUser);
router.post('/createfac',CreateFac);
router.post('/resets',Reset);
router.post('/reset-password',ResetPass);
router.get('/search/:usn',Search);

export default router;