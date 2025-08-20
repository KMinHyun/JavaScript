for(let i = 1; i < 6; i++) {
  console.log('*****');
}


// let star ='*';
// let makedStar = ''; // <= 루프를 돌리기 위한 변수가 아니라 별을 저장하기 위한 변수
// for(let i = 0; i < 5; i++) {
//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
//   makedStar = '';
// }

// for(let i = 0; i < 5; i++) {
//   let makedStar = ''; <= 선언과 초기화를 동시에.
//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

let star ='*';
let makedStar = '';
for(let i = 0; i < 5; i++) {
  for(let z = 0; z < 1; z++) {
    makedStar += star;
  }
  console.log(`${makedStar}`);
}

// for문 하나만으로 별 하나씩 늘리기
// makedStar = '';
// for(let lineCount = 0; lineCount < 5; lineCount++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// for문 2개로 별 하나씩 늘리기
for(let lineCount = 0; lineCount < 5; lineCount++) {
  let makedStar = '';
  for(let starCount = 0; starCount <= lineCount; starCount++) {
    makedStar += '*';
  }
  console.log(makedStar);
}


for(let lineCount = 5; lineCount > 0; lineCount--) {
  makedStar += '*'
  let makedSpace = '';
  
  for(let spaceCount = 1; spaceCount < lineCount; spaceCount++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}

// 문자열을 하나씩 줄이는 방법
// for(let lineCount = 5; lineCount > 0; lineCount--) {
//   let makedStar = '';
//   for(let starCount = 1; starCount < lineCount; starCount++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }