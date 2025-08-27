// 요소 선택 방법
  // HTML 요소의 id로 선택
  const title = document.getElementById('title');
  console.log(title)
  title.style.color = "blue";

  // 두번째 : HTML 요소의 태그명으로 선택하는 방법 
  const tagH1 = document.getElementsByTagName('h1');
  console.log(tagH1);
  for(let i = 0; i < tagH1.length; i++) {
    tagH1[1].style.fontSize = '50px';
  }

  // 세번째 : HTML 요소의 클래스명으로 선택하는 방법 
  const classH1 = document.getElementsByClassName('test');
  console.log(classH1);

  //----------여기까진 잘 사용하진 않음--------------//

  // *** 중요 *** CSS 선택자로 요소를 선택하는 방법
  // ㄴ여러개가 선택될 때는 제일 첫번째 것만 선택됨.
  const selectorTitle = document.querySelector('#title');
  selectorTitle.style.color = 'red';

  // *** 중요 *** CSS 선택자로 요소를 선택하는 방법
  // ㄴ여러개일 때 모두 선택, NodeList 객체
  const selectorAllH1 = document.querySelectorAll('h1');
  selectorAllH1.forEach(node => node.style.color = 'green');

//----------------------------
// 요소의 조작
//----------------------------
// textContent : 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달
selectorTitle.textContent = '<p>바뀐다.</p>';
// innerHTML : 컨텐츠를 획득 및 변경, 태그는 태그로 인식해서 전달
selectorTitle.innerHTML = '<span>이너로 넣었다.</span>';

// setAttribute(속성명, 값) : 요소에 속성을 추가하는 방법
const inputEmail = document.querySelector('input');
inputEmail.setAttribute('placeholder', '이메일을 적어주세요.');
inputEmail.setAttribute('required', ''); // 값이 세팅 안 될 땐 빈 문자열로.

// removeAttribute(속성명) : 요소의 속성을 제거하는 방법
selectorAllH1[1].removeAttribute('style');

//------------------------------------
// 요소 스타일링
//------------------------------------
// style : HTML 요소에 인라인 스타일 추가
title.style.color = 'red';

// classList : HTML 요소에 클래스로 스타일 추가
const p = document.querySelector('p');
// p.setAttribute('class', 'test2'); <= 기존에 클래스가 있었다면 덮어씌움.
p.classList.add('test2'); // <= 새로운 클래스를 기존 클래스 뒤에 추가
p.classList.remove('test2');
p.classList.toggle('test3'); // <= 없는 클래스면 추가가 되고, 있는 클래스면 없어짐.

//-----------------------------
// 새로운 요소 생성
//-----------------------------
// 요소 생성
const newH1 = document.createElement('h1');
newH1.textContent = '새로운 요소다.';

// 요소 넣기(부모 노드의 가장 마지막 자식 노드로 추가)
  // ㄴ노드란? 요소를 말함. 데이터가 저장돼있는 위치.
document.body.appendChild(newH1);

// 요소 넣기(부모 노드의 자식 노드 중 특정 타겟 앞에 노드를 추가)
const newH2 = document.createElement('h1');
newH2.textContent = '새로운 요소다.'; // 여러 군데 넣으려면 새로운 객체를 생성해야 함.

const childP = document.querySelector('p'); // <= 타겟 삼을 노드도 불러와야 함.
document.body.insertBefore(newH1, childP); 
// ㄴ이미 만든 객체를 사용하면 위치가 이동이 됨.
// ㄴdocument.body.insertBefore(newH11, childP);  

// 요소 제거
const form = document.querySelector('form'); // <= 요소에 접근하고 싶으면 노드로 획득해야 한다.
  // ㄴ노드는 요소를 객체 형태로 불러오는 걸 말함.
document.body.removeChild(form);
