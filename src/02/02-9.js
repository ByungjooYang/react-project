// 배열 함수

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