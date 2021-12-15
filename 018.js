// 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보앴습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 괌목의 점수가 주어지면 전체 평균 점수르를 구하는 프로그램을 작성하세요.
// 단, 소수점 자리는 모두 버립니다.

// 입출력
// 입력: 20 30 40
// 출력: 30

// with array
// const scores = ["100", "83", "92"];
// let sum = 0;

// for (score of scores) {
//   sum += parseInt(score);
// }
// console.log(Math.floor(sum / scores.length));

// with string
const scores = prompt("세 가지 점수를 입력하세요!(예: 20 30 50)");
let scoresArr = scores.split(" ");
let sum = 0;
for (score of scoresArr) {
  sum += parseInt(score);
}
console.log(`평균 점수는 ${Math.floor(sum / scoresArr.length)} 입니다.`);
