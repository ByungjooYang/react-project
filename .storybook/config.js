import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories(){
  //require.context() 함수로 src/stories 폴더의 스토리 목록을 가져온다.
  const context = require.context('../src/stories', true, /Story\.jsx$/);

  // context 함수는 require 함수와 동일한 기능을 한다. 가변경로를 사용할때 사용한다.
  //interopRequireDefault()는 context 함수로 임포트한 파일 중 default 항목을 임포트 한다.
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });

 /* require('../src/stories/InputStory');
  // 스토리 파일을 이곳에 추가할 수 있음
  require('../src/stories/NewCounterStory');*/
}

setAddon(JSXAddon);
configure(loadStories, module);
