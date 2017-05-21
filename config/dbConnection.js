var mysql = require('mysql');

var connMySQL = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias'
  });
}

module.exports = function() {
  console.log('O Autoload carregou o módulo de conexão com BD.')
  return connMySQL;
}
