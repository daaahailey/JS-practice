// 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성,, 지구, 화성, 목성,, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter,, Saturn,, Uranus, Neptune 입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const planetName = prompt("행성 이름을 말해보세요");
console.log(planets[planetName]);

// planets.planetName will NOT work.
// because you CANNOT use variables in dot notation.
// after the .(dot), the original property name should go not the variable name.
// and you can't access property using dot notation
// unless you know the property's name. like planets.수성
// so you should use [] - bracket instead.
