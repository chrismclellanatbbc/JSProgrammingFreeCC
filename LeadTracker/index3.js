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