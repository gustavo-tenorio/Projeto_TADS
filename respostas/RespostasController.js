const express = require('express');
const router = express.Router();
const Respostas = require('../respostas/respostas');
const authUser = require('../middleware/userAuth');

router.post('/resposta/save',authUser,(req,res)=>{
    let id = req.body.id;
    let resposta = req.body.resposta;
    Respostas.create({
        perguntaId : id,
        resposta : resposta
    }).then(res.redirect('/home')).catch(Error =>{
        console.log(Error);
    })
})
module.exports = router;