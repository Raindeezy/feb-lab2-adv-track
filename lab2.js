/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {}
var blob = new Blob();

var consumptionRate = 1;
var hours = 0;
var persons = 1000;
var startingPersons = 1000;
while (persons > 0) {
  hours++;
  persons -= consumptionRate;
  consumptionRate = (consumptionRate + (-persons + startingPersons)); //consumption rate is a fibbonaci sequence :)
  console.log(consumptionRate);
}

var hoursSpentInDowington = 9; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  var hours = 0;
  var startingPop = population;
  while (population > 0) {
    hours++;
    population -= peoplePerHour;
    peoplePerHour = (peoplePerHour + (-population + startingPop));
  }
  return hours;
}

// TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\'s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(10000, 10) === 9, "error");
assert(blob.hoursToOoze(50, 2) === 5, "error");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, theirLanguage) {
  this.homePlanet = homePlanet;
  this.theirLanguage = theirLanguage;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function Klingon () {}
function Human () {}
function Romulan () {}

function sayHello (sb) {
  console.log(hello[this.theirLanguage]);
  return (hello[sb.theirLanguage]);
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
}

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

Klingon.prototype = new SentientBeing("Qo\"noS", "klingon");
Human.prototype = new SentientBeing("Earth", "federation standard");
Romulan.prototype = new SentientBeing("Romulus", "romulan");

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "I don't understand you");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "I don't understand you");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "I don't understand you");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "I don't understand you");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "I don't understand you");
//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
function lastLetterSort(stringArray) {
function byLastLetter(array) {
  this.array = array;
  for (var i = 0; i < array.length; i++) {
    array.splice(i, 1, array[i].split("").reverse().join(""));
  }
  return array;
}

byLastLetter(stringArray).sort();
byLastLetter(stringArray);
return stringArray;
}

var myString = [
"javascript", "b", "d", "z", "ruby", "python", "jquery", "php", "java", "c", "cplusplus"
];

lastLetterSort(myString);

assert(myString[0] === "java", "error");
assert(myString[myString.length - 1] === "z", "error");

function sumArray(array) {
  var sum = 0;
  array.forEach(function add(value) {
    sum += value;
  });
  // TODO: implement me using forEach
  return sum;
}

var numberArray = [ 1, 2, 3 ];
var numberArray2 = [ 11, 19, 20 ];
var numberArray3 = [ [ 1, 3, 2 ], [ 12, 4, 20 ], [ 0, 0, 1 ], [ 0, 0, 0 ], [ 100, 100, 100 ] ];

assert(sumArray(numberArray) === 6, "error");
assert(sumArray(numberArray2) === 50, "error");

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    return sumArray(a) - sumArray(b);
  });
  return arrayOfArrays;
    // TODO: implement me using sumArray
  //  order the arrays based on the sum of the numbers
  //  inside each array
}

sumSort(numberArray3);

//assertions
for (var i = 0; i < numberArray3.length - 1; i++) {
  assert(sumArray(numberArray3[i]) < sumArray(numberArray3[i + 1]), "error");
}
assert(sumArray(numberArray3[0]) < sumArray(numberArray3[1]), "error");
assert(sumArray(numberArray3[1]) < sumArray(numberArray3[2]), "error");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
