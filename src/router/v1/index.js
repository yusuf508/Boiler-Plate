const express = require('express');
const router = express.Router();

const userRouter = require('./user.root');
const authRouter = require('./auth.root');
const statehRouter = require('./state.root');


const RouterPaths = [ 
{
path: '/auth',
router: authRouter
},
{
    path: '/user',
    router: userRouter
},
{
    path: '/state',
    router: statehRouter
}

];

RouterPaths.forEach(route=>{
    router.use(route.path, route.router);
});

module.exports = router;