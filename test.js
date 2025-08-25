// **8.** 루프를 사용하여 1부터 10개까지의 합을 구하세요.
let total = 0;
for(let i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < 10; i++) {
  total += arr[i];
}

const result = arr.reduce((acc, currentVal) => acc + currentVal); // acc = accumulator

// 10. 학생 객체 student를 만들고, 이름(name)과 나이(age) 속성을 추가한 뒤 출력하세요.
const student = {}
student.name = 'sss';
student.age = 20;
// 자바스크립트에서만 먹힘. 
// 기존에 없던 메소드나 프로퍼티를 추가할 수 있음.
  // ㄴ다이나믹 프로퍼티라고 함.
  // 11. 아래 코드 실행 결과는 무엇인가요?\
let person = {
  name: "Alice",
  age: 20
};

console.log(person["name"]);
// ㄴ자바스크립트에선 지원하는 문법이다. 대괄호를 쓰고 안에 문자열을 넣어줘야 함.
console.log(person.age);

// 15. Date 객체를 사용하여 현재 날짜와 시간을 구하는 코드를 작성하세요.
// (포맷형식 ’YYYY-MM-DD hh:mi:ss’)
  // ㄴ두 글자로 된 형식들은 0도 들어가게 만들라는 뜻.

// 18. 다음 코드 실행 결과를 예측하고, 그 이유를 설명하세요.
sayHi();
let sayHi = function() {
  console.log("Hi!");
};
// ㄴ함수 표현식으로 정의한 함수기 때문에 호이스팅의 영향을 받지 않아 에러가 난다.
// ㄴ결과적으로 let이 호이스팅의 영향을 안 받아서 그렇게 되는 거긴 하지만 표현을 좀 더 자세하게 하는 게 좋다.