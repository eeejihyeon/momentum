
//// Conditionals ////
// prompt: 답하기 전까지 실행을 멈춤, CSS 적용할 수 없음
// parseInt: string을 number로 변환
const age = parseInt(prompt("How old are you?"));

// console.log(age, parseInt(age));
// console.log(isNaN(age));

// if (condition) {
//   /// condition === true
// } else {
//   /// condition === false
// }

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 18){
  console.log("You are too young.");
} else if(age >= 18 && age <= 50){
  console.log("You can drink.")
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.")
} else if (age === 100) {
  console.log("wow you are wise.")
} else if (age > 80) {
  console.log("You can do whatever you want.")
} 


