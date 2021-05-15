import React, { PureComponent } from 'react';
import PropTpyes from 'prop-types';
import { withStyles, css } from './withStyles';

class Text extends PureComponent{
    render() {
        const { children, styles } = this.props;
        return (
            //자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력한다.
            <span {...css(styles.default)}>
                {children}
            </span>
        );
    }
}

Text.propTypes = {
    children : PropTpyes.node.isRequired,
};

//export default withStyles()(Text);

export default withStyles(({color, size}) => ({
    default: {
        color    : color.default,
        fontSize : size.md,
    },
}))(Text);