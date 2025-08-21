// 오브젝트란? 여러 개의 키와 값이 쌍으로 이루어진 복합 데이터 타입(=객체)
const obj1 = {
  id: 1,
  name: '홍길동',
  gender: '남자',
  age: 20,
  fnc1: (a, b) => {
    return a + b
  }
}; // 중괄호를 하고 키와 값을 쌍으로 선언해줌.
    // 데이터끼리는 콤마로 구분을 하며 마지막 데이터는 콤마를 안 넣는 게 일반적이지만-
    // -자바스크립트는 넣어도 에러가 안 난다.
    // 콤마는 앞에 넣어도 문제 없다. 앞에 뒀을 때 추후 수정시 한 줄만 수정하면 된다는 이점이 있음.
    // 키들(위의 id, name, gender, age)의 집합을 프로퍼티(property),
    // 오브젝트 안의 함수(위의 fnc1)는 메소드라고 함.

obj1.id; // <= 오브젝트 접근 방법.
console.log(obj1.id);
console.log(obj1.fnc1(1, 2)); // <= 함수는 파라미터를 적어줘야 됨.

const obj2 = {
  title: '홍길동이 쓴 글',
  userInfo: obj1 // 객체 안에 객체도 가능. 어떤 데이터 타입을 넣어도 가능함.
}

console.log(obj2.userInfo.name); // 온점(.)을 이용해서 타고 들어감.
obj2.userInfo.name = '깁슨';

// Optional Chaining : '?.'을 기준으로 앞의 평가대상이 undefined거나 null이-
  // -아니면 처리를 계속 이어가고 undefined나 null이면 false를 반환하고 멈춘다.
  if(obj2.userInfo.rank) {
    obj2.userInfo.rank.test;
  } // <= optional chaining이 없을 때 기존의 방식.

  obj2.userInfo?.rank?.test; // <= userInfo가 있으면 rank로 넘어가고 rank가 없는 값이면 멈춤.

// --------------------------------------------- //
// Array 객체 : 데이터를 저장하는 방식 중 하나.
  // 하나의 변수에 여러 개의 값을 순차적으로 저장할 수 있는 데이터 구조.
  // 여러 종류의 데이터 타입을 저장 가능.
  // 배열의 길이(크기)를 자유롭게 조절 가능함.
  // 각 요소(방 하나)는 0부터 시작하는 인덱스를 가진다.
  //  ㄴ특정 요소에 접근할 땐 방 번호로 접근함.
const arr1 = [1, 2, '홍길동', obj1, 5]; // <= 선언 방법. 이렇게 여러 데이터 타입을 넣어도 되지만-
  // -한 종류의 데이터 타입만 쓰는 게 관리하기 훨씬 수월하다.

console.log(arr1[0]); // <= 대괄호 안에 인덱스(방번호)로 접근해서 호출할 수 있다.

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr2[1][1]);

// 배열 복사
// const arr3 = arr2;
// arr3[0] = [10, 20, 30]; // 이렇게 했을 때 기대하는 바는 arr3만 바뀌길 원하지만 arr2도 바뀐다.

// spread Operator 문법
const arr3 = [...arr2];  // <= 배열 딥카피 방법.
arr3[0] = [10, 20, 30];
const obj3 = {...obj1};  // <= 오브젝트 딥카피 방법.
console.log(arr2);

// length : 배열의 길이를 반환하는 프로퍼티
console.log(arr1.length);

// isArray(arg) : 배열인지 아닌지를 체크하는 함수.
Array.isArray(arr1);
console.log(Array.isArray(1));

// indexOf(searchElement) : 배열에서 특정 요소를 검색해서 인덱스를 반환.
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.indexOf(4)); // <= 해당 요소의 인덱스를 반환.
console.log(arr4.indexOf('갑순이')); // <= 없는 값은 -1로 반환.

// includes(searchElement) : 특정 요소의 존재 여부를 확인해서 boolean으로 반환함.
console.log(arr4.includes(4)); // ture
console.log(arr4.includes('갑순이')); // false

// push(...args) <=...의 의미는 몇개의 arg가 와도 상관없다는 뜻.
  // ㄴ 원본 배열의 마지막 요소를 추가하고, 바뀐 length를 반환함.
const resultLength = arr4.push(100);
console.log(resultLength, arr4);

// concat(...args) : 배열의 마지막 요소를 추가한 새로운 배열을 반환. 원본은 안 바뀜.
const arr5 = [1, 2, 3];
const resultConcat = arr5.concat(4);
console.log(arr5, resultConcat);

// pop() : 원본 배열의 마지막 요소를 제거하고, 제거한 요소를 반환함.
const arr6 = [1, 2, 3];
const resultPop = arr6.pop(); // <= 제거하고 난 배열을 쓰고 싶으면 변수에 담아야 함.
  // 딱히 사용하지 않고 제거만 할거면 const resultPop을 빼면 됨.
console.log(arr6, resultPop);
arr6.pop();
console.log(arr6, resultPop);

// unshift(...arg) : 원본 배열의 첫번째 요소를 추가, 변경된 length를 반환.
const arr7 = [1, 2];
const resultUnshift = arr7.unshift(2, 3, 4);
console.log(arr7, resultUnshift);

// shift() : 원본 배열의 첫번째 요소를 제거하고, 제거된 요소를 반환함.
const resultShift = arr7.shift();
console.log(arr7, resultShift);
arr7.shift();
console.log(arr7, resultShift);

// splice(start, count, ...args) : count와 가변 파라미터(...args)는 생략 가능.
  // ㄴ 원본에서 특정 요소를 잘라내는 메소드.
const arr8 = [1, 2, 3, 4, 5, 6];
// start만 지정했을 때
  //ㄴstart가 양수일 경우, 인덱스가 start인 요소부터 모두 제거하고 잘린 배열을 반환.
  const resultSpliceStartPositive = arr8.splice(3);
  console.log(arr8, resultSpliceStartPositive);
  //ㄴstart가 음수일 경우, 배열의 끝 요소부터 start만큼의 요소를 제거하고 잘린 요소를 배열로 반환.
  const arr9 = [1, 2, 3, 4, 5];
  const resultSpliceStartNegative = arr9.splice(-3);
  console.log(arr9, resultSpliceStartNegative);
// start와 count만 전달할 경우
const arr10 = [1, 2, 3, 4, 5];
const resultSpliceCount = arr10.splice(2, 1); // <= 콤마 뒤의 카운트는ㅡ
  // ㅡ지정한 인덱스에서부터 몇 개를 삭제할지.
console.log(arr10, resultSpliceCount);
// start, count, ...args 모두 전달할 경우
const arr11 = [1, 2, 3, 4, 5];
const resultSpliceArgs = arr11.splice(1, 2, 100); // <= 제거한 위치에 적은 arg를 넣음.
console.log(arr11, resultSpliceArgs);

// join(separator) : 배열의 요소를 구분자(separator)로 연결한 문자열을 만들어서 반환함. 
const arr12 = [1, 2, 3, 4, 5];
const resultJoin = arr12.join(':');
console.log(resultJoin, arr12); // <= 원본은 안 건드림.

// sort() : 원본 배열의 요소를 문자열로 변환 후 오름차순 정렬을 해서 만든 배열을 반환.
  //ㄴcallback 함수를 받을 수 있음. callback 함수를 받으면 그걸 기준으로 정렬함.
    //ㄴ(a - b)가 양수일 경우, a가 큰 수, b가 작은 수로 인식하여 정렬.
    //ㄴ(a - b)가 음수일 경우, a가 작은 수, b가 큰 수로 인식하여 정렬.
    //ㄴ(a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음.
  //ㄴ원본이 바뀌고 정렬한 배열을 반환함.
const arr13 = [3, 5, 23, 25, 34, 42];
const resultSort = arr13.sort((a, b) => a - b);
console.log(resultSort, arr13);

// map(callback) : 배열의 모든 요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환.
  //ㄴ항상 callback함수를 줘야 함.
const arr14 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr14.length; i++) {
  arr14[i] *= 2;
}
console.log(arr14);

// const resultMap = arr14.map(val => val *= 2);
// console.log(arr14, resultMap);
const resultMap = arr14.map(val => {
  if(val % 3 === 0) {
    return '짝'
  } else {
    return val;
  }
});

// 2의 배수만 '이'라고 출력하기.
const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultMapOdd = arr15.map(val => {
  if(val % 2 === 0) {
    return '이'
  } else {
    return val
  }
});
console.log(resultMapOdd);

// some(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복한 후,
  // 조건에 만족하는 결과가 하나라도 있으면 true, 없으면 false.
const arr16 = [1, 2, 3, 4, 5];
const resultSome = arr16. some(val => val === 10);
// const resultSome = arr16. some(val => {
//   if(val === 10) {
//     return true;
//   } else {
//     return false;
//   }
// });

// every(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
  // 모든 요소가 조건에 만족하면 true, 아니면 false.
const arr17 = [1, 2, 3, 4, 5];
const resultEvery = arr17.every(val => val % 1 === 0);
console.log(resultEvery);

// filter(callback) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
  // 조건에 맞는 요소만 모아서 새로운 배열로 반환함.
const arr18 = [1, 2, 3, 4, 5];
const resultFilter = arr18.filter(val => val % 2 === 0);
console.log(resultFilter);
// const resultFilter = arr18.filter(val => val % 2 !== 0); <= 홀수로 할 때.

// forEach(callback) : 배열의 모든 요소에 대해 콜백함수를 반복 실행.
  // ㄴ반환값이 없으므로, map을 써서 리소스를 굳이 소모할 필요가 없는 경우에 사용함.
const arr19 = [1, 2, 3, 4, 5];
arr19.forEach((val, key) => console.log(`${key} : ${val}`));

// Destructuring 문법
const arr20 = [1, 2];
const num1 = arr20[0];
const num2 = arr20[1];
// ㄴ D문법을 사용하기 전의 방식.
const [num3, num4] = arr20; // <= num3에 첫번째 방의 값이, num4에 두번째 방의 값이 들어가게 됨.
console.log(num3, num4);