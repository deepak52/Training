function clearMessage(errorId) {
    const errorMessage = document.getElementById(errorId);
    errorMessage.style.display = "none";
}

function validateField(field, errorId) {
    const errorMessage = document.getElementById(errorId);
    const value = field.value.trim();

    if (value === "") {
        errorMessage.textContent = "This field is required";
        errorMessage.style.display = "block"; // Show the error
    } else {
        errorMessage.style.display = "none"; // Hide the error
    }
}

function validateEmail(emailField, errorId) {
    const email = emailField.value.trim();
    const errorMessage = document.getElementById(errorId);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = "block"; // Show the error
    } else {
        errorMessage.style.display = "none"; // Hide the error
    }
}

function validatePhoneNumber(phoneField, errorId) {
    const phone = phoneField.value.trim();
    const errorMessage = document.getElementById(errorId);
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Please enter a valid 10-digit phone number";
        errorMessage.style.display = "block"; // Show the error
    } else {
        errorMessage.style.display = "none"; // Hide the error
    }
}

function validatePassword(passId, pass2Id, errorId) {
    const password1 = document.getElementById(passId).value.trim();
    const password2 = document.getElementById(pass2Id).value.trim();
    const errorMessage = document.getElementById(errorId);

    if (password1 === "") {
        errorMessage.textContent = "Password is required";
        errorMessage.style.display = "block"; // Show the error
    } else if (password1 !== password2) {
        errorMessage.textContent = "Passwords do not match";
        errorMessage.style.display = "block"; // Show the error
    } else {
        errorMessage.style.display = "none"; // Hide the error
    }
}

function validateSelectField(fieldId, errorId) {
    const selectField = document.getElementById(fieldId);
    const errorMessage = document.getElementById(errorId);

    if (selectField.value === "") {
        errorMessage.textContent = "This field is required";
        errorMessage.style.display = "block"; // Show the error
    } else {
        errorMessage.style.display = "none"; // Hide the error
    }
}

function FormValidation() {
    const fieldsToValidate = ["name", "email", "phone", "date", "gndr", "state", "district", "Uname", "pass1", "pass2"];
    let valid = true;

    fieldsToValidate.forEach((field) => {
        const element = document.getElementById(field);
        const errorElement = document.getElementById(field + "-error");

        if (element.id === "email") {
            validateEmail(element, errorElement);
        } else if (element.id === "phone") {
            validatePhoneNumber(element, errorElement);
        } else if (element.id === "gndr" || element.id === "state" || element.id === "district") {
            validateSelectField(element.id, errorElement.id);
        } else {
            if (element.value.trim() === "") {
                errorElement.textContent = "This field is required";
                errorElement.style.display = "block"; // Show the error
                valid = false;
            } else {
                errorElement.style.display = "none"; // Hide the error
            }
        }
    });

    validatePassword("pass1", "pass2", "pass-error");

    return valid;
}

