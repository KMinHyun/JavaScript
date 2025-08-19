// 산술 연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 빼기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 % num2); // 나머지

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';

console.log(lastName + firstName);
console.log(lastName.concat(firstName));
// concat은 문자열을 연결시켜주는 함수.

// 산술 대입 연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1; 
// ㄴnum3에 num1을 더해서 그 값을 num3에 다시 저장하겠다는 뜻. 즉 21라인과 똑같은 뜻.
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위|후위)증감 연산자 ++ , --
let num4 = 0;
num4++;
console.log(num4);
num4--;
console.log(num4);
// 전위 연산자로 console.log(++num4)를 하면 +1이 나오고
// 후위 연산자로 console.log(num4++)를 하면 0이 나온다.
// 전위 연산자는 현재 처리를 먼저 하고 결과를 출력.
// 후위 연산자는 결과를 출력하고 현재 처리를 함.

// 비교 연산자 : 결과가 참거짓으로 나타남.
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// 자바스크립트에서 같다란 연산자는 ==, ===로 씀. =는 대입연산자이기 때문.
// ==(불완전비교라고 함)는 데이터 타입을 체크하지 않음. ===(완전 비교라고 함)는 데이터 타입을 체크함.
//  ㄴconsole.log(1 == '1'); 하면 true로 나오고 console.log(1 === '1');로 해야 false로 나온다.
console.log(num5 != num6); // 불완전 비교
console.log(num5 !== num6); // 완전비교. '같지 않다'는 뜻.

//논리 연산자 : 
console.log((1 === 1) && (1 === 0)); // 수학에서처럼 먼저 계산하고 싶은 것을 소괄호로 묶어두면 보기 편하다.
// ㄴ&&(and) : 연결한 값들이 모두 true여야만 결과값이 true로 나오고 하나라도 false면 결과값이 false로 나온다.
console.log((1 === 1) || (1 === 0));
// ㄴ||(or) : 하나라도 true가 있으면 결과가 true고 모두 false여야 false로 나온다.
// not 연산자 : !를 쓰며 반전을 뜻함.
console.log(!(1 === 1));
// ㄴ(1 === 1)이 true일 때 !(1 === 1)는 false로 나온다.

// 삼항 연산자 : 조건식. if문으로 처리하기엔 간단한 처리를 하고 싶을 때 사용.
let rank = 2;
let result = rank >= 2 ? '통과' : '거부';
// ㄴ물음표 뒤엔 true일 때의 처리, 콜론 뒤엔 false일 때의 처리를 적어줌.
console.log(result);