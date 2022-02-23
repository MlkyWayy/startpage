function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");
  var day = document.getElementById("day");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs >= 1 && hrs <= 9) {
    day.innerHTML = "Morning";
  } else if (hrs >= 10 && hrs <= 16) {
    day.innerHTML = "Afternoon";
  } else {
    day.innerHTML = "Evening";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}
setInterval(displayTime, 10);
