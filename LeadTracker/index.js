const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-id");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""
  renderLeads()
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    //listItems += '<li>' + '<a href= ' + myLeads[i] + ' ' + 'target="_blank">' + myLeads[i] + '</a>' + '</li>';
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
      </li>
    `

    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

    // Code below
    // Creates li element, sets li text content with array content then append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }

  ulEl.innerHTML = listItems;
}
