//클래스

function Shape(x, y){
  this.name = 'Shape';
  this.move(x, y);
}
//static 함수 선언
Shape.create = function(x, y){
  return new Shape(x, y);
}
//인스턴스 함수 선언
Shape.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.area = function(){
  return 0;
}

//아래 방식으로 해도 된다.

Shape.prototype = {
  move: function(x, y) {
    this.x = x;
    this.y = y;
  },
  area: function(){
    return 0;
  }
}
let s = new Shape(0, 0);
// this 객체에 해당하는 변수 및 함수가 prototype 객체에 선언된 변수와 함수를 함께 참조한다.
// Shape 함수에는 move를 정의하지 않았으나 prototype 객체에 move 가 정의되어 있으므로 prototype 선언 이후 new 연산자로 Shape 객체 s를 만든다.
// 그럼 s는 prototype 객체 안에 있는 move 함수를 참조할 수 있다. 또 s는 area()도 참조할 수 있다.
// 클래스의 상속은 prototype 객체의 값을 객체 내장 함수를 사용해 덮어 씌우는 방식으로 하는 것이다.
s.area();

//============================================================================= 아래는 Circle() 함수를 만드는 방법으로
// 자식 클래스의 Circle은 내장 함수 call 을 통해 부모의 생성자를 호출해 초깃값을 상속받는다. 자바의 super()와 같다.

function Circle(x, y, radius){
  Shape.call(this, x, y); // 내장 함수.
  this.name = 'Circle';
  this.radius = radius;
}

// 부모 클래스 함수를 상속하는 방법으로 Object 에 내장된 assign 함수를 사용.
Object.assign(Circle.prototype, Shape.prototype, {
  area: function() {
    return this.radius * this.radius;
  }
});

let c = new Circle(0, 0, 10);
c.area();

// ES6의 Class 를 이용.

class Shape1 {
  static create(x, y) {
    return new Shape1(x, y);
  }
  name = 'Shape'; // ES7에 포함된 클래스 확장 표현으로 constructor() 안에 this.name = 'Shape' 로 클래스 변수를 선언하는 것과 동일한 작업.
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y){
    this.x = x;
    this.y = y;
  }
  area(){
    return 0;
  }
}

let s1 = new Shape1(0, 0);
s.area();

// ES6 상속 구현

class Circle1 extends  Shape1 {
  constructor(x, y, radius) {
    super(x, y);
    this.radius= radius;
  }
  area(){
    if(this.radius === 0){
      return  super.area();
    }

    return this.radius * this.radius;
  }
}

let c1 = new Circle1(0, 0 ,10);
c1.area();