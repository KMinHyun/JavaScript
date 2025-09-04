// shallow copy(얕은 복사)와 deep copy(깊은 복사)
const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
}

// shallow copy : 최상위 계층(딥스)의 요소만 독립적으로 복사함.
// ㄴ그외 계층은 참조 형태로 복사가 된다.
const shallowCopy = {...user};
shallowCopy.age = 100; // <= 복사본만 바뀜.
shallowCopy.friends.id = 100; // <= 딥스가 하나 생겨서 원본도 같이 바뀜.
shallowCopy.friends = {test: 'ttt'}; // <= 최상위 계층만 바꾼 거기 때문에 복사본만 바뀐다.

console.log(user, shallowCopy);

// deep copy : 모든 계층의 요소를 독립적으로 복사 => 원본을 해치지 않는다
const jsonCopy = JSON.parse(JSON.stringify(user));
// JSON.stringify => 스트링 형태의 json 파일로 만듦
// JSON.parse => 다시 js파일로 만듦

jsonCopy.friends.id = 200;

const cloneCopy = structuredClone(user);
// ㄴnode.js 17버전 이상이거나 최신 브라우저에서만 가능한 딥 카피 방법


//---------------------------
// Destructuring 문법
//---------------------------
const arr = ['hong', 20];

// arr[0]; 이것만 봐서는 안에 뭐가 들었는지 알 수가 없음
// const [name, age] = arr; // <= index 순서대로 변수에 담김. 그래서 뭐가 들었는지 유추 가능.
const [name2] = arr; // <= age가 필요없으면 name만 적으면 된다.
const [, age2] = arr; // <= name이 필요 없는 경우, 이렇게 담는다.

// 객체일 때
const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
}

// user2.age; destructuring 문법이 아니면 이렇게 접근해야 함.
const {name, age, friends} = user2;
// 객체는 중괄호로 받아야 하고 키를 매칭해서 가져오기 때문에 키 명과 동일해야 함.
// 순서는 키를 매칭해서 가져오기 때문에 상관없음.
// const {name, friends} = user2; <= age가 필요 없으면 안 가져 오면 됨.