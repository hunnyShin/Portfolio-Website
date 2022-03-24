
function validate(userInput) {
	console.log(userInput);
}

  // userInput is the message that is entered in the text field
  // use window.alert("Message") to output errors
  // return true when no error occurs
  // return false if an error occurs

  //Check that the field userInput is filled

// -------------------------------------------------------------------------------
// DON'T CHANGE ANYTHING BELOW THIS LINE!
// -------------------------------------------------------------------------------



function submitFunction() {
  validate(document.getElementById("emailInput").value);
}

document.getElementById("submit-btn").addEventListener("click", function(event){
  event.preventDefault()
});
