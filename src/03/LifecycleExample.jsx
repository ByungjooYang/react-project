import React from 'react';

class LifecycleExample extends React.Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps 호출');
        return {};
    }

    constructor(props) {
        super(props);

        this.state = {};
        console.log('constructor 호출');
    }

    componentDidMount() {
        console.log('componentDidMount 호출');
        this.setState({update: true});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 호출');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount 호출');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate 호출');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('shouldComponentUpdate 호출');
      return false;
    }

  render() {
    console.log('render 호출');
    return null;
  }

}

export default LifecycleExample;

/*
1. constructor(props);
 : 자바 처럼 맨 처음 생성될 때 한 번만 호출되며 상태(state 또는 객체 변수)를 선언할 때 사용된다.
  생성자를 정의할 때는 항상 super() 함수를 가장 위에 호출해야 한다. super 함수는 프로퍼티와 생명 주기 상태 등을 초기화 하는 중요한 과정을 포함하고 있기 때문이다.

2. render()
 : 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수이다.
  render 함수가 반환하는 jsx 를 화면에 그려준다.

3. static getDerivedStateFromProps(props, state) 함수
 : 적적 함수로서 함수 안에서 this.props나 this.state 와 같은 방법으로 프로퍼티나 state 값에 접근할 수 없다. 만약 각 값에 접근해야하는 경우
  반드시 인자로 전달된 props, state 를 이용해야한다. 이때 props는 상위 컴포넌트에서 전달된 값이며, state 는 현재 컴포넌트 state 값이다.
  이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로 state 값을 연동할 때 주로 사용되며, 반환값으로 state를 변경한다.

4. componenetDidMount() 함수
 : render 함ㅅ가 jsx를 화면에 그린 이후에 호출되는 함수. 만약 컴포넌트가 화면에 모두 표현된 이후 해야하는 작업들은 연기서 하면 된다.

5. shouldComponentUpdate(nextProps, nextState, nextContext)
 : 프러퍼티를 변경하거나 setState() 함수를 호출해 state 값을 변경하면 화면을 새로 출력하는지 판단(검즘)하는 함수.
 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 많은 영향을 준다. forceUpdate 함수를 호출해 화면을 출력하면 이 함수는 호출되지 않음.

6. getSnapshotBeforeUpdate(prevProps, prevState)
 : 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후에 호출되는 함수. 이 함수는 컴포넌트가 화면에 실제로 출력되기 전에 호출되므로
  화면에 출력될 엘리먼트의 크기 또는 스크롤 위치 등의 DOM 정도에 접근할 때 사용된다.

7. componentDidUpdate()
 : 컴포넌트가 실제 화면에 출력된 이후에 호출되는 함수. 부모 컴포넌트로부터 전달된 이전 프로퍼티와 이전 STATE 값과 함께 getSnapshotBeforeUpdate 함수에서 반환된 값을 인자로 전달 받는다.
  이 값들을 이용해 스크롤 위치를 옮기거나 커서를 이동시키는 등의 dom 정보를 변경할 때 사용한다.

8. componentWillUnmount()
 : 컴포넌트가 소멸되기 직전에 호출되는 함수. 보통 컴포넌트에서 감시하는 작업들을 해제할 때 필요한 함수이다.
  예를들어 컴포넌트에 setInterval 함수가 사용되었다면 이 함수에서 setInterval 함수를 clearInterval() 함수로 해제 하여야 하낟.
  이러한 해제 작업이 생략되면 메모리 누수 현상이 발생하여 웹 브라우저의 작동이 멈추기도 한다.

  constructor -> getDerivedStateFromProps -> render -> componenetDidMount 순으로 호출.
 */