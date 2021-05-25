const Sequelize = require('sequelize');
const connection = require('../database/database');
const Perguntas = require('../perguntas/perguntas');
const Respostas = require('../respostas/respostas');

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

Categorias.hasMany(Perguntas);
Perguntas.belongsTo(Categorias);
Respostas.belongsTo(Categorias);

Categorias.sync({force:false});
module.exports = Categorias;
