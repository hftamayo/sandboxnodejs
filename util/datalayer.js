const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'node',
    database: 'nodecomplete',
    password: 'Node123$'
});

module.exports = pool.promise();