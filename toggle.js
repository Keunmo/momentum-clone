const grab = document.querySelector(".hello:first-child h1"); // css selector처럼 가져올 수 있음.
console.dir(grab);

// function handleGrabClick() { // way1
//   console.log("grab was clicked!");
//   console.log(grab.className);
//   const clickedClass = "active";
//   if (grab.className === clickedClass) {
//     grab.className = "";
//   } else {
//     grab.className = clickedClass;
//   }
// }

// better way, because if there already exist another class,
// we can safely add or remove class from classList
// function handleGrabClick() {
//   console.log("grab was clicked!");
//   console.log(grab.className);
//   const clickedClass = "active";
//   if (grab.classList.contains(clickedClass)) {
//     grab.classList.remove(clickedClass);
//   } else {
//     grab.classList.add(clickedClass);
//   }
// }
function handleGrabClick() {
  console.log("grab was clicked");
  console.log(grab.classList);
  grab.classList.toggle("active");
}

// more better way, using toggle.
// it removes from list if exist, or add it if doesn't

grab.addEventListener("click", handleGrabClick);
