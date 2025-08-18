// : js에서의 주석
/** 주석 여러 줄 쓸 때 */

// 변수 : 변하는 데이터를 저장하기 위한 공간.
var var1 = '제육';
let let1 = '햄버거';
/** var, let : 변수를 불러오는 방법. var는 어디서든 불러올 수 있어서 변수명이 겹치면 큰일남.
현재는 var는 지양하고 let으로 개발하는 게 일반적이다. */
var var2;
var2 = 0;

// 상수 : 최초에 대입한 값이 절대 변하지 않는 공간.
const const1 = '뚝불';
// 보통 상수로 넣는 경우는 설정값들.

// var를 지양해야하는 이유 : 1. var는 중복선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';

console.log(age);
var age = 20;
// 2. 작성한 코드 상 선언보다 먼저 사용할 경우, 오류가 발생하지 않고 접근 가능한 현상.
// 3. var는 기본적으로 함수레벨 스코프(=지역 스코프).
// 스코프의 종류 : 전역 스코프, 지역 스코프, 블록 레벨 스코프
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst = 'globalConst';

// function test() {
//   var localVar = 'localVar';
//   let localLet = 'localLet';
//   const localConst = 'localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);
//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);

if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);