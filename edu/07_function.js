// function(함수) : 입력을 받아 출력을 하는 일련의 과정을 뜻함.
// 함수로 묶으면 중복되는 코드를 줄일 수 있음. -> 테스트 갯수도 줄어듦.

// 함수 선언식 : default
function fnc1(a, b) {
  return a + b; // return 키워드를 만나면 그 옆의 값을 출력하고 종료함.
}
// 외부로부터 입력받는 값을 ( ) 안에, 처리할 로직을 중괄호 안에.
// 소괄호 안의 변수를 파라미터(Parameter)라고 함.
// ㄴ외부에서부터 전달받은 값을 함수로 사용하기 위해 저장하는 공간(변수)을 뜻함.
// ㄴ파라미터는 선언 키워드 안 씀.

// fnc1(1, 2); // <--파라미터에 대입할 값을 인수(Argument)라고 함. 함수를 호출할 때 전달해주는 값을 뜻함.
let resultFnc1 = fnc1(1, 2);
console.log(resultFnc1);

console.log(fnc1(2, 3));

// 함수 선언식 주의할 점 : 호이스팅에 영향을 받음.
//  ㄴ재할당이 가능하기 때문에 함수명이 중복되지 않도록 조심해야 함.
function fnc3() {
  return a + b;
}
function fnc3() {
  return a + b - 9999;
} // 이렇게 해도 오류가 안 나고 출력이 됨.

// 함수 표현식 : 호이스팅의 영향을 받지 않음 => 함수를 미리 선언해둬야 함.
//  ㄴ재할당이 불가능.
const fnc4 = function(a, b) {
  return a + b;
}

// 화살표 함수 : 함수 표현식과 특징은 같음. 화살표(=>)를 넣어 축약한 방식.
const fnc5 = (a, b) => a + b;

const fnc6 = function(a) {
  let test = a / 2;
  return test;
}
const fnc7 = a => {
  let test = a / 2;
  return test;
}
// 37줄과 41줄은 같은 처리. 파라미터가 1개면 소괄호도 생략 가능하지만 아예 없거나 두 개 이상이면 소괄호 필수.
// 중괄호는 한 줄이면 생략할 수 있음. 중괄호 치고 싶으면 return을 써줘야 함.

// 콜백 함수 : 다른 함수의 파라미터로 전달되어서 특정 조건에 따라 호출되는 함수.
function myCheck(callback) {
  callback();
}

myCheck(() => console.log('콜백 함수')); // <= 익명 함수라고 함. 단발성으로 사용(재호출이 안 되기 때문).