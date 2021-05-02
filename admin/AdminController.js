const express = require('express');

const router = express.Router();

router.get('/admin/categorias', (req,res)=>{
    res.render('./admin/categorias');
});

module.exports = router;