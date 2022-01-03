const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-id");
let myLeads = ["www.mylead1.com","www.myleads2.com","www.myleads3.com"];

inputBtn.addEventListener("click", function() {
    console.log("Before push")
    myLeads.push(inputEl.value);
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    //console.log(myLeads[i])
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}