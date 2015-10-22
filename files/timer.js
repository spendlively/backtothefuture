dateFuture1 = new Date(2015,9,21,00,00,00); //4:29 pm
//dateFuture1 = new Date(2015,9,20,00,00,00); //4:29 pm

function GetCount(ddate,iid)
{
	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;

	// if time is already past
	if(amount < 0)
	{
//		document.getElementById("countbox0").innerHTML="The future is now the past.";
//		document.getElementById(iid).innerHTML="<i>Back to the Future</i> Day";
	}
	// else date is still good
	else
	{
		years=0;days=0;hours=0;mins=0;out="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		years=Math.floor(amount/31536000);//years (no leapyear support)
		amount=amount%31536000;

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		out += years +" "+((years==1)?"year":"years")+", ";
		out += days +" "+((days==1)?"day":"days")+", ";
		out += hours +" "+((hours==1)?"hour":"hours")+", ";
		out += mins +" "+((mins==1)?"minute":"minutes")+", ";
		out = out.substr(0,out.length-2);
		document.getElementById(iid).innerHTML=out + " away.";

		setTimeout(function(){GetCount(ddate,iid)}, 1000);
	}
}

function blinker()
{
	if(document.getElementById("b1").innerHTML == '<img src="./files/circleGreenOn.png" width="10" height="10">')
	{
		document.getElementById("a1").innerHTML = '<img src="./files/circleYellowOff.png" width="10" height="10" />';
		document.getElementById("a2").innerHTML = '<img src="./files/circleYellowOff.png" width="10" height="10" />';
		document.getElementById("b1").innerHTML = '<img src="./files/circleGreenOff.png" width="10" height="10" />';
		document.getElementById("b2").innerHTML = '<img src="./files/circleGreenOff.png" width="10" height="10" />';
		document.getElementById("c1").innerHTML = '<img src="./files/circleYellowOff.png" width="10" height="10" />';
		document.getElementById("c2").innerHTML = '<img src="./files/circleYellowOff.png" width="10" height="10" />';
	}
	else
	{
		document.getElementById("a1").innerHTML = '<img src="./files/circleYellowOn.png" width="10" height="10" />';
		document.getElementById("a2").innerHTML = '<img src="./files/circleYellowOn.png" width="10" height="10" />';
		document.getElementById("b1").innerHTML = '<img src="./files/circleGreenOn.png" width="10" height="10" />';
		document.getElementById("b2").innerHTML = '<img src="./files/circleGreenOn.png" width="10" height="10" />';
		document.getElementById("c1").innerHTML = '<img src="./files/circleYellowOn.png" width="10" height="10" />';
		document.getElementById("c2").innerHTML = '<img src="./files/circleYellowOn.png" width="10" height="10" />';
	}
}

function showMsg()
{
	alert('You must go 88 miles per hour to view this ad.');
}

function showHand(which)
{
	document.getElementById(which).style.cursor = "pointer";
}

function gaLink(which)
{
	window.open(which);
}