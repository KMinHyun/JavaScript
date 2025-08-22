// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작
// const now = new Date();
// console.log(now.getTime());

// Date 인스턴스 <= 인스턴스 : 메모리에 올리는 작업을 말함.
const now = new Date(); // () 안에 arg 넣을 수 있는데 안 넣으면 현재 시간으로 세팅.

// 특정 날짜를 지정하고 싶을 때
const date1 = new Date(`1990-02-23 14:30:00`);
const date2 = new Date(1980, 10, 10, 23, 0, 1); // <= 이렇게 잘 안 씀.
const date3 = new Date(489574439) // <= 유닉스 타임스탬프를 이용한 방법.

// getFullYear : 연도 획득
const nowYear = now.getFullYear(); // 생성한 객체에서 해당 연도만 가지고 옴.
console.log(nowYear);

// getMonth : 월 획득 (주의: 0~11로 반환)
const nowMonth = now.getMonth() ;
console.log(nowMonth);
// const nowMonth = now.getMonth() +1;

// getDate() : 일 획득
const nowDate = now.getDate();
console.log(nowDate);

// getHours() : 시를 반환
const nowHours = now.getHours();
console.log(nowHours); // 숫자를 가져오므로 앞에 0이 붙지 않음.

// getminutes() : 분을 반환
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// getseconds() : 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

// getMilliseconds() : 밀리초를 반환
const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

// getDay() : 요일을 반환(주의 : 0~6을 반환하고, 0 = 일요일을 말하고 6은 토요일을 말함)
const nowDay = now.getDay();
console.log(nowDay);

// 요일을 한글로 변환하기
let koreanDay = '';
switch(nowDay) {
  case 0:
    koreanDay = '일요일';
    break;

  case 1:
    koreanDay = '월요일';
    break;

  case 2:
    koreanDay = '화요일';
    break;

  case 3:
    koreanDay = '수요일';
    break;

  case 4:
    koreanDay = '목요일';
    break;
    
  case 5:
    koreanDay = '금요일';
    break;

  default:
    koreanDay = '토요일';
    break;
}

// xxxxY xxM xxD xx: xx: xx 금요일
// const nowFormat = `${nowYear}년 ${nowMonth}월 ${nowDay}일 ${nowHours}:${nowMinutes}:${nowSeconds} ${koreanDay}`;
// console.log(nowFormat);

// number를 string으로 변경하기
console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear)));
// padStart, padEnd 를 사용해서 자릿수 변경하기
// const nowFormat = `${nowYear}년 ${nowMonth.toString().padStart(2, '0')}월 ${nowDay}일 ${nowHours}:${nowMinutes}:${nowSeconds} ${koreanDay}`;
// ㄴpadStart(2, '0') = 해당 문자열을 두자릿수로 만드는데 앞자리가 빈다면 ' '안에 적힌 걸로 채워줘란 뜻.

function lpad(origin, length, fillStr) {
  // origin의 타입 체크 필요. 숫자면 바꿔줘야 하고 문자면 쓰면 되기 때문.
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }

  return origin.padStart(length, fillStr);
}
const nowFormat = `${nowYear}년 ${lpad(nowMonth, 2, '0')}월 ${lpad(nowDay, 2, '0')}일 ${nowHours}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);

// 두 날짜의 차를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 * 60 * 24));
console.log(diff);
// 일 단위 : 1초는 1000ms => 1000 * 60 * 60 * 24 로 나누면 된다.