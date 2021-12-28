let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame(params) {
    renderGame()
}

function renderGame() {
    // Building the logic of the blackjack game
    cardEl.textContent = "Cards: " + cards[0] + " | " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
   
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    let card = 5;
    sum += card;
    renderGame()

}


// /*------ */

// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// let age = 21

// // if less than 21 -> "You can not enter the club!"
// // else -> "Welcome"

// if (age >= 21){
//     console.log("Welcome")
// } else{
//     console.log("You can not enter the club!")
// }

// /*----- */

// // Check if the person is elegible for a birthday card from the King (100!)

// let personAge = 99

// // if less than 100 -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King"
// // else -> Not elegible, "you have already gotton one"

// if(personAge < 100) {
//     console.log("Not elegible")
// } else if (personAge === 100) {
//     console.log("Here is your birthday card from the King")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }