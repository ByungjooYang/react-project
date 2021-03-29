import React from 'react';
import PropTypes from 'prop-types'; //prop-types : 라이브러리. 특수 변수 사용해 자료형을 정의함.

class PropsComponent extends React.Component {
    render() {
      return (
        <div className="message-container">
          {this.props.name}
        </div>
      )
    }
}

//자료형 선언 예제
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;