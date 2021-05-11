const express = require('express');
const app = express();

//BODY-PARSER
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//VIEW ENGINE === EJS 
app.set('view engine','ejs');

//DIZENDO AO PROGRAMA PARA LER O CSS/IMG/JS
app.use(express.static('public'));

//Banco de Dados
const connection = require('./database/database');
const Cadastro = require('./Cadastro/Cadastro');
const Categorias = require('./Categorias/Categorias');
const Perguntas = require('./Perguntas/Perguntas');
const Admin = require('./Admin/Admin');

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((Error)=>{
        console.log(Error);
    });

//Session
const session = require('express-session');


app.use(session({
    secret:'sdlaslkdjasldjsajdasjdlasdmasl', cookie:{maxAge:60000}, resave:false, saveUninitialized:false    
}));

//Rotas
const cadastroController = require('./Cadastro/CadastroController');
const categoriasController = require('./Categorias/CategoriasController');
const perguntasController = require('./Perguntas/PerguntasController');
const loginController = require('./Login/LoginController');


app.use('/',cadastroController);
app.use('/',loginController);
app.use('/',categoriasController);
app.use('/',perguntasController);


app.get('/',(req,res)=>{
    res.render('index');
});


app.listen('3000',(Error)=>{
    if(Error){
        console.log(Error);
    }else{
        console.log('Server On')
    }
})