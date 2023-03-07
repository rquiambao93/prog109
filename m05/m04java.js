/**
 * program to generate Multiplication Table
 * 
 */
window.onload = function () {
	var table = prompt("Enter a number between zero and ten!"); // ask user for a number
	while (!verify(table)) {
		table = prompt(
			"Sorry! That didn't work. Please enter a number between zero and ten"
		);
	}

	var output = "<h2>Multiplication Table</h2>"; // display in #blackboard

	// run this loop ten times (from 1 to 10)
	for (var i = 1; i <= 10; i++) {
		//add a new line to the output
		output += i + " × " + table + " = " + i * table + "<br />";
	}

	// Write the message into the page
	var el = document.getElementById("blackboard");
	el.innerHTML = output;

	function verify(num) {
		if (num >= 0 && num <= 10) {
			return true;
		}
		return false;
	}
};
