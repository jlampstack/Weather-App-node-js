/**
 * Steps
 * 
 * 1. npm init
 * 2. npm i request
 * 3. npm i dotenv, encrypts api key
 * 4. Create .env file, Common JS convention is to store private info in a file 
 *    ending in .env  - Don't need to name it anything, can simply be .env
 *    .env tells JS to keep file hidden from everyone else
 * 5. Use process.env prefixes on API_KEY when interpolating
 */

// Require
const request = require('request');
const dotenv = require('dotenv').config(); // pkg for encrypting API_KEY
// Variables
const location = process.argv[2]; // Usage in Terminal: node app.js city
const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`;


if (!location) {
  return console.log('Please enter a city name\nExample: node app.js Toronto');
} else {
  request( endpoint, (error, response, body) => {
    const data = JSON.parse(body); // Converts string to JSON
    console.log(`It's currently ${data.main.temp} degrees`); 
  });
}