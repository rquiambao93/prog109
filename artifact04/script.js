document.querySelector("#myform").addEventListener("submit", validateForm);

function validateForm(e) {
	console.log("VALIDATING FORM");

	// clear previous error messages
	document.getElementById("errorMessages").innerHTML = "";

	var validators = [
		firstName,
		lastName,
		email,
		phone,
		username,
		password,
		address,
		city,
		state,
		country,
		zipcode,
	];

	// run all validators, if false reject form
	const results = validators.map((v) => v());
	if (!results.every((r) => r === true)) {
		e.preventDefault();
	}

	// validators
	function firstName() {
		//1) Create variable
		var validFirstname = false;

		//2) read value from HTML
		const firstname = document.getElementById("FirstName").value;

		//3) Do validation
		var errorMessages = "";
		if (!firstname.match(/^[a-zA-Z]{1,20}$/))
			errorMessages +=
				"<p>The first name is required, cannot be greater than 20 characters, and must only contain alpha values</p>";
		else validFirstname = true;

		//4) Send error message to HTML
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return status of each field
		return validFirstname;
	}

	function lastName() {
		//1) Create variable
		var validLastname = false;

		//2) read value from HTML
		const lastname = document.getElementById("LastName").value;

		//3) Do validation
		var errorMessages = "";
		if (!lastname.match(/^[a-zA-Z]{1,50}$/))
			errorMessages +=
				"<p>The last name is required, cannot be greater than 50 characters, and must only contain alpha values</p>";
		else validLastname = true;

		//4) Send error message to HMTL
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return status of each field
		return validLastname;
	}

	function email() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validEmail = false;

		//2) create variables to read the values from html
		const email = document.querySelector("#EMail").value;

		//3) do the validation
		var errorMessages = "";
		if (!email.match(/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/)) {
			errorMessages += "<p>Email is required, must contain a @ and domain</p>";
		} else validEmail = true;

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validEmail;
	}

	function phone() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validPhone = false;
		//2) create variables to read the values from html
		const phone = document.getElementById("Phone").value;

		//3) do the validation
		var errorMessages = "";
		if (
			phone.length > 15 ||
			phone === null ||
			phone === "" ||
			!phone.match(/^(\d+)\-?(\d*)\-?(\d*)$/)
		) {
			errorMessages =
				"<p>Phone number should only contains number and must not be longer than 15 digits";
		} else {
			validPhone = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validPhone;
	}

	function username() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validUsername = false;
		//2) create variables to read the values from html
		const username = document.getElementById("Username").value;

		//3) do the validation
		var errorMessages = "";
		if (username.length > 12 || username === null || username === "") {
			errorMessages =
				"<p>Username is required and must not be longer than 12 characters";
		} else {
			validUsername = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validUsername;
	}

	function password() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validUsername = false;
		//2) create variables to read the values from html
		const password = document.getElementById("Password").value;

		//3) do the validation
		var errorMessages = "";
		if (
			password.length > 7 ||
			!password.match(/[A-Z]/) || 
			!password.match(/[0-9]/) || 
		) {
			errorMessages =
				"<p>Password is required, may not be longer than 7 characters, and must contain at least one uppercase letter and one number";
		} else {
			validUsername = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validUsername;
	}

	function address() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validAddress = false;

		//2) create variables to read the values from html
		const address = document.getElementById("Address").value;

		//3) do the validation
		var errorMessages = "";
		if (address === null || address === "") {
			errorMessages = "<p>Address is required.";
		} else {
			validAddress = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validAddress;
	}

	function city() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validCity = false;

		//2) create variables to read the values from html
		const city = document.getElementById("City").value;

		//3) do the validation
		var errorMessages = "";
		if (city === null || city === "") {
			errorMessages = "<p>City is required.";
		} else {
			validCity = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validCity;
	}

	function state() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validState = false;

		//2) create variables to read the values from html
		const state = document.getElementById("State").value;

		//3) do the validation
		var errorMessages = "";
		if (state === null || state === "") {
			errorMessages = "<p>State is required.";
		} else {
			validState = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validState;
	}

	function country() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validCountry = false;

		//2) create variables to read the values from html
		const country = document.getElementById("Country").value;

		//3) do the validation
		var errorMessages = "";
		if (country === null || country === "") {
			errorMessages = "<p>Country is required.";
		} else {
			validCountry = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validCountry;
	}

	function zipcode() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validZipcode = false;

		//2) create variables to read the values from html
		const zipcode = document.getElementById("Zipcode").value;

		//3) do the validation only is USA
		if (document.getElementById("Country").value !== "USA") {
			document.getElementById("Zipcode").value = "";
			return true;
		}

		var errorMessages = "";
		if (
			zipcode === null ||
			zipcode === "" ||
			zipcode.length > 5 ||
			isNaN(zipcode)
		) {
			errorMessages = "<p>Zipcode is required.";
		} else {
			validZipcode = true;
		}

		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validZipcode;
	}
});


