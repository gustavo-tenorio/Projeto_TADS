const express = require('express');
const router = express.Router();
const Categorias = require('../categorias/categorias');
const Perguntas = require('../perguntas/perguntas');
const Respostas = require('../respostas/respostas');
const slugify = require('slugify');
const userAuth = require('../middleware/userAuth');


router.get('/perguntas/new',userAuth,(req,res)=>{
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
        slug: slugify(titulo)

    }).then(res.redirect('/home'));
})
router.get('/:slug',(req,res)=>{
    let slug = req.params.slug;
    Categorias.findAll({raw:true}).then(categorias =>{
        Perguntas.findOne({where:{slug:slug}}).then(pergunta =>{
            if(pergunta != undefined){
                Respostas.findAll({where:{perguntaId : pergunta.id}}).then(respostas =>{ 
                    res.render('../views/perguntas/pergunta',{perguntas: pergunta,categorias:categorias,respostas:respostas});
                })
                
            }
        });
    });
   
});

module.exports = router;