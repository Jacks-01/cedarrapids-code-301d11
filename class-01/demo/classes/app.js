/**
 * @file app.js
 * @author Code Fellows
 * @description An example of classes
 */
"use strict";

/**
 * The definition of the Animal class with a constructor to demonstrates
 * creating a class and initializing values.
 */
class Animal {
  /**
   * Initializes the Animal object with name, color, and age.
   *
   * @param {object} props - the properties for this Animal
   */
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
  }
} // end class Animal

/**
 * This is the class for a Dog and it illustrates inheritance by extending
 * Animal.
 */
class Dog extends Animal {
  /**
   * Initializes a Dog object.
   *
   * @param {object} props - the properties object
   * @param {string} type - the breed of dog
   */
  constructor(props, type) {
    super(props);
    this.type = type;
  }

  /**
   * The Dog barks.
   */
  speak = () => {
    console.log(`${this.name} barks!`);
  };

  /**
   * Says good things about this Dog.
   */
  goodBoi = () => {
    console.log(`${this.name} is a good ${this.type} `);
  };
} // end class Dog

// Instantiate a dog object
const spot = new Dog(
  {
    name: "Spot",
    color: ["Black", "White"],
    age: 10,
  },
  "dalmation"
);

// Try the dog's methods
spot.speak();
spot.goodBoi();
