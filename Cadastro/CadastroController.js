const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Cadastro = require('./Cadastro');


//Salvar Cadastro no Banco de Dados
router.post('/cadastro/save',(req,res)=>{
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
 
    Cadastro.findOne({where:{email:email}}).then(user =>{
        if(user){
            res.render('index');
        }else{
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(senha, salt);

            Cadastro.create({
                nome:nome,
                email:email,
                senha:hash
            }).then(res.redirect('/')).catch((Error)=>{
                res.redirect('/');
            })
            
        }
    });
});

module.exports = router;