import React from 'react';
import {storiesOf} from '@storybook/react';

import InputWithStyle from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
    .addWithJSX('기본 설정', () => <InputWithStyle name="name"/> )
    .addWithJSX('label 예제', () => <InputWithStyle name="name" label="이름"/> )
    .addWithJSX('value 예제', () => <InputWithStyle name="name" label="이름" value="두잇"/> )
    .addWithJSX('errorMessage 예제', () => <InputWithStyle name="name" label="이름" errerMessage="이름을 입력해주세요."/> );