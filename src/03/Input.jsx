import React, { PureComponent } from 'react';
import PropTpes from 'prop-types';

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { name, onChange } = this.props;
        if (onChange) {
            onChange(name, e.target.value);
        }
    }

}