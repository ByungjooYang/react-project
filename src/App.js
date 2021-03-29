import './App.css';
import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent'; //파일 이름 확장자는 없어도 된다. 웹팩 코드 검색 확장자의 기능 덕분이다.

/*class App extends React.Component {
    render() {
        const array = [1, 2, 3];
        const obj   = {name: '제목', age: 30};
        const node  = <h1>노드</h1>
        const func = () => {console.log('메시지');};
        return (
            <div className="body">
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={array}
                    objValue={obj}
                    nodeValue={node}
                    funcValue={func}
                />
            </div>
        );
    }
}*/

/*class MyComponent extends React.Component {
    render() {
        const name = this.props.name;
        return <span>{name}</span>;
    }
}*/

class App extends React.Component {
    render() {
        return (
          <div>
              <div><b>지루할 때 : </b><BooleanComponent bored /></div>
              <div><b>즐거울 때 : </b><BooleanComponent /></div>
          </div>
        )
    }
}

export default App;

// render 함수는 HTML을 반환한다.

//프로퍼티  : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터.
//state   : 컴포넌트 상태를 저장하고 변경할 수 있는 데이터.
//컨텍스트  : 부모 컴포넌트에서 생성해 모든 자식 컴포넌트에 전달하는 데이터
