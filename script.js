var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");

var startBtn = document.getElementById("strbtn");
var stopBtn = document.getElementById("stpbtn");
var resetBtn = document.getElementById("resbtn");

function shomaresh() {
  sec.innerHTML++;

  if (sec.innerHTML >= 60) {
    sec.innerHTML = 0;
    min.innerHTML++;
    if (min.innerHTML >= 60) {
      min.innerHTML = 0;
      hour.innerHTML++;
    }
  }
}
var timer;

function startbtn() {
  timer = setInterval(shomaresh, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopbtn() {
  clearInterval(timer);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}


function resetbtn() {
    window.location.reload();

}