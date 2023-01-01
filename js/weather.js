const API_KEY = "b0369d253624b5637f69129bd007c070";

// API를 통해 위치를 얻는데 성공 했을 때 그 위치를 보여주고, 추가로 날씨, 온도까지 보여줌
function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //메서드를 호출하면, 응답(response) 객체로부터 JSON 포멧의 응답 전문을 JS 객체로 변환하여 얻음
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = `${data.main.temp} @ ${data.name}`;
      weather.innerText = `${data.weather[0].main} `;
    });
}

// 위치를 얻는데 실패 했을 때 경고문이 뜨도록 해줌
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// navigator.geolocation.getCurrentPosition()를 사용해 사용자 현재 위치를 요청한다.
// getCurrentPosition 여기에는 2개의 인자가 들어감 하나는 성공했을 때 다른 하나는 실패 했을 때
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
