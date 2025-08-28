// 이벤트 //
function test() {
  alert('테스트');
}
 
//프로퍼티 리스너 <== 오늘 날엔 안 씀
// ㄴ동일한 이벤트를 여러번 사용 불가능함.
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2222')
}

// addEventListener <= 현업에서 거의 얘 사용
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼33');
}); // 이벤트 명을 첫번째 파라미터의 아규먼트로 설정하면 됨.
btn3.addEventListener('click', btn3Alert);

// 익명 함수도 객체로 인식돼서 주소값을 가지고 메모리에 올라감.
// 그래서 익명 함수 잘 안 쓰고 따로 함수로 빼냄.

function btn3Alert(event) {
  console.log(event);
  alert('33333');
} 

window.addEventListener('scroll', () => {
  console.log('scroll test');
});

// removeEventListener() : 이벤트를 제거하는 법
// btn3.removeEventListener('click', btn3Alert);
// addEventListener와 이벤트명과 함수를 똑같은 걸 써줘야 함.
  // ㄴ그래서 addEventListener의 함수를 익명함수로 쓰면 삭제할 방법이 없다.

window.addEventListener('load', () => {
  window.open('http://www.google.com');
}); // 팝업창 띄울 때


//--------------------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
}); // 이벤트 객체는 파라미터에 e 또는 event를 받는다.
  // e.target이 이벤트를 발생한 시점의 객체를 가져옴.
  //ㄴvalue는 input의 내용. 유저가 친 값이 여기 들어감.

  // 이벤트객체
// const inputEmail = document.querySelector('#email');
// inputEmail.addEventListener('keyup', (e) => {
  //   console.log(e.target.value);
  // });
// const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  const regex = /^[0-9]+$/;
  const label = document.querySelector('#labelEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    label.textContent = '';
  }
});


//---------------체크에 따라 비밀번호  
// 체크박스 접근
const chkPw = document.querySelector('#checkingPw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#password');
  // 체크 여부 확인 분기
  if(e.target.checked) {
    // 인풋 패스워드 type 속성을 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성을 password로 변경
    pw.setAttribute('type', 'password');
  }
});