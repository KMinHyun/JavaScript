// switch문
let food = '돈까스';
let foodKinds = ''; //아직 값이 정해지지 않았을 때 문자열의 경우 홑따옴표로 표시.

if(food === '돈까스') {
  foodKinds = '경양식';
} else if(food === 김치찌개) {
  foodKinds = '한식';
} else if(food === 초밥) {
  foodKinds = '일식';
} else {
  foodKinds = '기타';
}
//위의 if문을 아래처럼 바꿀 수 있음.
switch(food) {
  case '돈까스':
    foodKinds = '경양식';
    break;
  case '김치찌개':
    foodKinds = '한식'
    break;
  case '초밥':
    foodKinds = '일식'
    break;
  default:
    foodKinds = '기타'
    break;
}
// food는 검증할 값. 각 case마다 검증해서 맞으면 처리, 아니면 다음 case. 이렇게 1:1 방식으로 검증함.
// 스위치는 완전 비교.
// break를 넣지 않으면 돈까스를 체크하고서 또 김치찌개를 체크함. 마지막 break는 빠져도 되지만 관습적으로 넣어줌.