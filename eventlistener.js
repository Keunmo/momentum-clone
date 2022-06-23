// const grab = document.getElementById("grab");
// const grab = document.getElementsByClassName("grab");
// const grab = document.getElementsByTagName("h1");
const grab = document.querySelector(".hello:first-child h1"); // css selector처럼 가져올 수 있음.
console.dir(grab);

function handlegrabClick() {
  console.log("grab was clicked!");
  const currentColor = grab.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  grab.style.color = newColor;
}

function handelgrabMouseEnter() {
  console.log("mouse on the grab!");
  grab.innerText = "You are here!";
  grab.style.color = "blue";
}

function handelgrabMouseLeave() {
  console.log("mouse leave the grab!");
  grab.innerText = "You are gone!";
  grab.style.color = "black";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline(){
  alert("SOS NO Connection");
}

function handleWindowOnline(){
  alert("All GOOD");
}

// 방법1. 사용가능한 event목록은 console.dir로 확인이 가능한데, 나오는것들 중 on이 붙은게 event다.
// 사용할때 거기서 on을 땐 이름을 쓰면 된다.
grab.addEventListener("click", handlegrabClick);
// grab.onclick = handlegrabClick; 방법2.
grab.addEventListener("mouseenter", handelgrabMouseEnter);
grab.addEventListener("mouseleave", handelgrabMouseLeave);

// addEventLister를 쓰면 나중에 이를 제거할 수 있다.
// .removeEventListener

// console.log(grab.id);
// console.log(grab.className);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
