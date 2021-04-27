const Sequelize = require('sequelize');


const connection = new Sequelize('projeto','root','110804',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
});

module.exports = connection;