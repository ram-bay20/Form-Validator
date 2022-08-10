//--VARIABLES--

const containers = document.querySelectorAll('.container');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const Name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const password2 = document.querySelector('#password-2');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');

//--FUNCTIONS--

//Registration form
const register = () => {
     const current = document.querySelector('.current');
     current.classList.remove('current');
     if (containers[1]) {
          containers[1].classList.add('current');
     }
};

//Login form
const login = () => {
     const current = document.querySelector('.current');
     current.classList.remove('current');
     if (containers[0]) {
          containers[0].classList.add('current');
     }
};

//Show Error Message
function showError(input, message) {
     const formControl = input.parentElement;
     formControl.className = 'form-control error';
     const small = formControl.querySelector('small');
     small.textContent = message;
}

//Show Success Message
function showSuccess(input) {
     const formControl = input.parentElement;
     formControl.className = 'form-control success';
}

//Check a valid email
function validEmail(input) {
     const val = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if (val.test(input.value.trim())) {
          showSuccess(input);
     } else {
          showError(input, 'Email is not valid...')
     }
}

// Check all input fields at a time
function checkField(inputs) {
     inputs.forEach(input => {
          if (input.value.trim() === '') {
               showError(input, `${getFieldName(input)} is required...`);
          } else {
               showSuccess(input);
               // input.value = '';
          }
     });
     inputs.value = '';
}

//Fix the length of input fields
function fixLength(input, min, max) {
     if (input.value.length < min) {
          showError(input, `${getFieldName(input)} must be of at least ${min} characters`);
     } else if (input.value.length > max) {
          showError(input, `${getFieldName(input)} must be less than ${max} characters`);
     } else {
          showSuccess(input);
     }
}

function confirmPassword(input1, input2) {
     if (input1.value !== input2.value) {
          showError(input2, 'Password not matched...');
     }
}

//Get Field Name
function getFieldName(input) {
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//--EVENTS--

//To open registration form
signup.addEventListener('click', e => {
     register();
});

//To open login form
signin.addEventListener('click', e => {
     login();
});

//Submit Event

//Submit Login Form
form1.addEventListener('submit', (e) => {
     e.preventDefault();

     checkField([Email,Password]);
     fixLength(Password, 8, 25);
     validEmail(Email);
});

//Submit Registration Form
form2.addEventListener('submit', (e) => {
     e.preventDefault();

     checkField([Name, email, password, password2]);
     fixLength(Name, 3, 30);
     fixLength(password, 8, 25);
     validEmail(email);
     confirmPassword(password, password2);
});
