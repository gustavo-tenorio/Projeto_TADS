const express = require('express');
const router = express.Router();

const Categorias = require('./Categorias');

router.get('/admin/categorias/new',(req,res)=>{
    res.render('../views/admin/categorias');
});

module.exports = router;