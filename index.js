// 1. Check if a number is within a given range

const isNumberInRange = (number, object) => {
    const arrayToTest = Object.values(object);
    if (number >= arrayToTest[0] && number <= arrayToTest[1]) {
        return true;
    } else {
        return false;
    };
};

console.log(isNumberInRange(5, { min: 5, max: 5 }));

// 2. Scrabble

const getMaximumScore = (arrayWithObjects) => {
    sum = 0;
    for (const i in arrayWithObjects) {
        const arrayObject = arrayWithObjects[i];
        sum += arrayObject.score;
    };
    return sum;
};

console.log(getMaximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ]
));

// 3. Is it an empty object?

const isObjectEmpty = (object) => Object.keys(object).length === 0 ? true : false;

console.log(isObjectEmpty({a : 1}));

// 4. Counting letters

const countLetters = (string) => {
    const resultObject = {}
    for (i = 0; i < string.length; i++) {
        // got it from google so not sure I will remember this lol, i keep forgetting about the bracket notation for objects
        if (resultObject[string[i]]) {
            resultObject[string[i]] += 1;
        } else {
            resultObject[string[i]] = 1;
        };
    };
    return resultObject;
};

console.log(countLetters("yiiiiiihaaaaaahhhhhh"));

// 5. Free Shipping

const freeShipping = (object) => {
    const arrayofValues = Object.values(object);
    // console.log(arrayofValues); // helper log
    let totalCost = 0;
    for (const i in arrayofValues) {
        totalCost += arrayofValues[i];
    };
    if (totalCost >= 50) {
        return true;
    } else {
        return false;
    };
};

console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));

// 6. Programming Object

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// - Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

// - Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// - Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
console.log(programming);

// - Using a loop, iterate through the languages array and console.log all of the languages.
for (const i in programming.languages) {
    console.log(programming.languages[i]);
};

// - Using a loop, console.log all of the keys in the programming object.
for (const key in programming) {
    console.log(key);
};

// - Using a loop, console.log all of the values in the programming object.
for (const key in programming) {
    const value = programming[key];
    console.log(value);
};

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. 

const printSentence = () => {
    if (this.isChallenging === true && this.isRewarding === true) {
        console.log(`Learning the programming languages ${this.languages.join(", ")} is rewarding and challenging.`);
    } else {
        console.log("Hä?")
    };
};

programming.printSentence = printSentence;
console.log(programming.printSentence());
// Don't understand why it prints "Hä?" and not the sentence --> any leads??


// **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log(programming.printSentence);
// it will print the value of printSentence, which is the syntax of the function, which the console will not display, instead it will say [Function: printSentence]; if you call it you get the result of the function; if you only "name" the funytion, you will get the syntax of it

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.

Object.freeze(programming);







