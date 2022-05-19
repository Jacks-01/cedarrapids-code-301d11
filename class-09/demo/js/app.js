/**
 * @file app.js
 * @date 2022-05-19
 * @author Bob Trapp
 * @description Demonstrates promises
 */

/**
 * Initialize any values after page load.
 */
function initialize() {
  console.log(`Initialize`);
  let button = document.getElementById("demoButton");
  button.addEventListener("click", handleClick, false);
}

/**
 * Event handler for the button click
 * @param {object} evt - the event object
 */
function handleClick(evt) {
  console.log(`handleClick()`);
  let output = document.getElementById("outParagraph");
  let value = Math.floor(Math.random() * 10);
  let prom = new Promise((resolve, reject) => {
    if (value % 2 === 0) {
      resolve("Good");
    } else {
      reject(new Error("Bad"));
    }
  });
  prom
    .then((resolve) => {
      output.innerText = resolve;
      console.log(`handleClick() ${resolve}`);
    })
    .catch((error) => {
      output.innerText = error.message;
      console.log(`handleClick() ${error.message}`);
    });
}
