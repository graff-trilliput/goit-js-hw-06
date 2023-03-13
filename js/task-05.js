const spanRef = document.querySelector("#name-output");
const inputRef = document.querySelector("#name-input");

inputRef.addEventListener("input", onInput);
function onInput(event) {
    const value = event.target.value;

    spanRef.textContent = value ? value : "Anonymous";
}