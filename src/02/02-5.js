// Arrow function

function add(first, second){
  return first * second;
}

//typeof add === 'function' 익명 함수.(함수 이름이 없다.)
let add1 = function(first, second){
  return first + second;
}
//typeof add === 'function'

//====================================================== arrow function

let add2 = (first, second) => {
  return first + second;
};

//본문 블록이 비어있고 결괏값을 바로 반환하는 경우 중괄호를 생략하고 => 뒤에 반환 표현식을 넣을 수 있다.
let add3 = (first, second) => first + second;

// 반환값이 객체라면 괄호로 결과값을 감싸 간결히 표현할 수 있다.
let addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

/*
화살표 함수는 함수 표현식을 간결히 할 수 있고, 이후의 커링과 같은 디자인 패턴에서 사용되는 함수를 반환할 때 계단형 함수 선언과 같은 구조가 만들어지지 않게 해준다는 장점이 있다
 */

// 함수 표현식을 반환하는 메서드

function addNumber(num){
  return function(value){
    return num + value;
  }
}

// 위의 메서드를 화살표 함수로 간결하게 표현함.
let addNumber1 = num => value => num + value;


//================================================= 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind 함수를 사용해 this 객체를 전달하는 과정을 포함한다.

class MyClass{
  value = 10;
  constructor() {
    let addThis = function(first, second){
      return this.value + first + second;

    }.bind(this);

    let addThis3 = (first, second) => this.value + first + second;
  }
}

//addThis 함수는 this를 bind 함수에 전달해 this의 범위를 유지하고 있다. addThis 함수의 경우 화살표 함수이므로 이 과정이 생략된다.