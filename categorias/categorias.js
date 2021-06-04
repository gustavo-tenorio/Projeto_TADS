const Sequelize = require('sequelize');
const connection = require('../database/database');

const Categorias = connection.define('categorias',{
    categoria:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
});

Categorias.sync({force:false});
module.exports = Categorias;
