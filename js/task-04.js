const decrementRef = document.querySelector(`[data-action="decrement"]`);
const incrementRef = document.querySelector(`[data-action="increment"]`);
const spanRef = document.querySelector("#value");

decrementRef.addEventListener("click", onDecrementClick);
let value = 0;
function onDecrementClick(event) {
    value -= 1;
    spanRef.textContent = value;
}

incrementRef.addEventListener("click", onIncrementClick);
function onIncrementClick(event) {
    value += 1;
    spanRef.textContent = value;
}