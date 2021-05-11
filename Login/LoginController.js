const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const Cadastro = require('../Cadastro/Cadastro');

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
                res.json(req.session.user);
            }else{
                console.log(Error);
            }
        }

    })
});
router.get('/session',(req,res)=>{
    res.json(req.session.user);
})

module.exports = router;