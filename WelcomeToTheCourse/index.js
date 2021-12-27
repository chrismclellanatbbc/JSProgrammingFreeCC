let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    let previousCountStr = count + " - "
    saveEl.innerText += previousCountStr
    console.log(count)
}


//


let username = "Chris";
let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser);

let name = "Chris";
let greeting = "Hi, my name is ";

let myGreeting = greeting + name;
console.log(myGreeting)

//

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

//let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// let name2 = "Chris"
// let greeting2 = "Welcome back "
// let totalGreeting = greeting2 + name2

// // Rendar the welcome message using welcomeEl.innerText

// welcomeEl.innerText = totalGreeting;

