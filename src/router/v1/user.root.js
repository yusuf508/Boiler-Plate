const express =require('express');
const router = express.Router();
const {usercontroler } = require('../../contoler');
const {uservalidator } = require('../../validations');
const validate = require('../../midleware/validator');
const accessToken = require('../../midleware/auth');


// accessToken.auth,
router.get('/getAllUsers', usercontroler.getALLusers);
router.post('/userById',usercontroler.getsingleUser);
router.post('/create',validate(uservalidator.createUser),usercontroler.create);
//router.post('/updateUser',validate(uservalidator.updateUser),usercontroler.updateUsers);
router.post('/delete',usercontroler.deleteUser);

router.post('/updateUser',accessToken.auth,validate(uservalidator.updateUser), accessToken.authentication('updateUser'),usercontroler.updateUsers)
 
 


module.exports = router;
    
