const clock = document.querySelector(".clock");
const span = document.querySelectorAll(".blink");
const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".sec");
let isSecondTime = false;
console.log(hours, minutes, seconds);
console.log(span);
console.log(clock);
console.log(new Date());

function runClock() {
  let currentTime = new Date();
  console.log(currentTime);
  let hrs = currentTime.getHours();
  let mins = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  console.log(hrs, mins, sec);
  let txt = "AM";

  if (hrs > 12) {
    hrs -= 12;
    txt = "PM";
  } else if (hrs === 12 && !isSecondTime) {
    hrs = 12;
    txt = "AM";
    isSecondTime = true;
  } else if (hrs === 12 && isSecondTime) {
    hrs = 12;
    txt = "PM";
    isSecondTime = false;
  }

  span.innerText = ":";

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = sec;

  // clock.innerHTML = `${hrs}  ${mins}  ${sec} ${txt}`;
}

window.onload = setInterval(runClock, 1000);
