// 일정 시간이 지난 후 작업을 실행하는 함수
// const timeoutNum1 = setTimeout(() => {
//   console.log('2초');
// }, 2000); // ms 단위로 적어야 함.
// setTimeout(() => {
//   console.log('1초');
// }, 1000);
// setTimeout(() => {
//   console.log('3초');
// }, 3000);
// console.log('콘솔');

// setTimeout() 타임아웃 취소시키는 법
// clearTimeout(timeoutNum1);

// 일정 시간마다 반복해서 실행하는 함수
const intervalId1 = setInterval(() => {
  console.log('인터벌 3초');
}, 3000);

// setInterval() 인터벌 취소시키는 법
// clearInterval(intervalId1);
setInterval(() => {
  clearInterval(intervalId1);
}, 4000); // 이렇게 응용도 가능.