const inputControl = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputControl.value}px`;

inputControl.addEventListener("input", () => {
  spanText.style.fontSize = `${inputControl.value}px`;
});
