// Math 객체

// ceil(arg), round(arg), floor(arg) = 올림, 반올림, 버림
let double = 0.9;
Math.ceil(double); // 1이 결과값으로 나옴.
Math.round(double); // 1.
Math.floor(double); // 0.

// random() : 0이상 1미만의 랜덤한 수를 반환함. 단, 0은 나올 가능성만 있다고 보면 됨.
let randomDouble = Math.random();
// 1~10 난수를 구하려면?
console.log(Math.ceil(randomDouble * 10));

// 검증 방법
// 0. 저장용 배열 만들기(length 11, 각 요소의 값은 0)
const arrSaveCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 1. 루프 100만번 돌리기
for(let i = 0; i < 1_000_000; i++) {
  //  1-1. 'Math.ceil(Math.random() * 10)' 이용해서 랜덤 수 획득.
  const randomNum = Math.ceil(Math.random() * 10);

  //  1-2. 저장용 배열에 나온 숫자를 인덱스를 이용해서 카운트해서 저장함.
  arrSaveCount[randomNum]++;
}
// 2. 저장용 배열 확인
console.log(arrSaveCount);

// abs(arg) : 절대값을 반환하는 메소드
Math.abs(1); // 절대값은 1
Math.abs(-1); // 절대값은 1