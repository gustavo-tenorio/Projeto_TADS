const express = require('express');
const app = express();

//BODY-PARSER
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set(bodyParser.json());

//VIEW ENGINE === EJS 
app.set('view engine','ejs');

//DIZENDO AO PROGRAMA PARA LER O CSS/IMG/JS
app.use(express.static('public'));

//Banco de Dados
const connection = require('./database/database');
const Cadastro = require('./Cadastro/Cadastro');

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((Error)=>{
        console.log(Error);
    });
const cadastroController = require('./Cadastro/CadastroController');

app.use('/',cadastroController);

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/cadastro',(req,res)=>{
    res.render('cadastro');
})




app.listen('3000',(Error)=>{
    if(Error){
        console.log(Error);
    }else{
        console.log('Server On')
    }
})