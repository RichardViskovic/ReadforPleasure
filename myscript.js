window.addEventListener('load', (event) => {
  startDate();
});

function toggleHide(id) {
  el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function startDate() {
  let date = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
  document.getElementById('clock').innerHTML = date.toLocaleString('default', options)
}

function hideNav() {
  document.getElementById("nav").style.display = "none";
}

// For showing the time:
// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   // var s = today.getSeconds();
//   m = checkTime(m);
//   // s = checkTime(s);
//   document.getElementById('clock').innerHTML =
//     h + ":" + m // to include the seconds: + ":" + s;
//   var t = setTimeout(startTime, 500);
// }

// function checkTime(i) {
//   if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
//   return i;
// }