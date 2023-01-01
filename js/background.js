const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// image 파일을 quotes 처럼 Math.random()을 사용해 무작위로 가져오기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML에 img element 생성 (아직까지는 어디에도 존재 하지 않음)
const bgImage = document.createElement("img");

// JS에서 HTML에 img element 생성 (bgImage에 src 설정)
// <img src="img/0.jpg" /> 이거랑 같은 의미 , 단지 HTML에서 하는게 아닌 JS에서 이걸 해주는 것뿐
bgImage.src = `img/${chosenImage}`;

// 아직 document에 존재하지 않는(JS에만 존재) 이미지를 html body에 추가
document.body.appendChild(bgImage);
