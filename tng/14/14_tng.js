// 1. 글 입력하는 인풋과 '작성' 버튼
// 2. 작성 버튼을 누르면 아래와 같이 동작
//  2-1. 글 입력란이 비워져 있으면 아무 동작 없음
//  2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가
//    2-2-1. 작성 완료시 글 입력란을 비우기
// 서비스
// 1. 엔터로 작성되게 하기.
// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기.


const container = document.querySelector('fieldset');
container.classList.add('container');
const formStyle = document.querySelector('form');
formStyle.classList.add('formStyle');
const inputFillIn = document.querySelector('#fillIn');
const buttonEvent = document.querySelector('button');
buttonEvent.classList.add('enterBtn');

buttonEvent.addEventListener('click', eventRun);
buttonEvent.addEventListener('click', erase);

function eventRun() {
  if(inputFillIn.value) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divStyle');
    container.appendChild(newDiv);
    newDiv.textContent = inputFillIn.value;
  }
}

function erase() {
  if(inputFillIn.value) {
    inputFillIn.value = '';
  }
}
