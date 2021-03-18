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
s.area();


function Circle(x, y, radius){
  Shape(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

Object.assign(Circle.prototype, Shape.prototype, {
  area: function() {
    return this.radius * this.radius;
  }
});

let c = new Circle(0, 0, 10);
c.area();