const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", () => {
  if (inputText.value.trim() === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = inputText.value.trim();
  }
});
