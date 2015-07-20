// set the dropdown list for birth year to 100 years prior to today
	// create option element and add numbers to innerHTML

var thisYear = new Date().getFullYear();
var listMin = thisYear - 100;
var datalist = document.getElementById("year");

for (listMin; listMin <= thisYear; listMin++) {
	var opt = document.createElement("option");
	opt.value = listMin;
	opt.innerHTML = listMin;
	datalist.appendChild(opt);
}

var date = new Date();
var currentMonth = date.getMonth();
var dayOfMonth = date.getDate();


//Assuming birth was at 0 hours, 0 min, 0 seconds of birth date;

var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var monthsOld;
var yearsOld;
var daysOld;



$('#submit').click(function( event ){
	event.preventDefault();
	var birthYear = $("input[name='year']").val();
	var birthMonth = $("input[name='month']").val();
	var birthDay = $("input[name='day']").val();

	//set array for months

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	for (i = 0; i < months.length; i++) {
		if (birthMonth === months[i]) {
			birthMonth = i;
		}
	}

		// if current month > 8, do current month - 8, years stay same
	// if current month < 8, do 12 - (8 - current month), subtract 1 from years

	if (currentMonth >= birthMonth) {
		monthsOld = currentMonth - birthMonth;
		yearsOld = thisYear - birthYear;
	} else if (currentMonth < birthMonth) {
		monthsOld = 12 - (birthMonth - currentMonth);
		yearsOld = (thisYear - birthYear) - 1;
	}


	// if date >= 3, current date - 3, months years stay same
	// if date < 3 and month < 8, 31 - (current date - 3), months -1

	if (dayOfMonth >= birthDay) {
		daysOld = dayOfMonth - birthDay;
	} else if (dayOfMonth < birthDay) {
		daysOld = 31 - (dayOfMonth - birthDay); //This is inaccurate since months have different number of days.
		monthsOld = monthsOld - 1;
	}

		var output = document.getElementById("output") 
		output.style.display="block";
		output.innerHTML = "You are " + yearsOld + " years, " + monthsOld + " months, " + daysOld + " days, " + hour + " hours, " + minutes + " minutes, and " + seconds + " seconds old.";

});








