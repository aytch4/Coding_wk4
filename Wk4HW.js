// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
console.log("1.")

function createCompleteName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`)
}

createCompleteName("Bob", "Susslob");

// 2.	Write the same function as above as an arrow function with a different name.
console.log("2.")

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`; 
 
console.log(createFullName("Joe", "Schmoe"))
// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.	Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
console.log("3.")

//setTimeout(() => { alert('Time is Up!'); }, 1000);

// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.

//let areWeThereYet = setInterval(() => alert('Are we there yet?'), 4000);

// 4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.
// a.	Write a function named processSplicedValue that takes 3 parameters – 
//an array, the index of the element to be spliced from the array, and a callback that will process the sliced element.
// b.	Inside the function, use the first two parameters to splice an element from the array.
// c.	Call the callback function and pass the spliced value into it.
// d.	Outside of your function, create an array of strings, call processSplicedValue, and pass the array, an index number,
// and console.log into it. For example: processSplicedValue(arrayName, 2, console.log);
// e.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.

console.log("4.abcd")

var collegeFriends = ["Jessi", "Indra", "Maria", "Roy", "Debbie", "KD", "Kevin"];

function processSplicedValue(myArray, index, callback) {
    let removedElement = myArray.splice(index, 1);
    callback(removedElement);
}
processSplicedValue(collegeFriends, 3, console.log)
//Good- don't change

console.log("4e - alerts")
processSplicedValue(collegeFriends, 3, alert) //works


// f.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the 
//spliced value.
console.log("4f")
    
processSplicedValue(collegeFriends, 3, a => console.log(a))

// g.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice
// that you should create and name.
console.log("4g - Capitalizes the spliced name")

function capitalize(incomingString) {
       //console.log(incomingString.toString());
       
    console.log(incomingString.toString().toUpperCase());
}

processSplicedValue(collegeFriends, 3, capitalize)


