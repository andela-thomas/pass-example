(function () {
  'use strict';
  // code goes here
  const express = require('express');
  const app = express();


  app.use(express.static(__dirname + '/public'));


  app.get('/*', (req, res) => {
    res.sendFile('index.html', {
      root: '/public'
    });
  });


  app.listen(3000, (err) => {
    if (!err) {
      return console.log('serve running on port 3000');
    }
  });
})();