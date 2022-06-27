const quotes = [
  {
    quote: "If I have ever made any valuable discoveries, it has been owing more to patient attention, than to any other talent.",
    author: "Isaac Newton",
  },
  {
    quote: "The hidden harmony is better than the obvious",
    author: "Heraclitus",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
  {
    quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다",
    author: "맹자",
  },
  {
    quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다. ",
    author: "아인슈타인",
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;