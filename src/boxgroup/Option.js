/**
 * @file melon/boxgroup/Option
 * @author leon(ludafa@outlook.com)
 */

import React, {Component, PropTypes} from 'react';
import {create} from 'melon-core/classname/cxBuilder';
import Icon from '../Icon';
import CenterRipple from '../ripples/CenterRipple';

const cx = create('BoxGroupOption');

export default class BoxGroupOption extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.refs.ripple && this.refs.ripple.animate();
    }

    getIcon(boxModel, isChecked) {
        return BoxGroupOption.Icons[boxModel][isChecked ? 'checked' : 'unchecked'];
    }

    render() {

        const props = this.props;

        const {
            boxModel,
            checked,
            disabled,
            readOnly
        } = props;


        const className = cx(props).addStates({checked}).build();
        const icon = this.getIcon(boxModel, checked);

        return (
            <label className={className} onClick={disabled || readOnly ? null : this.onClick}>
                <input
                    disabled={disabled}
                    checked={checked}
                    type={props.boxModel}
                    value={props.value}
                    readOnly={readOnly}
                    name={props.name}
                    onChange={readOnly ? null : props.onChange} />
                <Icon icon={icon} />
                {props.label}
                {disabled || readOnly ? null : <CenterRipple ref="ripple" />}
            </label>
        );

    }

}

BoxGroupOption.displayName = 'BoxGroupOption';

BoxGroupOption.propTypes = {
    boxModel: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

BoxGroupOption.Icons = {
    radio: {
        checked: 'radio-button-checked',
        unchecked: 'radio-button-unchecked'
    },
    checkbox: {
        checked: 'check-box',
        unchecked: 'check-box-outline-blank'
    }
};
