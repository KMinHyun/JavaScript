const writeBtn = document.querySelector('#writeBtn');
writeBtn.addEventListener('click', () => {
  const keywordInput = document.querySelector('#keyword');
  if(keywordInput.value) {
    let keyword = keywordInput.value;

    // content 요소 생성하기
    const newContent = document.createElement('div');
    newContent.classList.add('content');
    // newContent.innerHTML = `<p></p>`;
      // ㄴ 이렇게 써도 되긴 하지만 요즘은 잘 안 씀. 관리가 어렵다.
      // ㄴ HTML 요소가 JS에 들어가 있는 건 좋지 않음.
      // ㄴ p 태그 안에 class나 여러 속성을 많이 넣을 때 불편함.
      // ㄴ 에밋이 도와주지 않음.
    const newP = document.createElement('p');
    newP.textContent = keyword; 
    // ㄴ keyword => keywordInput.value
    // ㄴ 굳이 keyword 변수 선언 안 하고 그대로 가져와서 써도 됐음.
    // ㄴ 여기에서만 쓰기 때문에.
    // ㄴ 변수 선언을 하면 그만큼 메모리를 쓰기 때문에 꼭 필요하지 않으면 지우는 게 나음.
    newContent.appendChild(newP);
    // 취소선 추가하기
    newContent.addEventListener('click', (e) => {
      e.target.classList.toggle('toggle-line-through');
    });



    // 생성한 요소 추가하기
    const printBox = document.querySelector('.print-box');
    printBox.appendChild(newContent);

    // 검색어 초기화하기
    keywordInput.value = '';
  }

  return; // <= return을 넣음으로써 종료로 인식. 요즘은 없어도 자동으로 됨.
});
// 콜백함수의 파라미터에 e를 넣을 땐 { } 사이에 e를 사용할 경우에만.
// e.target : 이벤트를 writeBtn에 추가했을 때 writeBtn의 정보가 담긴다.

// 서비스
// 1. input에 엔터 작동 시키기.
const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    // ㄴ이벤트의 key는 이벤트가 발생한 순간에 누른 키가 저장됨.
    e.preventDefault(); // <= 기존 keypress 이벤트를 중지함.
    const writeBtn = document.querySelector('#writeBtn');
    writeBtn.click(); // <= 작성 버튼 클릭 이벤트 발생시키기.
    // 위에 함수를 그대로 적어서 작동시켜도 됨.
    // 키 이벤트가 두 번 발생해서 좋은 방식은 아님.
  }
});

// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리게.
// ㄴ동적 처리한 곳에 이벤트를 줘야 하기 때문에 동적 요소를 생성한 곳으로 가야 함.