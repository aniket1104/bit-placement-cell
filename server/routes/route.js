import express, { Router } from 'express';
import requireLogin1 from '../middlewares/requireloginstud.js';
import requireLogin2 from '../middlewares/requireloginfac.js';
import requireLogin from '../middlewares/requirelogin.js'

const router  = express.Router();
import {Updatepost,Viewstudent,LoginStudent,LoginFac,CreateUser,CreateFac,Reset,ResetPass,Search,Logout, studentquery, branchquery} from '../controller/updatecontroller.js';

router.post('/update',requireLogin1,Updatepost);
router.get('/student',requireLogin,Viewstudent);
router.post('/loginstudent',LoginStudent);
router.post('/loginfaculty',LoginFac);
router.post('/logout',requireLogin,Logout);
router.post('/createuser',requireLogin2,CreateUser);
router.post('/createfac',CreateFac);
router.post('/resets',Reset);
router.post('/reset-password',ResetPass);
router.get('/search/:usn',Search);
router.get('/admin/eligiblecandidate',studentquery);
router.get('/admin/studentdata',branchquery);
router.get('/search/:usn',requireLogin2,Search);

export default router;