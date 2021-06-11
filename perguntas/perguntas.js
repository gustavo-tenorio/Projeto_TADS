const Sequelize = require('sequelize');
const connection = require('../database/database');
const Categorias = require('../categorias/categorias');

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
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    } 
});

Categorias.hasMany(Perguntas);
Perguntas.belongsTo(Categorias);


Perguntas.sync({force:false});
module.exports = Perguntas;