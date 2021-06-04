const express = require('express');
const router = express.Router();
const Categorias = require('../categorias/categorias');
const Perguntas = require('../perguntas/perguntas');

router.get('/perguntas/new',(req,res)=>{
    Categorias.findAll({
        raw: true
    }).then(categorias => {
        res.render('../views/user/pergunta',{categorias: categorias})
    });
    
});

router.post('/perguntas/save',(req,res)=>{
    let titulo = req.body.titulo;
    let resumo = req.body.resumo;
    let pergunta = req.body.pergunta;
    let categorias = req.body.categoria;

    Perguntas.create({
        titulo: titulo,
        resumo: resumo,
        pergunta: pergunta,
        categoriaId: categorias,

    }).then(res.json({titulo, resumo , pergunta, categorias}));
})
module.exports = router;