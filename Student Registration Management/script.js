function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");
    message.className = "";
    message.innerHTML = "";

    // Name Validation
    if (name === "") {
        return showError("Student Name is required.");
    }

    // Email Validation
    if (email === "") {
        return showError("Email is required.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return showError("Enter a valid email address.");
    }

    // Mobile Validation
    let mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        return showError("Enter a valid 10-digit mobile number.");
    }

    // Date of Birth
    if (dob === "") {
        return showError("Date of Birth is required.");
    }

    // Gender
    if (!gender) {
        return showError("Please select your gender.");
    }

    // Course
    if (course === "") {
        return showError("Please select a course.");
    }

    // Address
    if (address === "") {
        return showError("Address is required.");
    }

    // Password
    if (password === "") {
        return showError("Password is required.");
    }

    let digitPattern = /\d/;
    if (!digitPattern.test(password)) {
        return showError("Password must contain at least one digit.");
    }

    // Confirm Password
    if (confirmPassword === "") {
        return showError("Please confirm your password.");
    }

    if (password !== confirmPassword) {
        return showError("Passwords do not match.");
    }

    // Success Message
    message.className = "success";
    message.innerHTML = `Registration Successful! Welcome, ${name}.`;

    document.getElementById("registrationForm").reset();
}

// Error Function
function showError(text) {
    let message = document.getElementById("message");
    message.className = "error";
    message.innerHTML = text;
}
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();   // Stops page refresh
    validateForm();
});