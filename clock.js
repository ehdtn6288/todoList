const clockContain = document.querySelector(".clock"),
  clockTime = clockContain.querySelector("h1");

function setTime() {
  const date2 = new Date("March");
  const heur = date2.getHours();
  const minute = date2.getMinutes();
  const seconde = date2.getSeconds();
  const day = date2.getDay();

  clockTime.innerHTML = `${heur > 12 ? `오후 ${heur - 12}` : heur}:${
    minute < 10 ? `0${minute}` : minute
  }:${seconde < 10 ? `0${seconde}` : seconde}`;
  setInterval(setTime, 1000);
}

function init() {
  setTime();
}

init();
