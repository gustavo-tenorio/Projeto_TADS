const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')
const connection = require('../database/database')

const Perguntas = connection.define('perguntas',{
    titulodapergunta: {
        type:Sequelize.STRING,
        allowNul:false
    },
    pergunta: {
        type:Sequelize.BLOB("long"),
        allowNul:false
    },
    respostas: {
        type:Sequelize.BLOB("long"),
        allowNul:false
    }

}
);

Perguntas.sync({force:false});
module.exports = Perguntas;



