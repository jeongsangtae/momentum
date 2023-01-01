const clock = document.querySelector(".clock");

function getClock() {
  // Date object 생성, 호출하는 당시의 현재 날짜와 시간을 알려줌
  // 코드를 실행한 그 시점의 밀리초, 초, 시간 등 전부 가져옴
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock(); //이게 없으면 1초동안 00:00:00 표시하고 그 뒤에 시간갱신
setInterval(getClock, 1000); // 1초마다 시간을 갱신, 이게 실시간으로 보이게 하는 부분
// setTimeout(getClock, 1000); // 1초기다려서 한번 갱신하고 끝
