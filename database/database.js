const Sequelize = require('sequelize');


const connection = new Sequelize('projetnode54544','root','20023005435534',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
});

module.exports = connection;