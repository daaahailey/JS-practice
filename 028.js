// 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 "JavaScript"를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// JavaScript
// 출력
// J a
// a V
// V a
// a S
// S c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

function twoGram(text) {
  let arr = text.split("");
  let word = "";

  for (let i = 0; i < arr.length - 1; i++) {
    word += `${arr[i]} ${arr[i + 1]}\n`;
  }
  console.log(word);
}
twoGram("hello");

// eg)
// hello
// h e - index 0
// e l - index 1
// l l - index 2
// l o - index 3
// o undefined -index 4 (0,1,2,3,4 => length 5)
// last word always doesn't have the pair no matter what
// So, to remove undefined on the right side, used length - 1;

// h e - index 0
// e l - index 1
// l l - index 2
// l o - index 3 (0,1,2,3 = length 4, which is arr.length - 1);
