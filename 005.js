// for문 계산
// 다음 코드 출력의 값으로 알맞은 것은?

let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  // i increase by 2
  a += i; // default a is 10 and add i(2 in default and it increase by 2 until i < 5)
}

// a = 12 (1st iteration)
// a = 14 (2nd iteration) and it gets out from if statement because i becomes 6

// so a = 14

console.log(a + b); // 16

// 1) 10
// 2) 12
// 3) 14
// 4) 16

// 답: 4
