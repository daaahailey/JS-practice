// set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
// 1) var x = {1, 2, 3, 4, 6, 7};
// 2) var x = {}; // this is to create object 객체를 생성하는 리터럴 방식
// 3) var x = new Set('javascript');
// 4) var x - new Set(range(5));  // range(5) =>  this isn't javascript method.. 이건 파이썬에서 본듯.. 자바스크립트에는 없음
// 5) var x = new Set();

// 답: 3, 5

// Set : 중복되지 않는 데이터를 저장하는 데이터 구조

const list = [1, 2, 3, 10, 20, 30];

let makeSet = new Set();
console.log(makeSet);
// Set(0) {size: 0}

let makeSet2 = new Set("hello");
console.log(makeSet2);
// Set(4) {'h', 'e', 'l', 'o'}

let makeSet3 = new Set(list);
console.log(makeSet3);
// Set(6) {1, 2, 3, 10, 20, 30}

makeSet3.add(100);
console.log(makeSet3);
// Set(7) {1, 2, 3, 10, 20, 30, 100}

makeSet3.delete(10);
console.log(makeSet3);
// Set(7) {1, 2, 3, 20, 30, 100}

console.log(makeSet3.has(30));
// true
console.log(makeSet3.has(7));
// false
