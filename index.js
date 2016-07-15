(function () {
  'use strict';
  // code goes here
  require('newrelic');
  const express = require('express');
  const app = express();
  var cron = require('node-cron');
  var request = require('request');

  app.use(express.static('./public'));


  app.get('/*', (req, res) => {
    res.sendFile('index.html', {
      root: './public'
    });
  });

  cron.schedule('* * * * *', function () {
    request('https://paas-xmpl.herokuapp.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('this is a cron request');
      }
    });
  });

  app.listen(process.env.PORT || 3000, (err) => {
    if (!err) {
      return console.log('serve running on port 3000');
    }
  });
})();
