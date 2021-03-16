let num = 1;
num = num * 3;
let str = '문자';
str = '다른 문자';

let  arr = [];
arr = [ 1, 2, 3];

let obj = {};
obj = {name : '새 객체'};

const num1 = 1;
//num1 = 2;

//let은 가변 변수, const는 불변 변수 따라서 위의 형식으로 변경이 불가능 하나
//push, splice 등 내장 함수로는 변경시킬 수 있다. 단 무결성 조건에 위배될 수 있다.

const arr2 = [];
arr2.push(1);
arr2.splice(0,0,0);
arr2.pop(); //arr2 = [1]

const obj2 = {};
obj2['name'] = '내 이름';
Object.assign(obj2, {name: '새 이름'});
delete obj2.name;

//무결성 조건을 지키면서 값을 수정하려면 새로운 const 를 정의하는 방식으로 가야한다.
const num3 = 1;
const num4 = num3 * 3;

//배열을 이용할 땐 push, pop, shift 가 아니라
//concat(), slice(),를 이용해 기존 값을 추출해 새 불변 변수에 할당하면 된다.