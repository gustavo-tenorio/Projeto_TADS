const express = require('express');
const router = express.Router();

const Perguntas = require('./Perguntas');

router.get('/perguntas/new',(req,res)=>{
    res.render('../views/user/pergunta');
});

module.exports = router;