var timeBox = document.querySelector('.inner_text');


 currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let session = "AM"

    if(hour == 0) {
        hour ==12;
    }

    if(hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second <10) ? "0" + second :second;

    let time = hour + ":" + minute + ":" + second + " " + session; 

    timeBox.innerHTML = time;
    var t = setTimeout(function () {
        currentTime()
    }, 1000);
}

currentTime();