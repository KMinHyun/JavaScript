let count = 0;

while(count < 3) {
  console.log(count);
  count++;
  // consolong.log('while문 시작');

  // if() {
    
  //   break;
  // }
  // console.log('while문 끝');
}
// () 안에 true나 false만 나오는 조건식만 들어감.
// false조건식을 쓰거나 break를 써서 종료시켜야 하기 때문에 무한루프에 빠지기 쉽다.
// 특정 조건을 넣고 break를 쓸 경우는 if문을 집어 넣음.

while(true) {
  console.log(count);
  count++; // <--초기값을 증가하거나 감소하는 처리가 필요.

  if(count >= 3) {
    break;
  }
}

let dan = 1;
while(dan < 10) {
  console.log(`2 X ${dan} = ${2 * dan}`);
  dan++; // <-- 사이에 들어갈 로직이 길기 때문에 조건을 미리 만들어두면 나중에 안 빼먹음.
}

// do-while문 : 처음 한번은 무조건 실행하고 그 다음 반복문 처리함. 조건을 뒤에 처리.
do {
  console.log(`2 X ${dan} = ${2 * dan}`);

  dan++;
} while(dan < 1);