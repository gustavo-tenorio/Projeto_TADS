const express = require('express');
const router = express.Router();

const Perguntas = require('./Perguntas');

router.get('/perguntas/new',(req,res)=>{
    res.render('../views/user/pergunta');
});

router.post('/perguntas/save',(req,res)=>{
    let titulo = req.body.titulo;
    let resumo = req.body.resumo;
    let pergunta = req.body.pergunta;

    Perguntas.create({
        titulo: titulo,
        resumo, resumo,
        pergunta, pergunta

    }).then(res.json({titulo, resumo , pergunta}));
})
module.exports = router;