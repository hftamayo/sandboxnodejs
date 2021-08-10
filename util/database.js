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

  let _db; //el underscore significa que es una variable local
  //el contenedor se crea onTheFly y gralmente por esta peticion del endpoint
  MongoClient.connect(
    "mongodb+srv://node:Node123$@nodecluster.hfnls.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("mongodb: connection established");
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
  throw err;
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No catalog found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;