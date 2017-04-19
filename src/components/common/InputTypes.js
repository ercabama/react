import React, {PropTypes} from 'react';
import {ControlLabel, Button, Label, Row, Col} from 'react-bootstrap';

const InputTypes = ({type, name, label, onChange, className, errors, value}) => (
    <ControlLabel>
        {type === 'button' && <Col sm={12}><Button
            onClick={onChange} className={`btn ${className || 'btn-info'}`} name={name}
        >{label}
        </Button></Col>}
        {type !== 'button' && <Row>
            <Col sm={2}>{label}:&nbsp;</Col>
            <Col sm={10}>
                <input
                    type={type} name={name} onChange={onChange} value={value}
                    className={className || 'text-info'} placeholder={label}
                />
            </Col>
        </Row>}
        {errors && <Label>
            {errors}
        </Label>}
    </ControlLabel>
);

InputTypes.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    errors: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

InputTypes.defaultProps = {
    type: 'string',
    errors: null,
    className: null,
    onChange: null,
    value: null
};

export default InputTypes;
