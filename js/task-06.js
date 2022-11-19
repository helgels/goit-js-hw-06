const refs = {
    input: document.querySelector("#validation-input"),
}

const validLength = Number(refs.input.dataset.length);
refs.input.addEventListener("blur", onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value.length === validLength) {
        refs.input.classList.add("valid");
        refs.input.classList.remove("invalid");
    }
    else {
        refs.input.classList.remove("valid");
        refs.input.classList.add("invalid");
        
    }
}