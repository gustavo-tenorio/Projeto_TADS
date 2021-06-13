const Sequelize = require('sequelize');
const connection = require('../database/database');
const Perguntas = require('../perguntas/perguntas');
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

Perguntas.hasMany(Respostas);
Respostas.belongsTo(Perguntas);

Respostas.sync({force:false});

module.exports = Respostas;