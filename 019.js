// 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const numbers = prompt("두개의 번호를 말해주세요! 예: 2 3");
const numArr = numbers.split(" ");
let result = 0;
// result = parseInt(numArr[0]) ** parseInt(numArr[1]);
result = Math.pow(parseInt(numArr[0]), parseInt(numArr[1]));
console.log(
  `${parseInt(numArr[0])}의 ${parseInt(numArr[0])}승은 ${result}입니다.`
);
