const Sequelize = require('sequelize');
const connection = require('../database/database');

const Admin = connection.define('admin',{
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            isEmail: {
                msg: "Preencha o email corretamente (user@exemplo.com)"
            }
        }
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    },
    senha:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: "Esse campo precisa ser preenchido"
            }
        }
    }
});

Admin.sync({force:false});
module.exports = Admin;
