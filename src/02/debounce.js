//디바운스 & 스로틀
// es6 문법은 아니나 지연처리를 효율적으로 구현할 수 있다.
// 서버의 데이터를 요청하는 등의 작업에서 생기는 부하를 크게 줄여주므로 알아두는 것이 좋다.

//디바운스는 어떤 내용을 입력하다가 특정 시간동안 대기하고 있으면 마지막에 입력된 내용을  바탕으로 서버 요청을 하는 방법이다.
//포털 사이트 검색창에 내용 입력할 때는 검색창 하단에 내용이 없다가 입력을 멈추면 검색창 하단에 연관 검색어 목록이 나타나는 것이 디바운스를 이용한것이다.

export function debounce(func, delay){ //func :  인자요청, delay : 지연 시간
  let inDebounce;
  return function(...args){ //args는 run 함수의 인자를 담고 있는 배열을 얻기 위해 사용
    if(inDebounce) {        //inDebounce는 지연 대기 시간 내에 입력신호가 호출될 때 실행 대기 함수를 취소하기 위해 사용
      clearTimeout(inDebounce); //indebounce 값이 있으면 clearTimeout으로 setTimeout에서 지정한 것을 삭제
    }
    inDebounce = setTimeout(() =>
      func(...args), delay);
  }
}

//debounce.js 를 실행하려면 export를 삭제 후 실행 후 다시 export를 넣어주어야 한다.

const run = debounce(val => console.log(val), 100);
run('a');
run('b');
run('c');