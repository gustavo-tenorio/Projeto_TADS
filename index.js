const express = require('express');
const app = express();


//VIEW ENGINE === EJS 
app.set('view engine','ejs');

//DIZENDO AO PROGRAMA PARA LER O CSS/IMG/JS
app.use(express.static('public'));


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