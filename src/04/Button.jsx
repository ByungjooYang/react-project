import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from './withStyles';
import PropTpyes from 'prop-types';

class Button extends PureComponent{
    render() {
        const {
            children,
            disabled,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary,
            onPress,
        } = this.props;
        return (
            <button
                {...css(
                    styles.default,
                    xsmall    && styles.xsmall,
                    small     && styles.small,
                    large     && styles.large,
                    xlarge    && styles.xlarge,
                    secondary && styles.secondary,
                    primary   && styles.primary,
                )}
                onClick={onPress}      // 버튼 엘리먼트를 클릭할 경우 onPress() 함수를 호출
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    children  : PropTypes.node.isRequired,
    xsmall    : PropTpyes.bool,
    small     : PropTpyes.bool,
    large     : PropTpyes.bool,
    xlarge    : PropTpyes.bool,
    secondary : PropTpyes.bool,
    primary   : PropTpyes.bool,
    onPress   : PropTypes.func, //3.
};
Button.defaultProps = {
    // 4. 3, 4 onPress 프로퍼티는 함수 타입으로,  기본값으로 빈 실행 함수를 전달하여 프로퍼티가 선언되지 않아도
    // 엘리먼트의 이벤트에서 콜백 함수를 실행할 때 undefined 오류가 발생하는 것을 방지한다.
    onPress: () => {},
    xsmall    : false,
    small     : false,
    large     : false,
    xlarge    : false,
    secondary : false,
    primary   : false,
};

export default withStyles(({color, size, unit}) => ({
    //버튼의 기본 모양을 구성.
    //전체 테두리 두께는 1px 이며 2px 의 둥근 테두리 모양이다. 패딩 크기는 unit * 2 이다.
    default : {
        border : 1,
        borderStyles : 'solid',
        borderColor  : color.default,
        borderRadius : 2,
        color        : color.default,
        fontSize     : size.md,
        padding      : unit * 2,
        cursor       : 'pointer',
    },
    xlarge : {
        fontSize : size.xg,
    },
    large: {
        fontSize : size.lg,
    },
    small: {
        fontSize : size.sm,
        padding  : unit,
    },
    xsmall: {
        fontSize : size.xs,
        padding  : unit, //unit * 1 크기의 패딩으로 조정
    },
    primary: {
        borderColor     : color.primary,
        color           : color.primary,
        backgroundColor : color.primary,
    },
    secondary: {
        borderColor : color.secondary,
        color       : color.secondary
    }
}))(Button);