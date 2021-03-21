//=============================================== 구조 분해 사용법
let list = [0, 1];
let item1 = list[0]; // 배열 인덱스를 사용해 변수에 할당.
let item2 = list[1];
let item3 = list[2] || 'default key3 value'; // || 연산자를 사용해 배열의 해당 인덱스에 값이 없으면 기본값을로 할당한다.

let temp = item2;
item2 = item1;
item1 = temp;

let obj = {
  key1 : 'one',
  key2 : 'two',
};

let key1 = obj.key1; // 객체의 키값을 변수에 할당.
let key2 = obj.key2;
let key3 = obj.key3 || 'default key3 value';
let newKey1 = obj.key1;

//=====================================================

let list1 = [0, 1];
let [
  item4,    // 대괄호 블록 사이에 추출하고자 하는 값의 인덱스 위치에 변수를 배치.
  item5,
  item6 = -1 //기본값 할당
] = list1;

[item5, item4] = [item4, item5]; // 인덱스 위치에 각각 변경할 변수를 교차배치해 배열의 두 값을 치환했다.
let obj1 = {
  key1: 'one',
  key2: 'two'
};

let {
  key1: newKey2,
  key2, // 객체의 키 값을 변수에 할당.
  key3 = 'default key3 value',  // 새 변수명을 선언해 추출된 키 값을 다른 변수명으로 할당.
} = obj1;

let[item1, ...otherItems] = [0,1,2];                 // otherItems = [1, 2]
let {key1, ...others} = { key1: 'one', key2: 'two'}; // others = { key2: 'two'}

/*
 구조 할당 표현식을 이용해 배열에서 첫 위치의 인덱스 값 item1을 추출하고 나머지 값을 전개 연산자로 otherItems에 할당.
 객체의 key1 키값을 추출하고 나머지 키값을 포함한 새 객체를 others에 할당.
 */