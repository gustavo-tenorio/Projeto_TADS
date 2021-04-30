const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const connection = require('../database/database');

const Perguntas = connection.define('perguntas',{
    titulo:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
    pergunta:{
        type:Sequelize.BLOB('medium'),
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    }, 
});

Perguntas.sync({force:false});
module.exports = Perguntas;