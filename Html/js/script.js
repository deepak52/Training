function clearMessages() {
    document.getElementById("error-username").textContent = "";
    document.getElementById("error-password").textContent = "";
}

function blurFunction1() {
    const uname = document.getElementById("uname");
    const errorUsername = document.getElementById("error-username");
    if (uname.value.trim() === "") {
        errorUsername.textContent = "Make sure to enter a username!";
    }
}

function blurFunction2() {
    const pass = document.getElementById("pass");
    const errorPassword = document.getElementById("error-password");
    if (pass.value.trim() === "") {
        errorPassword.textContent = "Please enter a password!";
    }
}

function validatePassword(password) {
    // Use a regular expression to validate the password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
        return "Password should contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.";
    }

    return "";
}

function updateLoginButtonState() {
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    const button1 = document.getElementById("button1");

    if (uname.value.trim() !== "" && pass.value.trim() !== "") {
        button1.removeAttribute("disabled");
    } else {
        button1.setAttribute("disabled", "true");
    }
}

function LoginformValidation() {
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    const errorUsername = document.getElementById("error-username");
    const errorPassword = document.getElementById("error-password");

    errorUsername.textContent = "";
    errorPassword.textContent = "";

    if (uname.value.trim() === "") {
        errorUsername.textContent = "Make sure to enter a username!";
        return false; // Prevent form submission if there are errors
    }

    if (pass.value.trim() === "") {
        errorPassword.textContent = "Please enter a password!";
        return false; // Prevent form submission if there are errors
    } else {
        const passwordError = validatePassword(pass.value);
        if (passwordError) {
            errorPassword.textContent = passwordError;
            return false; // Prevent form submission if there are errors
        }
    }

    return true; // Allow form submission if there are no errors
}

document.getElementById("uname").addEventListener("input", updateLoginButtonState);
document.getElementById("pass").addEventListener("input", updateLoginButtonState);


