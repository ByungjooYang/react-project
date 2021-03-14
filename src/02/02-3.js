//전개 연산자
let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
let combined1 = [array1[0], array1[1], array2[0], array2[1]];
let combined2 = array1.concat(array2);
let combined3 = [].concat(array1, array2); //concat()은 두 배열을 합치는 함수.

let first = array1[0];
let second = array1[1];
let three = array1[2] || 'empty'; // 추출할 배열의 요소가 없을 때 기본값을 지정한다.

function func() {
    let args = Array.prototype.slice.call(this, arguments); // 특수 변수(arguments)를 사용해 함수 내 인자 항목들을 배열로 변환. func(a,b,c) => args[0] = a, args[1] = b
    let first = args[0];
    let other = args.slice(1, args.length); // 인덱스 범위에 해당하는 배열 요소를 추출. args.length가 전체 배열의 길이이므로 인덱스 범위 1번부터 마지막 항목까지 추출한다.
}
