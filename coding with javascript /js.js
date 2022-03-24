
function validate(userInput) {
	// userInput is the message that is entered in the text field
	// use window.alert("Message") to output errors
	// return true when no error occurs
	// return false if an error occurs
	if (userInput.length > 3) {
		console.log(userInput)
		return true
	} else {
		window.alert("required more than 3 characters to submit.")
		return false
	}
}

function submitFunction() {
	validate(document.getElementById("emailInput").value);
}

document.getElementById("submit-btn").addEventListener("click", function (event) {
	event.preventDefault()
});
