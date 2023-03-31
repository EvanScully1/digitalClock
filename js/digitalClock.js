function currentTime() {
    let theTime = new Date();
    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinute = theTime.getMinutes();
    let theSecond = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']
    let AMPM = "AM";
    if(theHour >= 12) {
        AMPM = "PM"
    }
    if(theHour > 12) {
        theHour = theHour % 12;
    }
    if(theHour < 10) {
        theHour = "0" + theHour;
    }
    if(theMinute < 10) {
        theMinute = "0" + theMinute;
    }
    if(theSecond < 10) {
        theSecond = "0" + theSecond;
    }

    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinute;
    document.getElementById('second').innerHTML = theSecond;
    document.getElementById('ampm').innerHTML = AMPM;

    let evenSeconds = theSecond % 2;

    if(evenSeconds == 0) {
        document.getElementById('colon1').style.color = "red";
        document.getElementById('colon2').style.color = "red";   
    }
    else {
        document.getElementById('colon1').style.color = "black";
        document.getElementById('colon2').style.color = "black";
    }
}
setInterval(() => {
    currentTime()
}, 1000);
