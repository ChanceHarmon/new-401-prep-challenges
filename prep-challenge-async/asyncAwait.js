'use strict';

const superagent = require('superagent');


/*
  Write function called getRandomNumber that returns a promise

  In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds

  Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.

  Invoke your async function
*/

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 1000))
    }, 500)
  })
}

async function logNum() {
  let result = await getRandomNumber()
  console.log(result)
}



/*
  Write an asynchronous function that accepts 1 parameter
    - A city name

  When invoked, this function should use superagent to retrieve the city data from the geocode.xyz API, which uses a URL formatted as follows.

    https://geocode.xyz/seattle?json=1

  Once retrieved, print to the console, the latitude and longitude

  Invoke your async function with a few cities as a test

*/

async function getCity(city) {
  let target = city.toLowerCase();
  let result = await superagent.get(`https://geocode.xyz/${target}?json=1`)
  console.log(`Lat: ${result.body.latt}, Lon: ${result.body.longt}`)
}