// document.getElementById("count-el").innerText = 5

//let count = 5;
//count =  count + 3;
//console.log(count)

//intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clocked
// chnage the count-el in the HTML to reflect the new count

let count = 0;

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}