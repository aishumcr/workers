// server.js
const ipinfo = require('ipinfo');
const express = require('express');
const geoip = require('geoip-lite');

const app = express();

app.get('/', (req, res) => {

    // Get IP address from request object
    const ip = req.ip;
    console.log(ip);
    
    // Get location details for IP address
    const location = geoip.lookup(ip);
    
    // Print location details
    console.log("hello" + location);
    
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
