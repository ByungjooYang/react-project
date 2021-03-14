//es6 템플릿 문자열

let string1 = '안녕하세요';
let string2 = '반갑습니다';
let greeting1 = string1 + ' ' + string2;
let greeting2 = `${string1} ${string2}`;
let product = { name: '도서', price: '4200원' };
let message1 = '제품' + product.name + '의 가격은' + product.price + '입니다.';
let message2 = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
let multiLine1 = '문자열1\n문자열2';
let multiLine2 = `문자열1
문자열2`;
let value1 = 1;
let value2 = 2;
let boolValue = false;
let operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
let operator2 = `곱셈값은 ${value1 * value2}입니다.`;
let operator3 = '불린값은' + (boolValue ? '참' : '거짓') + '입니다.';
let operator4 = `${boolValue ? '참' : '거짓'}입니다.`;

let cart = { name: '도서', price: 1500 };
let getTotal = function(cart) {
    return cart.price + '원';
};
let myCart1 = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + '입니다.';
let myCart2 = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`;
