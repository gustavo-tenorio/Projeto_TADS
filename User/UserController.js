const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    let val = req.session.user;
    res.render('../views/user/home',{user:val});
});

module.exports = router;