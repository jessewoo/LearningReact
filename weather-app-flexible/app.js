'use strict';

// [START app]
const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();

// Alternative to fix CORS
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', function(req, res, next) {
    res.status(200).send('Dark Sky Proxy with cors()').end();
});

// Proxy to handle CORS issue with Dark Sky
app.get('/test/', cors(), function(req, res) {
    request( {
        url: `https://api.darksky.net/forecast/${darkskyapikey}/34.0522342,-118.2436849,1526400308`,
        json: true
    }, function (error, response, body) {
        res.status(200).send(body).end();
    });
});

app.get('/darksky/', cors(), function (req, res, next) {
    const unixTime = req.query.time;
    const latitude = req.query.lat;
    const longitude = req.query.lng;

    request( {
        url: `https://api.darksky.net/forecast/${darkskyapikey}/${latitude},${longitude},${unixTime}`,
        json: true
    }, function (error, response, body) {
        // console.log('error:', error);
        // console.log('statusCode:', response && response.statusCode);
        // console.log('body:', response);

        res.status(200).json(body).end();
    });
});

app.get('/autocomplete/', cors(), function (req, res, next) {
    const term = req.query.term;

    request( {
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${term}&types=(cities)&key=${googleapikey}`,
        json: true
    }, function (error, response, body) {
        // console.log('error:', error);
        // console.log('statusCode:', response && response.statusCode);
        // console.log('body:', response);

        res.status(200).json(body).end();
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
  console.log(`CORS-enabled web server listening on port ${PORT}`)
});
// [END app]
