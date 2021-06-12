const Sequelize = require('sequelize');


const connection = new Sequelize('projetnode','root','20023005',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
});

module.exports = connection;