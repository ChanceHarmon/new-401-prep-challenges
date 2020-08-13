'use strict';

const superagent = require('superagent');

// Write a function called isEven that receives 1 parameter:
//   A Number

// And returns a Promise

// Determine if the number is even. If so, resolve the promise with a value of true, otherwise, reject it with a value of false

// ------

// Create an array of numbers.



// Iterate the array with a for loop, each time calling the isEven function with the number and a callback


// The callback should console.log() the return value from isEven()


const isEven = num => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(true)
    }
    else {
      reject(false)
    }
  })
}

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numsArray.forEach(num => console.log(isEven(num)))

/*
  Write a function called getCharacters

  When invoked, make a superagent call to the Star Wars API

  With the retuned data, change the results into an object where the key is the character's name and the value is the URL to their page

  Output this JSON object
*/

const getCharacters = () => {
  let newUrl = 'https://swapi.dev/api/people/';
  superagent.get(newUrl)
    .then(results => {
      results.body.forEach(character => {
        let characterObj = {};
        characterObj[character.name] = character.url;
        console.log(JSON.stringify(characterObj))
      })
    })
}