import './App.css';
import React, { Component } from 'react';
/*import TodaysPlan from './03/TodaysPlan'; //파일 이름 확장자는 없어도 된다. 웹팩 코드 검색 확장자의 기능 덕분이다.
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import LifecycleExample from './03/LifecycleExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';*/
import ListExample from './03/ListExample';
import TodoList from './03/TodoList';
import Fragment from './03/Fragment';

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

/*class App extends React.Component {
    render() {
        return (
          <div>
              <div><b>지루할 때 : </b><BooleanComponent bored /></div>
              <div><b>즐거울 때 : </b><BooleanComponent /></div>
          </div>
        )
    }
}*/

/*class App extends React.Component{

  render() {
    return (
      <div>
        <ChildComponent2
          objValue={{ age: 20 }}
          requiredStringValue={"문자"}
        />
      </div>
    );
  }

}*/

/*class App extends React.Component{
  render() {
    return (
      <div>
        <DefaultPropsComponent />
      </div>
    );
  }
}*/

/*class App extends Component {
    render() {
      return(
        <div>
          <ChildProperty>
            <div><span>자식 노드</span></div>
          </ChildProperty>
        </div>

        );
    }
}*/

/*
class App extends Component {
    render() {
      return (
        <div>
          <StateExample/>
        </div>
      )
    }
}
*/

/*class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasDestroy: false };
    }

    componentDidMount() {
      this.setState({ hasDestroy: true});
    }

    render() {
        return (
            <div>
              <div>
                {this.state.hasDestroy ? null : <LifecycleExample/>}
              </div>*/
                /*{<ForceUpdateExample/>}
            </div>
        );
    }
}*/

/*class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {count: 10};
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount(){
    this.setState(({ count }) => ({
      count: count + 10
    }));
  }
  render() {
    return (
      <div>
        <div><Counter count={this.state.count} /></div>
        <div><NewCounter count={this.state.count} /></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}
                */

/*class App extends React.PureComponent{

  render() {
    return (
      <div>
        <ListExample/>
      </div>
    );
  }

}*/

class App extends React.Component{

  render() {
    return (
      <div>
        <Fragment/>
      </div>
    );
  }

}

export default App;

// render 함수는 HTML을 반환한다.

//프로퍼티  : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터.
//state   : 컴포넌트 상태를 저장하고 변경할 수 있는 데이터.
//컨텍스트  : 부모 컴포넌트에서 생성해 모든 자식 컴포넌트에 전달하는 데이터
