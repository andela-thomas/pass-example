(function () {
  'use strict';
  // code goes here
  require('newrelic');
  var express = require('express');
  var app = express();
  var cronjob = require('node-cron-job');


  app.use(express.static('./public'));


  app.get('/*', function (req, res) {
    res.sendFile('index.html', {
      root: './public'
    });
  });




  cronjob.setJobsPath(__dirname + '/jobs.js'); // Absolute path to the jobs module.

  cronjob.startJob('first_job');
  app.listen(process.env.PORT || 3000, function (err) {
    if (!err) {
      return console.log('serve running on port 3000');
    }
  });
})();
