const containerEl = document.getElementById("container")

containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    containerEl.innerHTML += "<p>Thank you for buying!</p>"
}

const recipient = "James"
const sender = "Chris"
//const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = `Hey ${recipient}!
How is it going 
Cheers ${sender}
`

console.log(email)

const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name}`
}

greetUser("Hello and welcome", "Chris")


function add(num1, num2) {
    return num1 + num2
}
console.log(add(3,4))
console.log(add(39,4))

function getFirst(arr) {
    return arr[0]
}

console.log(getFirst(["A", "B"]))