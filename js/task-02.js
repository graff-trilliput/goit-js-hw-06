const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector("#ingredients");
const elements = ingredients.map(
  ingredient => {
    const item = document.createElement("li")
    item.textContent = ingredient;
    item.classList.add("item");
    return item
  }
)
listRef.append(...elements);