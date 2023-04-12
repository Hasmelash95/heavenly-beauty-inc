const subscribeButton = document.getElementById('subscribe-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const ageField = document.getElementById('age');
const emailField = document.getElementById('email');
const firstValid = document.getElementById('first-valid');
const lastValid = document.getElementById('last-valid');
const ageValid = document.getElementById('age-valid');
const emailValid = document.getElementById('email-valid');

// Form validation 

document.addEventListener('DOMContentLoaded', function() {
    if (subscribeButton != undefined) {
        subscribeButton.addEventListener('click', submitCheck);
    }
 });


function submitCheck() {
    if (firstName != undefined) {
        if (firstName.value.length == 0) {
            firstValid.classList.remove('visually-hidden');
        }
    }

    if (lastName != undefined) {
        if (lastName.value.length == 0) {
            lastValid.classList.remove('visually-hidden');
        }
    }

    if (ageField != undefined) {
        if (ageField.value.length == 0) {
            ageValid.classList.remove('visually-hidden');
        }
        else if (ageField.value < 18 || ageField.value > 120) {
            ageValid.classList.remove('visually-hidden');
        }
    }

    if (emailField != undefined) {
        if (emailField.value.length == 0) {
            emailValid.classList.remove('visually-hidden');
        }
        else if (!emailField.value.includes('@')) {
            emailValid.classList.remove('visually-hidden');
        }
    }
}

