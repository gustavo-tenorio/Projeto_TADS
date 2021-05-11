const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cadastro = connection.define('cadastro',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            isEmail: {
                msg: "Preencha o email corretamente (user@exemplo.com)"
            }
        }
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    }
});

Cadastro.sync({force:false});
module.exports = Cadastro;
