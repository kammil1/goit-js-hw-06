const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  spanValue.textContent = counterValue;
  return (counterValue -= 1);
});

incrementBtn.addEventListener("click", () => {
  spanValue.textContent = counterValue;
  return (counterValue += 1);
});
