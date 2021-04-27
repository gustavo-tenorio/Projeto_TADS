const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cadastro = connection.define('cadastro',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:
                {msg:"Este email não é válido"}
        }
    },
    senha:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

Cadastro.sync({force:true});

module.exports = Cadastro;