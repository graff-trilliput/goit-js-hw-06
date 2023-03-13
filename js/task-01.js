const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const titleRef = item.firstElementChild;
    console.log(`Category: ${titleRef.textContent}`);
    const itemsRef = item.lastElementChild.children;
    console.log(`Elements: ${itemsRef.length}`);
})







// //
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5