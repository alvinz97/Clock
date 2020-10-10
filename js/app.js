setInterval(setClock, 1000);

const hourHand = document.querySelector('[date-hour-hand]');
const minuteHand = document.querySelector('[date-minute-hand]');
const secondHand = document.querySelector('[date-second-hand]');

function setClock () {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;

    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();


function showTime(){
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var backcolornum = (h / 60) + m
	var backcolor = backcolornum/5.64705882353
	var session = "AM";
	
	if(h == 0){
		h = 12;
	}
	
	if(h > 12){
		h = h - 12;
		session = "PM";
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("digitalClock").innerText = time;
	document.getElementById("digitalClock").textContent = time;
	// console.log(time);
	document.getElementById("body").style.backgroundColor = backcolor;
	setTimeout(showTime, 1000);
}