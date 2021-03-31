// 컴포넌트 상태 관리

import React from 'react';

class StateExample extends React.Component{
  constructor(props) {
    super(props);

    //컴포넌트에서 관리하려는 변수 state 초기값을 this.state 에 객체 형태로 정의.
    this.state = {
      loading : true,
      formData: 'no data',
    };

    //콜백 함수 관련 bind 메서드.
    //함수로 넘어갈 this는 반드시 생성자에서 bind 함수로 묶어주어야함.
    this.handleData = this.handleData.bind(this);

    //4초 후에 handleData 함수를 호출
    setTimeout(this.handleData, 4000);
  }

  handleData(){
    const data = 'new data';
    const { formData } = this.state;

    //state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });

    //this.state.loading은 현재 true입니다.
    console.log('loading값', this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false 입니다.
  }

  render() {
    return(
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중 : {String(this.state.loading)}</span>
        <spna>결 과 : {this.state.formData}</spna>
      </div>
    );
  }
}

export default StateExample;

/*
state 사용시 주의점
1. 생성자에서 반드시 초기화 해야함. (하지 않으면 내부 함수에서 state 값에 접근할 수 없다. 빈 값이라도 넣어야함)
2. state 값을 변경할 때는 setState() 함수(상태관리함수)를 반드시 사용해야 한다. setState 사용 후 자동으로 render 함수를 호출. render 호출은 리액트 엔진이 정한다.
3. setState() 함수는 비동기로 처리되며 setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다.
 */
/*

handleData(data){
  this.setState(function(prevState){
    const newState = {
      loading : false,
      formData: data + prevState.form,
    };
    return newState;
  });
}

화살표 함수를 사용. setState 함수의 인자로 함수를 전달하면 이전 state 값을 쉽게 얻을수 있다.
handleData(data){
  this.setState(prevState => ({
    loading : false,
    formData : data + prevState.formData
  }))
}

*/
