import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);

    //state 정의
    this.loading = true;
    this.formData = 'no data';
    //이후 콜백 함수를 다룰 때 bind를 선언하는 부분에 대해 다룬다.
    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';

    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    )
  }
}

export default ForceUpdateExample;

/*
꼭 setState()로 state를 관리할 필요는 없다. 이를 사용하는 이유는 리액트 엔진이 state 의 변경과 화면 동기화 과정을 처리해야하기 때문이다.
출력 검증 작업 없이 함수가 호출될 때마다 새롭게 화면을 출력하고자 한다면
클래스 인스턴스 변수와 화면을 강제로 출력해주는 forceUpdate 함수를 사용하면 된다.
 */