// 별찍기
// 입력
// 5
// 출력
//     *
//    ***
//   *****
//  *******
// *********

// function drawTree(num) {
//   let star = num;

// }

let row = 5;
for (let i = 0; i < row; i++) {
  if (i === 0) {
    console.log("    *");
  } else if (i === 1) {
    console.log("   ***");
  } else if (i === 2) {
    console.log("  *****");
  } else if (i === 3) {
    console.log(" *******");
  } else console.log("*********");
}

// amount of stars (increase by 2)
// 1, 3, 5, 7, 9
// space (decrease by 1)
// 4 - 3 - 2 - 1 - 0

// 1
const row = 5;
for (let i = 1; i <= row; i++) {
  // 5 rows
  let star = "";
  let space = "";
  for (let j = row; j > i; j--) {
    // space before star 4(5-1) - 3(5-2) - 2(5-3) -1
    space += " ";
  }
  for (let k = 1; k < i * 2; k++) {
    // star 1 - 3 - 5 - 7 - 9
    star = star + "*";
  }
  console.log(space.concat(star));
}

// 2
const rows = 5;
let star = "";
for (let i = 1; i <= rows; i++) {
  for (let j = rows; j > i; j--) {
    star += " ";
  }
  for (let k = 1; k < i * 2; k++) {
    star += "*";
  }
  // console.log(star);
  star += "\n"; // it puts the stars on new line
}
console.log(star);

// \n
// let hello = "hi\nhello\nhey";
// console.log(hello);
// hi;
// hello;
// hey;
