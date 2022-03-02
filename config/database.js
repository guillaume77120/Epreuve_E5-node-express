
  const mariadb = require('mariadb');

const pool = mariadb.createPool({
    connectionLimit: 10,
    host: Process.env.DB_HOST,
    user: Process.env.DB_USER,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME,
    port: Process.env.DB_PORT,

});

module.exports = pool;