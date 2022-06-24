// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// console.log(loginInput);
// console.log(loginButton);

// function onLoginBtnClick() {
//   // console.log("login btn clicked");
//   // console.dir(loginInput);
//   // console.log(loginInput.value);

//   const username = loginInput.value;
//   // if (username === "") {
//   //   alert("input your name");
//   // } else if(username.length > 15){
//   //   alert("your username is too long");
//   // } else {
//   //   console.log(username);
//   // }
//   // 위의 입력 유효성 검사들은 html form으로 해결 가능.
//   console.log(username);
// }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) { // 모든 EventListener의 첫번째 arg는 항상 event에 대한 infomation들이다.
  event.preventDefault(); // 브라우저의 기본 행동이 발생되지 않도록 막음. 원래 form은 자동으로 submit하는데 그걸 막는다던지.
  console.log(event);
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(event){
  console.log(event);
  alert("clicked!");
}
// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);