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

/* ejemplo de conexion a mysql con sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'node', 'Node123$', {
    dialect: 'mysql', host: 'localhost'
});
*/
const mongoConnect = (callback) => {
  const mongodb = require("mongodb");
  const MongoClient = mongodb.MongoClient;

  MongoClient.connect(
      "mongodb+srv://node:Node123$@nodecluster.hfnls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("mongodb: connection established");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;