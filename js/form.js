// Run function when DOM Content has loaded
document.addEventListener('DOMContentLoaded', init);

// Function to run when DOM Content has loaded
function init(event) {

	// Get registration form and keep in global scope
	regForm = document.forms['absentForm'];

	// Listen for form submit
	regForm['submit'].onclick = validateForm;
}

// Function to validate form elements
function validateForm(event) {

	// Array to contain all error messages
	var errorMessages = Array();

	// If username is empty
	if(!regForm['name'].value) {
		errorMessages.push('Please enter Username');
	}

	if(!regForm['id'].value) {
		errorMessages.push('Please enter your student or staff id number');
	}

	if(!regForm['reason'].value) {
		errorMessages.push('Please enter reason of absence');
	}

  if(!regForm['date_from'].value) {
      errorMessages.push('Please select absent start date');
  }

	if(!regForm['date_to'].value) {
		errorMessages.push('Please select absent end date');
	}

	if(!regForm['mail'].value) {
		errorMessages.push('Please enter your email address');
	}

  // Show error messages
	displayErrors(errorMessages);

	// If there are errors
	if(errorMessages.length) {
		// Stop the form from submitting
		return false;
	}
}

function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');

  // If there aren't any errors
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;
	}

	// Get reference to error box
	var errorBox = document.getElementById('errorMessages');

	// Prepare a container to hold the completed error message string
	var messageString = '<ul>';

	// Loop through each error to display
	for(var i=0; i<errors.length; i++) {
		messageString += '<li>' + errors[i] + '</li>';
	}

	messageString += '</ul>';

	errorBox.innerHTML = messageString;
}
