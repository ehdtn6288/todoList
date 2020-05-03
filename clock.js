const clockContainer = document.querySelector(".clock"),
  clockTimer = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // if (seconds < 10){
  //     clockTimer.innerHTML = `${hour}:${minutes}:0${seconds}`;
  // }else{
  //     clockTimer.innerHTML = `${hour}:${minutes}:${seconds}`;
  // } 이렇게 할수도 있지만, 미니 if문을 이용하여 코드를 짜면 훨씬 더 간결하게 할 수 있다.
  clockTimer.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
