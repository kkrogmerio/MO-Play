const express=require('express')
const router=express.Router();


const{
    registerController,
    activationController,
    loginController,
    forgetController,
    resetController,
    getDataController
}=require('../controllers/auth.controller')
const{
    validForgot,
    validReset,
    validRegister,
    validLogin
}=require('../helpers/valid')




router.post('/register',validRegister,registerController);
router.post('/activation',activationController);
router.post('/login',validLogin,loginController);
router.put('/password/forget',forgetController);
router.put('/password/reset',resetController);
router.get('/getData',getDataController);

module.exports=router;
