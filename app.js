const grab = document.querySelector(".hello:first-child h1"); // css selector처럼 가져올 수 있음.
console.dir(grab);

function handleGrabClick() {
  console.log("grab was clicked!");
  grab.className = "active";
}

grab.addEventListener("click", handleGrabClick);
