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

    if (field.id === 'name') {
        // Capitalize the first letter of every word when the field is "name"
        field.value = value.replace(/\b\w/g, function(txt) {
            return txt.toUpperCase();
        });
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

document.getElementById("date").addEventListener("input", function() {
    const date = this.value;
    const errorMessage = document.getElementById("dob-error");

    if (date === "") {
        errorMessage.textContent = "Date of Birth is required";
        errorMessage.style.display = "block"; // Show the error
    } else {
        const inputDate = new Date(date);
        const minDate = new Date("2005-01-01");

        if (isNaN(inputDate) || inputDate > minDate) {
            errorMessage.textContent = "Date must be on or before January 1, 2005";
            errorMessage.style.display = "block"; // Show the error
        } else {
            errorMessage.textContent = ""; // Clear the error message
            errorMessage.style.display = "none"; // Hide the error
        }
    }
});

// Add a blur event listener to display an error when the field is empty on blur
document.getElementById("date").addEventListener("blur", function() {
    const date = this.value;
    const errorMessage = document.getElementById("dob-error");

    if (date === "") {
        errorMessage.textContent = "Date of Birth is required";
        errorMessage.style.display = "block"; // Show the error
    }
});

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

function capitalizeName(field, errorId) {
    const errorMessage = document.getElementById(errorId);
    const value = field.value.trim();

    if (value === "") {
        errorMessage.textContent = "This field is required";
        errorMessage.style.display = "block"; // Show the error
    } else {
        // Capitalize the first letter of every word
        field.value = value.replace(/(^\w|\s\w)(\S*)/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
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
        } else if (element.id === "date") {
            validateDateOfBirth(element, errorElement);
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