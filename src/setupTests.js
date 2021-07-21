// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

//enzyme 설정 함수 configure()를 import
import { configure } from 'enzyme';
//리액트 16.3 생명주기 라이브러리 임포트
import Adapter from 'enzyme-adapter-react-16.3';

/*import '@testing-library/jest-dom';*/

//테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가
configure({ adapter : new Adapter() });

afterEach(() => {
    console.error.mockClear(); // 1
});

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation((e) => { // 2
        throw new Error(e); // 3
    });
});

/*
1. console.error() 함수 객체에 spyOn() 함수로 추가된 가상의 감지 코드를 제거

2. 감시 함수 spyOn()을 사용하여 console 객체의 error() 함수를 실제 기능 대신 mockImplementation에 정의된 함수가 실행되도록 한다.

3. console.error() 함수를 실행할 때 전달된 인자로 오류를 발생시키도록 한다.
 */