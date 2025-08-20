// For문(loop)
// 첫번째 값은 초기값, 두번째 값은 조건식, 세번째 값은 한번 돌 때마다 어떻게 해줄지.
// 첫번째 값(초기값)은 루프를 몇 번 돌릴지를 정하기 위해 값을 지정하는 것.
for(let i = 0; i < 5; i++) {
  console.log(i);
  if(i >= 3) {
    break;
  } // = 3보다 커질 때 종료하고 싶다는 뜻.
  
  // if(i >= 3) {
  //   break;
  // } 
  // console.log(i);
  // = 2까지만 찍히고 종료됨. break를 만나면 루프를 종료시켜버리기 때문.
}
for(let i = 0; i < 5; i++) {
  console.log(i + 1);
}
// 주의할 점: 무한루프가 되지 않도록 하기.

for(let i = 0; i < 5; i++) {
  if(i === 3) {
    continue;
  }
  console.log(i);
} // continue를 만나면 현재 루프를 건너뛰고 다음 루프로 감.

// 다중 루프
// for(let i = 0; i < 3; i++) {
//   console.log(`바깥쪽 루프 : ${i}번째`);
//   for(let z = 0; z < 3; z++) {
//     console.log(`안쪽 루프 : ${z}번째`);
//   }
// }
// for문의 변수명은 안 겹치게 하는 게 좋음.

let z= 0;
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`);
  for(let z = 0; z < 3; z++) {
    console.log(`안쪽 루프 : ${z}번째`);
  }
}
// z변수를 바깥에 선언하면 z값이 저장되면서 자식 루프가 두번째부터 반복되지 않음. 

// 실습: 구구단 2단 찍기
for(let i = 1; i < 10; i++) {
  console.log(`2 X ${i} = ${2 * i}`);
}

let dan = 3;
for(let i = 1; i < 10; i++) {
  console.log(`${dan} X ${i} = ${dan * i}`);
}
// 변수를 바깥으로 빼줌으로 수정의 용이성이 좋아짐.

// 실습: 구구단 찍기
for(let dan =2; dan <= 9; dan++) {
  console.log(`** ${dan}단 **`);
  for(let multiplier = 1; multiplier <= 9; multiplier++) {
    console.log(`${dan} X ${multiplier} = ${dan * multiplier}`);
  }
}

// 구구단에서 19단으로 수정하고 싶을 때
let startDan = 2;
let startMultiplier = 1;
let maxDan = 15;
for(let dan = startDan; dan <= maxDan; dan++) {
  console.log(`** ${dan}단 **`);
  for(let multiplier = startMultiplier; startMultiplier <= maxDan; multiplier++) {
    console.log(`${dan} X ${multiplier} = ${dan * multiplier}`);
  }
}