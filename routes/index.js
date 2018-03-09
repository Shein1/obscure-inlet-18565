let express = require('express');
let router = express.Router();
const db = require('../db/connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.user.sync().then(() => {
      db.user
      .create({
          firstName: 'Sheikh',
          lastName: 'Rohman',
          email: 'sheikh@rohman.com'
      }).then (user => {
      res.json({user: user})
    })
  })

});

module.exports = router;
