class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
  }
}

class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  } // 부모의 생성자를 호출하면 됨. super = 부모 객체

  // 오버라이딩 : 부모에게서 상속받은 게 마음에 안 들 때 재정의할 수 있음.
  breath() {
    console.log('눈누난나');
  } // 부모에게서 상속받은 메소드명과 파라미터 똑같이 해야 됨. 


  Swimming() {
    console.log(`${this._name}가 헤엄칩니다.`);
  }
}

class FlyingSquirrel extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }

  flying() {
    console.log(`${this._name}가 날아갑니다.`);
  }
}

const whale = new Whale('고래', '바다');
whale.breath();