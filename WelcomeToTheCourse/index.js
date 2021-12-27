let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let previousCountStr = count + " - "
    saveEl.textContent += previousCountStr
    count = 0;
    countEL.textContent = 0
}


/*----*/


//let username = "Chris";
//let message = "You have three new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser);

// let name = "Chris";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;
// console.log(myGreeting)

/*---------*/

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

//let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// let name2 = "Chris"
// let greeting2 = "Welcome back "
// let totalGreeting = greeting2 + name2

// // Rendar the welcome message using welcomeEl.innerText

// welcomeEl.innerText = totalGreeting;

/*--------*/

// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

let firstName = "James"
let lastName = "Brown"
let fullName = firstName + " " +lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

function hello() {
    console.log(greeting + ", " + name + "!");
}

hello()

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point(params) {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)
