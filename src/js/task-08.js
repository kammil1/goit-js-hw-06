const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const submit = document.querySelector("button[type='submit']");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value !== "" && password.value !== "") {
    const dataForm = {
      email: email.value,
      password: password.value,
    };
    console.log(dataForm);
  } else {
    alert("Proszę uzupełnić wszystkie pola");
  }
  form.reset();
});
