const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const currentLength = event.target.value.length;
    const validLength = event.target.dataset.length;
    event.target.classList.remove("valid", "invalid");
    if (currentLength === Number(validLength)) {
        event.target.classList.add("valid");
    } else {
        event.target.classList.add("invalid")
    }
}