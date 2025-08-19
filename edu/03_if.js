// if문(법)
//  ㄴ조건에 따라서 서로 다른 처리를 하는 문법. 즉, 분기문이라고 함.
//  ㄴ조건이 참이면 해당 처리를 진행하고, 거짓이면 건너 뛰고 다음 처리를 이어 감.
let rank = 1;

if(rank === 1) {
  console.log('1등 입니다.');
} else if(rank === 2) {
  console.log('2등 입니다.');
} else if(rank === 3) {
  console.log('3등입니다.');
} else {
  if(rank === 5 || rank === 7) {
    console.log('특별상입니다.');
  } else {
    console.log('등수 외입니다.');
  }
}
//  ㄴelse if로 이으면 하나의 if문으로 처리함.
//  ㄴelse만 적으면 그 위에 적은 else if 조건식 외 나머지를 포함함.
//  ㄴelse는 사용하려면 무조건 마지막에 위치해야 함.

if(rank === 1) {
  console.log('챔피언');
}
// 조건식은 일회성이지만 계속해서 사용한다면 따로 변수로 저장해서 사용하면 편하다.

let answer1 = 1;
let answer2 = 3;
if(answer1 === 2 && answer2 === 5) {
  console.log('100점');
} else if(answer1 === 2 || answer2 === 5) {
  console.log('50점');
} else {
  console.log('0점');
}

// let answer1 = 1;
// let answer2 = 3;
// let score = 0;

// if(answer1 === 2 && answer2 === 5) {
//   score = 100;
// } else if(answer1 === 2 || answer2 === 5) {
//   score = 50;
// }
// console.log(score + '점')

// if(answer1 === 2) {
//   score += 50;
// }
// if(answer2 === 5) {
//   score += 50;
// }
// console.log(score + '점')