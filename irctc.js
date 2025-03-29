function showHint(field) {
    let hints = {
        name: "Enter full name (only letters, min 3 characters).",
        email: "Enter a valid email (e.g., user@example.com).",
        password: "8-10 characters, 1 special char, 1 number.",
    };
    document.getElementById(field + 'Error').innerText = hints[field];
}

function validateName() {
    let name = document.getElementById("name").value;
    let pattern = /^[a-zA-Z ]{3,}$/;
    if (!pattern.test(name)) {
        document.getElementById("nameError").innerText = "Invalid name. Only letters, min 3 chars.";
    } else {
        document.getElementById("nameError").innerText = "";
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
    } else {
        document.getElementById("emailError").innerText = "";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if (!pattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be 8-10 chars, 1 special char, 1 number.";
    } else {
        document.getElementById("passwordError").innerText = "";
    }
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }
}