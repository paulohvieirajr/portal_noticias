var db = require('../../config/dbConnection')();

module.exports = function(app) {
  app.get('/noticias', function(req, res) {

    db.query('select * from noticias', function(error, result) {
      res.render("noticias/noticias", {noticias: result});
    });

  });
}
