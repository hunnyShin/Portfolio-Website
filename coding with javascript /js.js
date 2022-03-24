
function validate(userInput) {
	console.log(userInput);
}
	console.log('----------------');
	console.log('Truthy vs. Falsy');
	console.log('-');
var userInput = "";
	if (userInput) {
	} else {
		console.log ('I will execute when all "else" fails...');
	}

	var userInput = "";
	if (!userInput) {
		console.log('Hey I\'m true!');
	} else {
			console.log ('I will execute when all "else" fails...');
		}
	if (userInput == false) {
		console.log('Hey I\'m true!, confused? Yeah me too... but don\'t worry it\'ll get better!');
	} else {
		console.log('I will execute when all "else" fails...');
	}
		console.log('---Diving deeper---');

	var input1 = "10";
	var input2 = 10;
	console.log(input1 == input2);
	console.log(input1 === input2);
	var input3 = "";
	var input4 = 0;
	console.log(input3 == input4);

	var a = [1, 2];
	var b = a;
	var c = [1, 2];
	a === b;
	a === c;
	b == c;
	console.log('{ age: 1 } === { age: 1 } is', { age: 1 } === { age: 1 });

	var a = [1, 2];
	var b = [1, 2];
	var isEqual = a[0] === b[0] && a[1] === b[1];
	console.log ('isEqual value:', isEqual);
	console.log('---------------');
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
