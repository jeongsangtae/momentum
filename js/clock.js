const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //이게 없으면 1초동안 00:00:00 표시하고 그 뒤에 시간갱신
setInterval(getClock, 1000); // 1초마다 시간을 갱신
