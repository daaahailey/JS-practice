// 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력
// 입력: 거꾸로
// 출력: 로꾸거

const text = prompt("문장을 입력해보세요.");

// if (text) {
//   let splitText = text.split("");
//   let newText = [];
//   for (i = splitText.length - 1; i >= 0; i--) {
//     newText.push(splitText[i]);
//   }
//   const newStr = newText.join("");
//   console.log(newStr);
// } else {
//   console.log("문장을 입력하지 않았습니다.");
// }

if (text) {
  let newText = text.split("").reverse().join("");
  console.log(newText);
} else {
  console.log("문장을 입력하지 않았습니다.");
}
