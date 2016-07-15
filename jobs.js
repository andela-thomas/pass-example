 var request = require('request');
 exports.first_job = {

    after: { // Configuring this job to run after this period.
        seconds: 2
    },
    job: function () {
        request('http://localhost:3000', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('cron job') // Show the HTML for the Google homepage.
            }
        });
    },
    spawn: true
 };
