/**
 * @file warmup.js
 * @date 2022-05-31
 * @author Code Fellows
 * @description Simple example to remind students of form concepts
 *
 */
'use strict';

console.log('linked!');



// event handler

/**
 * Demonstration of a typical event handler function.  Not otherwise used in
 * this demonstration.
 * 
 * @param {object} event - and event object
 */
function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('submitted');
}

/**
 * Demonstrates adding an event listener using an arrow function.
 */
document.getElementById('myForm').addEventListener('submit', event => {
  event.preventDefault();
  console.log('submitted');
});

/**
 * More event handling
 */
const nameEl = document.getElementById('name');
const nameHeaderEl = document.getElementById('nameHeader');
nameEl.addEventListener('input', event => {
  nameHeaderEl.innerText = `Welcome, ${event.target.value}!`;
});






















// const form = document.getElementById('myForm');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('submitted');
// });

// const nameEl = document.getElementById('name');
// const nameHeader = document.getElementById('nameHeader');
// nameEl.addEventListener('input', e => {
//   nameHeader.innerHTML = `Welcome, ${e.target.value}!`;
// });
