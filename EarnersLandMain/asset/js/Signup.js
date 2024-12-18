const form = document.getElementById('form');
const FirstName_input = document.getElementById('FirstName-input'); 
const Email_input = document.getElementById('Email-input'); 
const Password_input = document.getElementById('Password-input'); 
const ConfirmPassword_input = document.getElementById('ConfirmPassword-input'); 
const error_massage = document.getElementById('error-massage');

form.addEventListener('submit', (e) => {
    let errors = [];

    if (FirstName_input) {
        // If FirstName_input exists, we are on the signup page
        errors = getSignupFormErrors(FirstName_input.value, Email_input.value, Password_input.value, ConfirmPassword_input.value);
    } else {
        // If no FirstName_input, we are on the login page
        errors = getLoginFormErrors(Email_input.value, Password_input.value);
    }

    if (errors.length > 0) {
        e.preventDefault();
        error_massage.innerText = errors.join(". ");
    } else {
        error_massage.innerText = '';  // Clear error messages if no errors
    }
});

function getSignupFormErrors(FirstName, Email, Password, ConfirmPassword){
    let errors = [];

    if (FirstName.trim() === '') {
        errors.push('FirstName is required');
        FirstName_input.parentElement.classList.add('incorrect');
    }
    if (Email.trim() === '') {
        errors.push('Email is required');
        Email_input.parentElement.classList.add('incorrect');
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(Email)) {
        errors.push('Please enter a valid email address');
        Email_input.parentElement.classList.add('incorrect');
    }
    if (Password.trim() === '') {
        errors.push('Password is required');
        Password_input.parentElement.classList.add('incorrect');
    }
    if (Password.length < 8) {
        errors.push('Password must be at least 8 characters');
        Password_input.parentElement.classList.add('incorrect');
    }
    if (Password !== ConfirmPassword) {
        errors.push('Passwords do not match');
        Password_input.parentElement.classList.add('incorrect');
        ConfirmPassword_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(Email, Password){
    let errors = [];

    if (Email.trim() === '') {
        errors.push('Email is required');
        Email_input.parentElement.classList.add('incorrect');
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(Email)) {
        errors.push('Please enter a valid email address');
        Email_input.parentElement.classList.add('incorrect');
    }
    if (Password.trim() === '') {
        errors.push('Password is required');
        Password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [FirstName_input, Email_input, Password_input, ConfirmPassword_input].filter(input => input != null);
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_massage.innerText = '';  // Reset error message
        }
    });
});
