import { configure} from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories(){
  const context = require.context('../src/stories', true, /Stroy\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });

  /*require('../src/stories/InputStory');
  // 스토리 파일을 이곳에 추가할 수 있음
  require('../src/stories/NewCounterStory');*/
}

configure(loadStories, module);
