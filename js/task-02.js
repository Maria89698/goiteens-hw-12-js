const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
const ingredient = ingredients.map((element) => {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = element;  
  return itemsEl;
});
console.log(ingredient);

const listEl = document.querySelector('ingredients');
console.log(listEl);

listEl.append(...ingredient);

// const potato = document.createElement('li');
// potato.textContent = 'Картопля';

// const mushrooms = document.createElement('li');
// mushrooms.textContent = 'Гриби';

// const garlic = document.createElement('li');
// garlic.textContent = 'Часник';

// const tomato = document.createElement('li');
// tomato.textContent = 'Помідори';

// const green = document.createElement('li');
// green.textContent = 'Зелень';

// const condiment = document.createElement('li');
// condiment.textContent = 'Приправи';

// document.ingredients.append(potato, mushrooms, garlic, tomato, green, condiment);



