const inputValidation = document.querySelector("#validation-input");

const dataLength = Number(inputValidation.dataset.length);

inputValidation.addEventListener("input", () => {
  if (inputValidation.value.length === dataLength) {
    inputValidation.classList.replace("invalid", "valid");
  } else {
    inputValidation.classList.add("invalid");
  }
});
