import React from 'react';

class TodoList extends React.PureComponent{

  render() {
    const todoList = [
      { taskName : '빨래하기', finished : false},
      { taskName : '공부하기', finished : true},
    ];
    return (
      <div>
        {todoList.map((todo) => <div key = {todo.taskName}>{todo.taskName}</div>)}
      </div>
    );
  }
}

export default TodoList;

/*
PureComponent
 : Component 클래스를 상속받은 클래스, shouldComponentUpdate 함수를 얕은 비교를 하도록 재정의 햇다.
 얕은 비교를 통해 데이터가 변경된 경우에만 render 함수를 호출한다. Component 클래스로 만들어진 component는
 항상 render 함수를 호출한다.

 PureComponent는 불변 속성으로 리액트 앱의 성능을 높인다. 앱의 성능을 높이기 위해서 사용함.
 예를 들어 에어비엔비는 1000개가 넘는 숙소 정보를 화면에 출력하는데 한곳의 숙소 예약이 가득 찬경우 1개의 정보만 바뀔수 있도록 하는데
 이런 경우에 불변 변수를 활용해 숙소 정보가 바뀔때 마다 새 배열을 할당하는 방식으로 비교 속도를 최적화 할 수 있따.
 */