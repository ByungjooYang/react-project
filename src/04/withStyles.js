import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite/lib/aphroditeInterface';
import { css, withStyles, withStylesPropTypes} from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet};
export default withStyles;

/*
ThemedStyleSheet : react-with styles의 테마 관리자
aphroditeInterface : 서버 출력을 도와주는 아프로디테 라이브러리의 react-with-styles 버전
react-with-styles/src/withStyles' : react-with-style에서 사용하는 함수들이 정의되어 있음

registerTheme : 테마파일을 등록
registerInterface : 아프로디테를 react-with-styles의 테마 관리자로 적용함.
 */