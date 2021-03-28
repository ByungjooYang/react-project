import React from 'react';

//컴포넌트 이름은 첫 글자는 대문자여야 한다. 기존의 HTML 마크업과 구분하기 위해.
class TodaysPlan extends React.Component{
  render() {
    return (
      <div className="message-container">
        놀러가자
      </div>
    );
  }
}

export default TodaysPlan;