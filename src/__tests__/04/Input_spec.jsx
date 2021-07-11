import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
   it('renders without crashing', () => {
      expect(() => {
          shallow(<Input />);
      }).not.toThrow();
   });
});

/*
1. shallow()
 : 컴포넌트의 자식 컴포넌트를 생성하거나 출력하는 과정을 건너뛰고 현재 컴포넌트의 생명주기만을 테스트한다.

2. toThrow()
 : 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고, 오류가 발생하지 않으면 테스트를 통과한다.

 */