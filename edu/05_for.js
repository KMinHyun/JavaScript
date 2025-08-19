// For문(loop)
// 첫번째 값은 초기값, 두번째 값은 조건식, 세번째 값은 한번 돌 때마다 어떻게 해줄지.
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