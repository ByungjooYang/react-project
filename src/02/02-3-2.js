let objectOne = {one: 1, two: 2, other: 0};
let objectTwo = {three: 3, four: 4, other: -1};
let combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

let combined1 = Object.assign({}, objectOne, objectTwo);
// combined1 = {one: 1, two: 2, three: 3, four: 4, other: -1}

let combined2 = Object.assign({}, objectTwo, objectOne);
// combined1 = {one: 1, two: 2, three: 3, four: 4, other: 0}
//assign은 중복되는 키 값이 있으면 이후에 전달된 객체의 값으로 덮어쓴다.

let others = Object.assign({}, combined);
delete others.other;
// others = { one: 1, two: 2, three: 3, four: 4 }

// ======================================================== 전개 연산자

let combined3 = {
  ...objectOne,
  ...objectTwo,
};
// combined1 = {one: 1, two: 2, three: 3, four: 4, other: -1}

let combined4 = {
  ...objectTwo,
  ...objectOne,
};
// combined1 = {one: 1, two: 2, three: 3, four: 4, other: 0}

let { other, ...others } = combined4;
//객체에서 특정 값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당할 수 있다.