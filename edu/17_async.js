function pro1(str, ms) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(str === 'A' || str === 'B' || str === 'C') {
      console.log(str);
      resolve(); 
    } else {
      reject();
    }
  }, ms);
});
}

// async <= 함수를 정의하는 키워드/await 문법
// ㄴpromise 문법(딥스가 깊어지면 난잡해지는)을 개선하기 위해 나옴.
// 내부적으로 promise 객체를 사용하여 비동기 처리를 실행함.
// async가 붙어있는 함수 안에서만 await를 쓸 수 있다.
async function test() {
  await pro1('A', 1500);
  await pro1('B', 1000);
  await pro1('C', 500);
  // try {
  //   await pro1('A', 1500);
  //   await pro1('B', 1000);
  //   await pro1('C', 500);
  // } catch (error) {
  //   console.log(error);
  // } <= 예외처리를 하는 법.
}

test();