import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const buttons = ({path, classType, label}) => (
    <Link to={path}>
        <span className={`fa ${classType}`}/> {label}
    </Link>
);

buttons.propTypes = {
    path: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default buttons;
