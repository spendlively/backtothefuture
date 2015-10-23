function updateClock ( )
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} var today = mm+'/'+dd+'/'+yyyy;

  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").value = today + " " + currentTimeString;
  
  if(mm == "01")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">JAN</span>';
  }
  else if(mm == "02")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">FEB</span>';
  }
  else if(mm == "03")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">MAR</span>';
  }
  else if(mm == "04")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">APR</span>';
  }
  else if(mm == "05")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">MAY</span>';
  }
  else if(mm == "06")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">JUN</span>';
  }
  else if(mm == "07")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">JUL</span>';
  }
  else if(mm == "08")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">AUG</span>';
  }
  else if(mm == "09")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">SEP</span>';
  }
  else if(mm == "10")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">OCT</span>';
  }
  else if(mm == "11")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">NOV</span>';
  }
  else if(mm == "12")
  {
  	document.getElementById("presentMonth").innerHTML = '<span class="digital green">DEC</span>';
  }
  
  document.getElementById("presentDay").innerHTML = '<span class="digital green">' + dd + '</span>';
  document.getElementById("presentHour").innerHTML = '<span class="digital green">' + currentHours + '</span>';
  document.getElementById("presentMinute").innerHTML = '<span class="digital green">' + currentMinutes + '</span>';
console.log(timeOfDay)
  if(timeOfDay == "AM")
  {
	  document.getElementById("presentAM").innerHTML = '<img src="./files/circleGreenOn.png" width="10" height="10" />';
	  document.getElementById("presentPM").innerHTML = '<img src="./files/circleGreenOff.png" width="10" height="10" />';
  }
  else
  {
	  document.getElementById("presentPM").innerHTML = '<img src="./files/circleGreenOn.png" width="10" height="10" />';
	  document.getElementById("presentAM").innerHTML = '<img src="./files/circleGreenOff.png" width="10" height="10" />';
  }
  
  document.getElementById("presentYear").innerHTML = '<span class="digital green">' + yyyy + '</span>';
}