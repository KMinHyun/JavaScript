// 비동기 처리를 동기 처리로 만드는 법
setTimeout(() => {
  console.log('A');
}, 3000);
setTimeout(() => {
  console.log('B');
}, 2000);
setTimeout(() => {
  console.log('C');
}, 1000);

// Callback Hell
setTimeout(() => {
  console.log('A');

  setTimeout(() => {
    console.log('B');

    setTimeout(() => {
      console.log('C');
    }, 1000);
  }, 2000);
}, 3000); // <= 이렇게 하면 A 결과를 이용하여 B처리, B처리 결과를 이용하여 C처리가 가능.
// ㄴ가독성이 별로. 딥스가 자꾸 깊어짐.

// Promise 객체 
// 비동기 처리의 결과를 제공하겠다는 약속을 반환함.
// 단, 비동기 처리가 끝날 때까지 결과를 기다리는 것은 아니다(=동기 처리가 되진 않는다).
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
   // 파라미터가 고정돼있음.
  // ㄴ성공했을 때는 resolve란 함수를 반환, 실패했을 때는 reject란 함수를 반환.
  // ㄴ비동기 처리 한 개 단위로만 만들어야 함.
  setTimeout(() => {
    if(str === 'A' || str === 'B' || str === 'C') {
      console.log(str);
      resolve(); // <= 성공패턴이 끝났을 때 resolve를 꼭 호출해야 함.
      // resolve 앞에 return은 생략 가능.
    } else {
      reject(); // <= 마찬가지로 실패했을 때 reject를 호출.
    }
  }, ms);
});
}

// pro1('D', 500).then().catch().finally(); <= chaining 기법
pro1('D', 500)
.then(() => {
  console.log('THEN');
}) // 작업이 성공했을 때(resolve로 반환했을 때), then 메소드의 콜백 함수를 실행함. 
.catch(() => {
  console.log('CATCH');
}) // ㄴ작업이 실패했을 때, 실행.
  // ㄴreject를 반환해서 에러가 발생하면 catch가 그걸 받아서 후속 처리를 해줌.
.finally(() => {
  console.log('FINALLY');
}); // 성공, 실패 상관없이 무조건 실행. 제일 마지막에 작성해줘야 함.
//ㄴpro1의 결과값이 then, catch, fanally 파라미터에 들어감.

pro1('A', 3000)
.then(() => {
  pro1('B', 2000)
  .then(() => {
    pro1('C', 1000)
    .then()
    .catch();
  })
  .catch;
})
.catch();

pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();