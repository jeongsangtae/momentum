const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이게 없으면 1초동안 00:00:00 표시하고 그 뒤에 시간갱신
setInterval(getClock, 1000); // 1초마다 시간을 갱신
// setTimeout(getClock, 1000); // 1초기다려서 한번 갱신하고 끝
