const Sequelize = require('sequelize');
const Respostas = require('../respostas/respostas');
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
    resumo:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate:{
            notEmpty:{
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
    pergunta:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    }, 
});

Perguntas.hasMany(Respostas);
Respostas.belongsTo(Perguntas);

Perguntas.sync({force:true});
module.exports = Perguntas;