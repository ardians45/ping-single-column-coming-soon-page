const form = document.getElementById("email-form");
const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = inputEmail.value.trim();
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  if (email === "") {
    errorMessage.textContent = "Please enter your email address.";
    errorMessage.style.display = "block";
    inputEmail.style.borderColor = "red";
    errorMessage.style.color = "red";
    return;
  }

  if (!isValidEmail) {
    errorMessage.textContent = "Please provide a valid email";
    errorMessage.style.display = "block";
    inputEmail.style.borderColor = "red";
    errorMessage.style.color = "red";
  } else {
    errorMessage.style.color = "";
    errorMessage.style.display = "block";
    errorMessage.textContent = "Thanks for signing up!";
    inputEmail.style.borderColor = "";
    inputEmail.value = "";
    return;
  }
});
