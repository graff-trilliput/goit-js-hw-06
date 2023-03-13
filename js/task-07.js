const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
inputRef.addEventListener("input", onInput);

const value = inputRef.value;
    spanRef.style.fontSize = `${value}px`;
function onInput(event) {
    const value = event.target.value;
    spanRef.style.fontSize = `${value}px`;
}