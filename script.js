// const title = document.getElementById("title");
// const title = document.getElementsByClassName("grab");
// const title = document.getElementsByTagName("h1");
const title = document.querySelector(".hello:first-child h1"); // css selector처럼 가져올 수 있음.
console.log(title);
console.dir(title);

function handleTitleClick() {
  console.log("title was clicked!");
  title.innerText = "Got you!";
}

function handelTitleMouseEnter(){
  console.log("mouse on the title!")
  title.innerText = "You are here!";
  title.style.color = "blue";
}

function handelTitleMouseLeave(){
  console.log("mouse leave the title!")
  title.innerText = "You are gone!";
  title.style.color = "black";
}


title.addEventListener("click", handleTitleClick);
// 사용가능한 event목록은 console.dir로 확인이 가능한데, 나오는것들 중 on이 붙은게 event다. 
// 사용할때 거기서 on을 땐 이름을 쓰면 된다. 
title.addEventListener("mouseenter", handelTitleMouseEnter);
title.addEventListener("mouseleave", handelTitleMouseLeave);


// console.log(title.id);
// console.log(title.className);
