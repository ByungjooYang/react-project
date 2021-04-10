import React from 'react';

class Fragment extends React.Component{

  render() {
    /*return (
      <React.Fragment>
        1개<input type="radio" name="option1" value="1" label="1개"/><br/>
        2개<input type="radio" name="option2" value="2" label="2개"/><br/>
        3개<input type="radio" name="option3" value="3" label="3개"/><br/>
      </React.Fragment>
      <>
        1개<input type="radio" name="option1" value="1" label="1개"/><br/>
        2개<input type="radio" name="option2" value="2" label="2개"/><br/>
        3개<input type="radio" name="option3" value="3" label="3개"/><br/>
      </>

    );*/

    return [1, 2, 3].map((num) => (
      <input type="radio" name="option1" key={`${num}`} value={num} label={`${num}개`}/>
    ))
  }

}

export default Fragment;

/*
Fragement는 여러 노드를 반환할 때 사용한다. 이 컴포넌느트는 HTML로 반환되지 않음.
원래 여러개를 보내줄 때 의미없는 상위 노드를 추가해야하는데 (render는 트리구조의 노드를 반환해야하기 때문)
이를 개선한 것이 fragment 이다
<>로도 사용 가능
혹은 없이도 사용 가능.
 */