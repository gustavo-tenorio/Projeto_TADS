const express = require('express');
const router = express.Router();
const Categorias = require('../categorias/categorias');
const Perguntas = require('../perguntas/perguntas');
router.get('/home',(req,res)=>{
    let val = req.session.user;
    Perguntas.findAll({raw:true}).then(perguntas =>{
        Categorias.findAll({raw:true}).then(categorias =>{
            res.render('../views/user/home',{user:val,categorias:categorias,perguntas:perguntas});
        })
    })
   
    
});

router.get('/session', (req, res)=>{
res.json(req.session.user);
});

module.exports = router;