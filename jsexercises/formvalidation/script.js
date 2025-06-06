// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   // Validate with the built-in constraints
//   email.setCustomValidity("");
//   if (!email.validity.valid) {
//     return;
//   }

//   // Extend with a custom constraints
//   if (!email.value.endsWith("@example.com")) {
//     email.setCustomValidity("Please enter an email address of @example.com");
//   }
// });

// const form = document.querySelector("form");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = ""; // Remove the message content
//     emailError.className = "error"; // Removes the `active` class
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   // if the email field is invalid
//   if (!email.validity.valid) {
//     // display an appropriate error message
//     showError();
//     // prevent form submission
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     // If empty
//     emailError.textContent = "You need to enter an email address.";
//   } else if (email.validity.typeMismatch) {
//     // If it's not an email address,
//     emailError.textContent = "Entered value needs to be an email address.";
//   } else if (email.validity.tooShort) {
//     // If the value is too short,
//     emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//   }
//   // Add the `active` class
//   emailError.className = "error active";
// }

const email = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const form = document.getElementById("form");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.addEventListener("input", (event) => {
    if (!email.validity.valid) {
      email.setCustomValidity("I am expecting an email address!");
    } else {
      email.setCustomValidity("");
    }
  });
});

country.addEventListener("input", (event) => {
    // Validate with the built-in constraints
    email.addEventListener("input", (event) => {
      if (!email.validity.valid) {
        email.setCustomValidity("I am expecting an email address!");
      } else {
        email.setCustomValidity("");
      }
    });
  });
