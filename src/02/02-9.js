// 배열 함수
// qs는 banana=10&apple=20&orange=30

function parse(qs){
  let queryString = qs.substr(1);
  let chunks = qs.split('&');
  let result = {};

  for(let i = 0; i < chunks.length; i++){
    let parts = chunks[i].split('=');
    let key   = parts[0];
    let value = parts[1];

    result[key] = value;
  }
  return result;

}

function parse1(qs){
  let queryString = qs.substr(1);
  let chunks = qs.split("&");
  let result = {};

  for(let i=0;i<chunks.length;i++){
    let parts = chunks[i].split('=');
    let key = parts[0];
    let value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;

  }
  return result;
}

function parse2(qs){
  const queryString = qs.substr(1);
  const chunks = queryString.split('&'); //chunks = ['banana=10', 'apple=20', 'orange=30']
  let result = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split("="); //chunk = 'banana=10', parts = ['banana', '10']
    const key   = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  return result;
}

function parse3(qs){
  const queryString = qs.substr(1);
  const chunks      = qs.split('&');

  const result      = chunks.map((chunk) => {
    const[key, value] = chunk.split('=');
    return {key: key, value: value};
  });
  return result;

  /*
  map 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환.
  즉 배열을 가공해 새 배열을 만드는 함수.
   */

}

//========================== reduce 함수 : 배열을 객체로 변환.

function sum(numbers){
  return numbers.reduce((total, num) => total + num, 0);
  //첫 인자에 변환 함수, 두 번째 인자에 초깃값(0) 전달
}
sum([1, 2, 3, ,4, 5, ,6, 7 ,8 ,9 ,10]); //55

//reduce는 보통 배열을 특정 자료형으로 변환하는데 사용. 배열의 총 합을 구하는 예제라기 보다 배열을 숫자로 변환한 예제이다.
//reduce를 활용해 배열을 객체로 변환.
function parse4(qs){
  const queryString = qs.substr(1);
  const chunks      = qs.split('&');

  return chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return {key, value};

  }).reduce((result, item) => {
    result[item.key] = item.value;
    return result;

  }, {}); // 초기값 빈 객체 {}

}