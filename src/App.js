import './App.css';
import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan'; //파일 이름 확장자는 없어도 된다. 웹팩 코드 검색 확장자의 기능 덕분이다.

class App extends React.Component {
    render() {
        return (
            <div className="body">

            </div>
        );
    }
}


export default App;

// render 함수는 HTML을 반환한다.

//프로퍼티  : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터.
//state   : 컴포넌트 상태를 저장하고 변경할 수 있는 데이터.
//컨텍스트  : 부모 컴포넌트에서 생성해 모든 자식 컴포넌트에 전달하는 데이터
