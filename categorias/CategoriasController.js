const express = require('express');
const router = express.Router();
const Categorias = require('./categorias');

router.get('/admin/categorias/new',(req,res)=>{
    res.render('../views/admin/categorias');
});

router.get('/admin/categorias',(req,res)=>{
    Categorias.findAll({raw: true}).then(categorias =>{
        res.json({categorias})
    })
    
})

router.post('/categorias/save',(req,res)=>{
    let categorias = req.body.categoria;

    Categorias.create({
        categoria: categorias,
    }).then(res.json({categorias}));
})
module.exports = router;