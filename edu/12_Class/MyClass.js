class MyClass {
  name = '홍'; // 프로퍼티의 기본 형태. 다른 언어에서 public으로 사용되는 역할.
    // public으로 만들면 클래스 내외부 어디서든 접근 가능해서 캡슐화가 깨짐.
  #age = 20; // => #이 private을 뜻함. 클래스 내부에서만 접근 가능.
  _addr = '동성로'; // => _가 protected를 뜻함. 
    // 나(속해있는 객체 안)와 상속관계에서 자식 클래스들은 접근이 가능.
  static gender = 'M'; // 클래스 정적 변수(스태틱 변수)
    // static을 쓰면 new로 인스턴스하지 않아도 불러올 수 있음.
    // 극히 제한적인 상황에서 쓰임.
    // JS를 실행할 때 static이 붙으면 미리 등록함.
    // static을 하면 여기저기서 쓸 수 있어서 캡슐화가 제대로 안 될 수 있다.
    // 또 여기저기 사용하면 메모리를 많이 잡아먹는다.

  // 생성자 메소드
  // 'new' 키워드로 객체를 인스턴스화할 때 딱 한번 실행되는 메소드다.
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr;
  } // this는 나 자신(객체)을 뜻함.
    // 초기값을 세팅할 때 많이 씀.
    // 이렇게 할 땐 위의 프로퍼티를 초기화를 하지 않음.
    // const myClass = new MyClass('홍길동', 20, '조선');
    // const myClass2 = new MyClass('갑순이', 10, '한국');
    
  // getter / setter => 보통 프라이빗한 프로퍼티에 접근하고 싶을 때 사용.
    // ㄴ메소드지만 사용할 때 프로퍼티 사용하듯이 동작을 함.
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  } // setter는 파라미터 필수.

  getAge() {
    return this.#age;
  } // 다른 언어에서 사용하는 getter, setter 방식.

  // 인스턴스 메소드
    // 일반적인 메소드를 말함.
  add(a, b) {
    return a + b;
  }
}
// 클래스 안에 함수를 정의할 땐 function 빼고 함수명과 파라미터와 리턴을 넣어주면 된다.

const myClass = new MyClass(); // 위에 작성한 클래스를 사용하기 위해 인스턴스함.
  // ㄴnew는 객체를 인스턴스 하기 위한 키워드.
let addNum = myClass.add(5, 10); // 마찬가지로 사용하기 위해 리턴값을 저장.
console.log(addNum);
console.log(MyClass.gender);
// console.log(myClass._addr); <= JS에선 없는 기능이라 public이랑 같기 때문에 주의 필요.
console.log(myClass.age); // 여기의 age는 getter 메소드의 age다.
  // 다른 언어는 메소드로 접근하는데 JS는 프로퍼티로 접근해야 함.
myClass.age = 40; // 여기 age는 setter 명이다.
console.log(myClass.age);