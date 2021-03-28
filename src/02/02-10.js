// 비동기 함수. (Async Function)

function work1(onDone){
  setTimeout(() => onDone('작업1 완료'), 100 );

}
function work2(onDone){
  setTimeout(() => onDone('작업2 완료'), 200);
}

function work3(onDone){
  setTimeout(() => onDone('작업3 완료'), 300);
}

function urgentWork(){
  console.log('긴급 작업');
}

// 지연 작업 함수를 실행, 콜백 지옥
work1(function (msg1){
  console.log('done after 100ms: ' + msg1);
  work2(function(msg2){
    console.log('done after 100ms: ' + msg2);
    work3(function(msg3){
      console.log('done after 100ms: ' + msg3);
    });
  });
});

urgentWork(); // 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수

class Promise{
  constructor(fn) {
    const resolve = (...args) =>{
      if(typeof this.onDone === 'function'){
        this.onDone(...args);
      }
      if(typeof this.onComplete === 'function'){
        this.onComplete();
      }
    }

    const reject = (...args) => {
      if(typeof this.onError == 'function'){
        this.onError(...args);
      }
      if(typeof this.onComplete === 'function'){
        this.onComplete();
      }
    }
    fn(resolve, reject);
  }
  then(onDone, onError){
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError){
    this.onError = onError;
    return this;
  }
  finally(onComplete){
    this.onComplete = onComplete;
    return this;
  }
}

//Promise 객체 생성시 다음과 같이 클래스의 resolve(). reject()에 해당하는 콜백 함수를 직접 전달해야한다.

const work4 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료'), 100);
  });

const work5 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료'), 200);
  });

const work6 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료'), 300);
  });