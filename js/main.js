function askQuestions () {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;

console.log('User\'s name is:' + fullName)


alert('Hi, ' + fullName + ', nice to see you here')

var age = prompt('How old are you?');
age = parseInt(age);
console.log('User is ' + age + ' years old');

if (age >= "18") {
	console.log("User is an adult.");
} else if (age >= "13") {
	console.log('User is a teenager.');
}	else {
	console.log('User is a child.');
}

if (fullName.toLowerCase() != "general assembly" && firstName.toLowerCase() == "general") {
		console.log("Hello General!");
		alert("Hello General!");
}

var faveColour = prompt('What is your favourite colour? (Please pick from red, blue, green or yellow').toLowerCase();
if (faveColour == 'red' ||
	faveColour == 'blue' ||
	faveColour == 'green' ||
	faveColour == 'yellow') {
	$('h1').css('color', faveColour);
}

}


// When the page loads //
/* When the page loads */

$(function() {
	$('img').one('click', askQuestions);


	// When the user clicks an h3 (jquery is listening out for clicks)
	$('h3').on('click', function() {

		// Show or hide the next section (this goes on whatever the context is - here it is whichever h3 was clicked on)
		// 'next' indicates that it should hide whatever element comes after the h3 element the user has clicked on
		// 'toggle' means either hide or then show again depending on how many times the user clicks!
		// slideToggle is a shortcut which gradually increases or decreases the size of the element the brackets with number after show how long in miliseconds to make it take
		$(this).next().slideToggle(800);
	});

});