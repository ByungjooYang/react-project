// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

//enzyme 설정 함수 configure()를 import
import { configure } from 'enzyme';
//리액트 16.3 생명주기 라이브러리 임포트
import Adapter from 'enzyme-adapter-react-16.3';

import '@testing-library/jest-dom';

//테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가
configure({ adapter : new Adapter() });
