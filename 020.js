// 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력: 10 2
// 출력 5 0

const numbers = prompt("숫자와 그것을 나눌 숫자를 입력해주세요! 예: 100 4");
const numArr = numbers.split(" ");
const quotient = parseInt(numArr[0], 10) / parseInt(numArr[1], 10);
const remainder = parseInt(numArr[0], 10) % parseInt(numArr[(1, 10)]);
console.log(`몫은 ${quotient}이고 나머지는 ${remainder}입니다.`);

// parseInt(string, radix)
// radix :
// An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.
// Be careful—this does not default to 10!
// If the radix value is not of the Number type it will be coerced to a Number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
