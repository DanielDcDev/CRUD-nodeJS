const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto','root','',
{
    dialect:'mysql', host:'localhost' 
});

module.exports = componenteSequelize;