const quotes = [
  {
    quote: "위대한 사람은 기회가 없다고 원망하지 않는다.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라, 시간이야말로 인생을 형성하는 재료이기 때문이다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "Carol Burnett",
  },
  {
    quote:
      "배움은 우연히 얻어지는 것이 아니라 열성을 다해 갈구하고 부지런히 집중해야 얻을 수 있는 것이다.",
    author: "Abigail Adams",
  },
  {
    quote: "자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
    author: "Rosalynn Carter",
  },
  {
    quote:
      "우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
    author: "Walter Pater",
  },
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "John Wayne",
  },
  {
    quote: "미래의 가장 좋은 점은 한 번에 하루씩 온다는 것이다.",
    author: "Abraham Lincoln",
  },
  {
    quote: "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
    author: "Julia Sorel",
  },
  {
    quote: "꿈꾸는 것이 가능하다면, 그 꿈을 실현하는 것 또한 가능하다.",
    author: "Walt Disney",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

// Math.random()을 사용해 무작위로 quote, author를 가져오고, quotes가 추가됐을 때도 문제없이 전체가 나올 수 있게 array.length를 사용해 Array를 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
