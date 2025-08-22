// String 객체
let str = '문자열입니다.'; // <= 얘도 객체.

// length : 문자열의 길이를 반환
console.log(str.length); // <= length란 프로퍼티를 가지는 객체들은 이터러블함.
  // ㄴ이터러블 = 요소들이 순서가 있는 데이터 타입들을 말함.
  // ㄴ이터러블한 객체들은 반복문을 사용할 수 있음.
  console.log(str[2]);

// charAt(idx) : idx(인덱스)의 요소의 값을 반환함.
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아서 최초의 인덱스를 반환함.
  // 못 찾으면 -1을 반환함. => 문자열에 특정 문자가 있는지 없는지 체크 가능.
  // idx는 생략 가능. start 지점을 지정하는 용도.
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열')); // <= 왼쪽부터 시작해서 제일 처음 만나는 위치의 방 번호를 반환.
console.log(str.indexOf('열', 3)); // <= 왼쪽에서 3번째부터 시작해서 제일 처음 만나는 위치의 방 번호를 반환.
console.log(str.indexOf('입니다'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자')); // <= 존재 여부 체크할 땐 includes가 더 가독성 좋음.

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 문자열을 반환함.
  // ㄴ기존의 문자열을 잘라내고 replacement로 대체하는 용도.
  // ㄴ찾은 것 중에 첫번째거만 바꿈.
  // ㄴreplacement에 '공백'을 넣으면 지워진 거처럼 보임.
console.log(str.replace('문자열', '숫자'));

// replaceAll() : pattern을 찾아서 모든 문자열을 replacement로 치환한 문자열을 반환함.
console.log(str.replaceAll('문자열', '숫자'));
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx부터 endIdx전까지 자른 문자열을 반환함.
  // ㄴendIdx는 생략 가능.
  // ㄴ주의할 점 : 자동완성으로 sub와 substr이 뜨는데 절대 사용하지 않기.
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5));
console.log(str.substring(-1, 5)); // <= 잘 안 씀. 확장자 자를 때 정도 쓸까말까.

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환.
  // ㄴlimit은 생략 가능
str = '탕수육,짜장면, 짬뽕, 크림새우';
let arr = str.split(',');
// let arr = str.split(',', 1); <= 잘 안 씀.

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환함.
// ㄴ 문자열 제거는 replace가 있기 때문에 보통 공백 제거용으로 사용함. 
str = '   하  하   ';
console.log(str.trim());

// toUpperCase(), toLowerCase() : 영어 대소문자로 변환해서 반환.
str = 'AwWsDsFf';
console.log(str.toUpperCase());
console.log(str.toLowerCase());