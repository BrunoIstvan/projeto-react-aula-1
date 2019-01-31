import React from 'react';

const Button = (props) => {
    return (
        <button className={`mdl-button mdl-js-button mdl-button--raised ${props.modifier}`}>
            { props.label }
        </button>
    );
};

// Button.propsType = {
//     label: PropTypes.string.isRequired
// };

export default Button;