/*
ejemplo de una rutina orm

const dbms = require('mysql2');

const pool = dbms.createPool({
    host: 'localhost',
    user: 'node',
    database: 'nodecomplete',
    password: 'Node123$'
});
*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'Node123$', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;