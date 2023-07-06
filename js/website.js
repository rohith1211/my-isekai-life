const validUsername = 'rohith';
const validPassword = '1';

// Get the form element
const loginForm = document.getElementById('loginForm');
console.log(loginForm)

function addelement(temp){
  const container = document.querySelector('.container');
  const newDiv = document.createElement('div');
  // <div></div>
  newDiv.classList.add('additional-div');
  if(temp){
    newDiv.innerHTML = 'Login successful! redirecting to dashboard page';
    newDiv.style.color = 'green';
    container.appendChild(newDiv);
    setTimeout(function() {
      newDiv.remove();
    }, 2000);
    // Redirect to a new page or perform any other desired actions
    setTimeout(function() {
      window.location.href = 'dashboard.html';
    }, 2000);
    loginForm.reset();
  }
  else{
    newDiv.innerHTML = 'Invalid username or password.';
    newDiv.style.color = 'red';
    container.appendChild(newDiv);
    setTimeout(function() {
      newDiv.remove();
    }, 2000);
      // alert('Invalid username or password.'); // Show an alert for invalid credentials
  }
}

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the username and password input values
  const username = document.getElementById('username').value;
  console.log(username)
  const password = document.getElementById('password').value;
  console.log(password)


  // Perform validation
  if (username === '' || password === '') {
    alert('Please enter both username and password.'); // Show an alert if either field is empty
  } 
  else {
    // Check if the entered credentials are valid
    if (username === validUsername && password === validPassword) {
      addelement(true);
    } 
    else {
      addelement(false);
    }
  }
});
var submit = document.getElementById('submit');
// <button id ="submit" type="submit" >login</button>
submit.addEventListener('mouseover', function(event){
  event.preventDefault();
  submit.style.background = 'green';
})

submit.addEventListener('mouseout', function(event){
  event.preventDefault();
  submit.style.background = '#4c9daf';
})
  



