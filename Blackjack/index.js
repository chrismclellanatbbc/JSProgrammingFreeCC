
let cards = []; 
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Chris",
  chips: 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if(randomCard > 10){
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}

function startGame(params) {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  // Building the logic of the blackjack game
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " |";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and doesn't have Blackjack
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
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

/* -- */

// let featuredPosts = ["Check out my netflick clone",
//                      "Here is my link for my project",
//                      "I've just relaunched my portfolo"
//                     ]

// let messages = ["Hey, how's it going?",
//                 "I'm great, thank you! How about you?",
//                 "All good. Been working on my portfolio lately"]

// let newMessage = "Same here! Edited"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

/* -- */
//       START CON  FINISH CON  STEP SIZE CON
//for (let count = 10; count < 21; count += 1){
//   console.log("The count is now at: " + count)
//}

// let messages = ["Hey, how's it going?",
//                  "I'm great, thank you! How about you?",
//                  "All good. Been working on my portfolio lately"]

// for (let i = 0; i < 5; i++) {
//     console.log(messages[i])
// }

// for(let count = 10; count < 101; count += 10){
//     console.log("The count is now at:" + count)
// }

// let cardsArray = [7,3,9]

// for (let i = 0; i < cardsArray.length; i++) {
//     console.log(cardsArray[i])

// }

// let sentence = ["Hello", "my", "name", "is", "Chris"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {

//     greetingEl.textContent += sentence[i] + " ";

// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if(player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function totalRaceTime() {
//     totalRaceTime = player1Time + player2Time
//     return totalRaceTime
// }

// let raceTotalTime = totalRaceTime()
// console.log(raceTotalTime)

/* ---- */

// let hasCompletedCourse = true
// let givesCertificate = false

// if (hasCompletedCourse === true || givesCertificate === true) {
//   generateCert()
// }

// function generateCert() {
//   console.log("Generating certificate.....")
// }


// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution()
// }

// function showSolution() {
//   console.log("Showing the solution");
// }

// // Create two boolean variables, likesDocumentaries and likesStartups 
// // Use an OR Statement (||) to call recommenMovie() if either of those variables are true

// let likesDocumentaries = false;
// let likeStartups = false;

// if (likesDocumentaries === true || likeStartups === true) {
//   recommendMovie()
// }


// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!")
// }