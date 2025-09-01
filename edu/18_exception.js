// Exception 핸들링 = 예외 처리
try {
  // 내가 처리하고 싶은 로직을 작성하는 영역.
  console.log('트라이 시작');
  const t = 1;
  t = 2;
  console.log('트라이 끝');
} catch(error) { // catch 파라미터는 에러 객체를 받음.
  // try문에서 에러가 발생했을 때, 처리할 로직을 작성하는 영역.
  console.log('예외 발생', error.message);
  if(error instanceof TypeError) {
    console.log('타입 에러 발생');
  } else if(error instanceof ReferenceError) {
    console.log('참조 에러 발생');
  } // <= 에러 판별하는 방법. 에러를 좀 더 상세하게 다룰 수 있다.

} finally {
  // 정상이든 에러든 상관없이 무조건 실행되는 로직을 작성하는 영역.
  // 필수가 아님.
  console.log('파이널리 실행');
}

let divVal = 0;
try {
  console.log('트라이 시작');
  if(divVal < 1) {
    // 강제 예외 발생
    throw new Error('유저 입력값이 0임');
  } 
  10 / divVal; // <= 자바스크립트에선 10 / 0이 에러로 안 넘어감.
  console.log('트라이 끝');
} catch(error) {
  console.log('예외 발생', error.message);
  if(error instanceof TypeError) {
    console.log('타입 에러 발생');
  } else if(error instanceof ReferenceError) {
    console.log('참조 에러 발생');
  }
}