// 1. 현재 시각 표시하기
// 2. 멈춤 버튼과 재시작 버튼 만들기
// 3. 멈춤 기능 재시작 기능 넣기

// const thisTime = new Date();
// const thisHours = thisTime.getHours();
// const thisMinutes = thisTime.getMinutes();
// const thisSeconds = thisTime.getSeconds();
// const entireTime = `${thisHours}:${(thisMinutes.toString().padStart(2, '0'))}:${(thisSeconds.toString().padStart(2, '0'))}`;
// const timeBox = document.querySelector('.timeBox');
// const timeOutput = document.querySelector('.timeOutput');
// // timeOutput.textContent = `현재 시각 ${entireTime}`;

// function timeSetting() {
//   const thisTime = new Date();
//   const thisHours = thisTime.getHours();
//   const thisMinutes = thisTime.getMinutes();
//   const thisSeconds = thisTime.getSeconds();
//   const entireTime = `${thisHours}:${(thisMinutes.toString().padStart(2, '0'))}:${(thisSeconds.toString().padStart(2, '0'))}`;

//   timeOutput.textContent = `현재 시각 ${entireTime}`;
// }

// const timeInterval = setInterval(timeSetting, 1000);


// const stopBtn = document.querySelector('#stopBtn');
// stopBtn.addEventListener('click', () => {
//   clearInterval(timeInterval);
// });

// const restartBtn = document.querySelector('#restartBtn');
// restartBtn.addEventListener('click', () => {
  
// });

//-------------------Tver--------------------//
nowTimeIntoElement('#nowTime');

/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입.
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector('#nowTime');
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환
 * @returns {string} // return이나 파라미터 타입이 여러개 일때 |(또는) 넣어주면 됨
 */
function generateNowTimeFormat() {
  const now = new Date();
  // return now.toLocaleTimeString();
    // ㄴ간단하게 시분초 출력 가능. 단, 시 앞에 0이 안 붙음.
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // 현재 시간에서 시, 분, 초를 가져옴.
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }
  // 오전과 오후 나눠줌.
  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // 굳이 변수 선언을 안 해도 되기 때문에 바로 return.
}
// ㄴ함수는 하나의 기능만을 해야 하는데 지금 두 개의 기능을 하고 있음.

/**
 * 현재시간을 `오전 hh:mm:SS,sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }

  return `${ampm}`
  + ` ${hours.toString().padStart(2, '0')}`
  + `:${minutes.toString().padStart(2, '0')}`
  + `:${seconds.toString().padStart(2, '0')}`
  + `.${milliseconds.toString().padStart(3, '0')}`;
}

let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#nowTime');
  nowTime.textContent = generateNowTimeFormat();
}, 1000);
// 인터벌로 시간 흐르게 만듦.

const buttonStop = document.querySelector('#buttonStop');
buttonStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
  // ㄴsetInterval의 반복저장을 막기 위해 사용.
});
// 멈춰 버튼 처리

const buttonRestart = document.querySelector('#buttonRestart');
buttonRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');
  // ㄴInterval은 처음부터 바로 시작하는 게 아니라 1초 뒤에 실행하기 때문에 적어줌.
  // clearInterval(intervalNowTime);
    // ㄴ이렇게 하면 간단하게 처리 가능. 단, 리소스 낭비가 될 수 있음.
  if(intervalNowTime === null) {
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#nowTime');
    }, 1000);
  }
});
// 재시작 버튼 처리

const buttonRecord = document.querySelector('#buttonRecord');
buttonRecord.addEventListener('click', () => {
  const container = document.querySelector('.recordContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  container.appendChild(newP);
  // newP.textContent = document.querySelector('#nowTime').textContent;
    // ㄴ멈춰 버튼을 눌렀을 때 저장하는 법
});
// 기록 버튼 만들기

const buttonRecordReset = document.querySelector('#buttonRecordReset');
buttonRecordReset.addEventListener('click', () => {
  document.querySelector('.recordContainer').textContent = '';
});
// 기록 초기화 하는 법
