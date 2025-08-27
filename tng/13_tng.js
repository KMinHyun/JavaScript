// - '사과 게임' 위에 '장기' 삽입
// - '어메이징브릭'에 베이지 배경색 추가
// - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

const gameList = document.querySelector('#ul') // 부모 요소
const newElement = document.createElement('li'); // 요소 생성
newElement.textContent = '장기';
const appleGame = document.querySelector('#apple'); // 타겟
gameList.insertBefore(newElement, appleGame);

const AmazingBrick = document.querySelector('ul li:nth-of-type(10)');
AmazingBrick.style.backgroundColor = 'beige';

const gameListChildren = document.querySelectorAll('li');
for(let i = 0; i < gameListChildren.length; i++) {
  if(i % 2 === 0) {
    gameListChildren[i].style.color = 'blue';
  } else if(i % 2 === 1) {
    gameListChildren[i].style.color = 'red';
  }
}

// gameListChildren.forEach((i, index) => {
//   if(index % 2 === 0) {
//     i.style.color = 'blue';
//   } else {
//     i.style.color = 'red';
//   }
// });


//-------------Tver--------------//
// 새로운 요소를 삽입해야 함 =>
// 요소 삽입 방법은 2가지 중 insertBefore =>
// 부모 노드.insertBefore(새 노드, 타겟 노드) =>
// 부모 노드와 새 노드, textContent로 '장기' 생성 =>
// 타겟 노드 생성

// const amazingLi = document.querySelector('ul :last-child');
// amazingLi.style.backgroundColor = 'beige';

// const listLi = document.querySelectorAll('#ul li');
// listLi.forEach((node, idx) => {
//   if(idx % 2 === 0) {
//     node.style.color = 'blue';
//   } else {
//     node.style.color = 'red';
//   }
// });

// function changeLiColor() {
//  const listLi = document.querySelectorAll('#ul li');
//  listLi.forEach((node, idx) => {
//    if(idx % 2 === 0) {
//       node.style.color = 'blue';
//    } else {
//       node.style.color = 'red';
//      }
//  });
// }
// changeLiColor();
// ㄴ이렇게 함수로 빼놓으면 추후에 필요할 때마다 추가사항 아래 호출만 하면 됨.

// 백엔드에서 보통 아래처럼 전달 옴.
{
  title: '타이틀';
  content: '내용';
  img: 'http://www.admin.com/img/posts/sdasd/png';
}
// 아래 형태처럼 저장을 함.
const result = {
  title: '타이틀',
  content: '내용',
  img: 'http://www.admin.com/img/posts/sdasd/png'
}

  //item란에는 아무 이름 들어가면 됨.
function addCard(item) { 
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = ('card-title');

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard); // 카드 컨테이너가 있으면 body가 아님.
}

// 카드 구조 만들기
const newCard = document.createElement('div');
newCard.classList.add('card');
  //ㄴ클래스 속성이 들어간 카드가 만들어짐.
const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');

const newCardTitle = document.createElement('p');
newCardTitle.textContent = '카드 타이틀';

const newCardContent = document.createElement('p');
newCardContent.textContent = '내용';

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);

