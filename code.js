const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordConfirm');
const passwordError = document.getElementById('passwordError');
const form = document.querySelector('.masterForm');
const submit = document.getElementById('submitButton');

passwordConfirmInput.addEventListener('input', function(event) {
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordError.innerText = "PASSWORDS DO NOT MATCH";
        event.preventDefault();
    } else if (passwordInput.value.length <5 || passwordInput.value.length >20) {
        passwordError.innertText ="Password must be between 5 and 20 characters."
        event.preventDefault();
    } else {
        passwordError.innerText = ""
    }
});

