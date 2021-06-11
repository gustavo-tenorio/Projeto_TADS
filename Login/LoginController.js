const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const Cadastro = require('../Cadastro/Cadastro');

//Login
router.post('/login',(req,res)=>{
    let email = req.body.email;
    let senha = req.body.senha;

    Cadastro.findOne({where:{email: email}}).then(usuario =>{
        if(usuario === undefined){
            res.redirect('/');
        }else{
            let correct = bcrypt.compareSync(senha, usuario.senha);
            if(correct){
                req.session.user ={
                   nome: usuario.nome,
                   email: usuario.email,
                   id: usuario.id
                }
                res.redirect('/home');
            }else{
                console.log(Error);
            }
        }

    })
});



//Logout
router.get('/logout',(req,res)=>{
    req.session.user = undefined;
    res.redirect('/');
});
router.get('/session',(req,res)=>{
    res.json(req.session.user);
})

module.exports = router;