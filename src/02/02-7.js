//객체 확장 표현식, 구조 분해 할당

// 아래는 기존 js로 객체와 객체의 값을 선언하기 위해서는 키 이름과 값을 각각 할당해야 했다.

let x = 0;
let y = 0;

let obj = {x: x, y: y};
let randomKeyString = 'other';

let combined = {};

combined['one' + randomKeyString] = 'some value'; //연산 결과로 키값을 대입할 때는 키값을 지정할 코드로 추가로 작성해야한다.

let obj1 = {
  x: x,
  methodA: function(){ console.log('methodA'); },
  methodB: function(){ return 0; },
};

//===========================================================

let x1 = 0;
let y1 = 0;
let obj2 = {x1, y1};  // 객체의 변수 선언시 키 값 생략하면 자동으로 키의 이름으로 키 값을 지정한다.
let randomKeyString1 = 'other';
let combined1 = {
  ['one' + randomKeyString1] : 'some value', //대괄호 사용해 표현식 장성하면 추가하여 계산된 키값을 생성할 수 있다.
};

let obj3 = {
  x,
  methodA1() { console.log('methodA1');}, //function 키워드를 생략하여 함수를 선언할 수 있다.
  methodB1() { return 0; },
};
