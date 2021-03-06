const clock = document.querySelector("#clock");
const today = document.querySelector("#date");

function getClock() {
  const date = new Date();
  // date.getHours()는 Number 타입을 받기 때문에 String()안에 넣어서 number -> string 으로 변환 후 padStart() 실행
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${ampm} ${hours}:${minutes}`;
}

function getDate() {
  const date = new Date();
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  today.innerText = new Intl.DateTimeFormat("en-US", options).format(date);
}

// getClock을 이미 호출했기 때문에 새로고침 해도 00:00:00으로 1초 동안 갱신하지 않고 화면에 바로 호출 및 실행
getClock();
getDate();
setInterval(getClock, 1000);

//// setInterval & setTimeout ////
// function sayHello() {
//   console.log("hello");
// }

// setInterval: 일정 시간 간격마다 function을 실행
// setInterval(실행하고자 하는 function, 호출되는 function 간격을 몇 ms로 할 지)
// setInterval(sayHello, 5000);

// setTimeout: 일정 시간이 흐른 뒤에 function을 한 번만 호출
// setTimeout(실행하고자 하는 function, 호출되는 function 간격을 몇 ms로 할 지)
// setTimeout(sayHello, 5000);

//// Date Object ////
// new Date(): 오늘 날짜를 호출
// const date = new Date();
// date.getDate()
// date.getDay()
// date.getFullYear()
// date.getHours()
// date.getMinutes()
// date.getSeconds()

//// padStart ////
// padStart: string의 앞에 원하는 string을 채워줌
// padEnd: string의 끝에 원하는 string을 채워줌
// padStart(조건 자릿 수, "조건 자릿 수에 미치지 못할 때 채워질 string")
