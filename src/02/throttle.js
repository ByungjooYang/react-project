//쓰로틀은 디바운스와 개념은 비슷.
//입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다는 점이 다르다. 무한 스크롤에 쓰로틀이 사용된다.

function throttle(func, delay){ //func : 스크롤 이동시 호출되는 서버 요청. delay : 호출 생략 시간
  let lastFunc;
  let lastRan;

  return function(...args){
    const context = this;

    if(!lastRan){
      // func 함수가 처음 실행될 때 함수를 즉시 실행하고, 실행시간을 저장한다.
      func.call(context, ...args);
      lastRan = Date.now();

    }else {
      if(lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(function(){
        if(( Date.now() - lastRan) >= delay ){ //이후 함수 요청까지의 딜레이 시간을 계산하고 이 값이 delay 보다 커야만 func()을 실행
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  }
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;

  if(currentScrollPosition >= pageBottomPosition){
    console.log('다음 페이지 로딩');
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);