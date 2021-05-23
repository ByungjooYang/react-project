import React, { PureComponent } from 'react';
import PropTpyes from 'prop-types';
import { withStyles, css } from './withStyles'; //css 함수를 임포트해 엘리먼트에 스타일을 적용

class Text extends PureComponent{
    render() {
        const {
            children,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary,
        } = this.props;
        return (
            //자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력한다.
            //css 함수로 엘리먼트에 default 키에 정의된 스타일을 적용. css 함수는 엘리먼트 속성값을
            //객체형으로 반환하므로 전개 연산자를 사용해 span 엘리먼트에 스타일을 적용
            <span {...css(
                styles.default,
                xsmall    && styles.xsmall,
                small     && styles.small,
                large     && styles.large,
                xlarge    && styles.xlarge,
                secondary && styles.secondary,
                primary   && styles.primary,
            )}>
                {children}
            </span>
        );
    }
}

Text.propTypes = {
    children  : PropTpyes.node.isRequired,
    xsmall    : PropTpyes.bool,
    small     : PropTpyes.bool,
    large     : PropTpyes.bool,
    xlarge    : PropTpyes.bool,
    secondary : PropTpyes.bool,
    primary   : PropTpyes.bool,
};

//export default withStyles()(Text);
//스타일 생성 함수를 호추랗여 테마 파일에 등록된 값 { color, size }를 withStyles() 함수에 전달
export default withStyles(({color, size}) => ({
    default: {
        color    : color.default,
        fontSize : size.md, // 스타일 속성을 스네이크 표기법 (font-size)이 아닌 낙타 표기법(fontSize)으로 사용
    },
    xlarge: {
        fontSize : size.xg
    },
    large: {
        fontSize : size.lg
    },
    small: {
        fontSize : size.sm
    },
    xsmall: {
        fontSize : size.xs
    },
    primary: {
        color : color.primary
    },
    secondary: {
        color : color.secondary
    }
}))(Text);