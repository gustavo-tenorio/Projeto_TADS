const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Categorias = require('./categorias');
const Perguntas = require('../perguntas/perguntas');
const userAuth = require('../middleware/userAuth');
router.get('/categorias/new',userAuth,(req,res)=>{
    res.render('../views/user/categorias');
});
router.get('/categorias/:slug',(req,res)=>{
    let slug = req.params.slug;
    Categorias.findOne({where:{slug:slug}}).then(categoria =>{
        if(categoria != undefined){
            Categorias.findAll().then(categorias =>{
                Perguntas.findAll({where:{categoriaId : categoria.id}})
                .then(perguntas =>{
                    res.render('../views/user/home',{categorias:categorias,perguntas:perguntas});
                })
            })
        }
    })
        
});
router.post('/categorias/save',(req,res)=>{
    let categorias = req.body.categoria;
    Categorias.create({
        categoria: categorias,
        slug:slugify(categorias)
    }).then(res.redirect('/home'));
})
module.exports = router;