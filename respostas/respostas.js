const Sequelize = require('sequelize');
const connection = require('../database/database');

const Respostas = connection.define('respostas',{
    resposta:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
});

Respostas.sync({force:true});
module.exports = Respostas;