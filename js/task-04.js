const decrement = document.querySelector('[data-action = "decrement"]');

const increment = document.querySelector('[data-action = "increment"]');

let value = 0;

decrement.addEventListener("click", () => {value += 1});
increment.addEventListener("click", () => {value -= 1});



// function increment () {
//     counterValue.addEventListener("click", () => {value += 1})
// };

// function decrement() {
//     counterValue.addEventListener("click", () => {value -= 1})
// };