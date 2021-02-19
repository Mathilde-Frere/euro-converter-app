// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Currency = ({ text, onClickCurrency }) => (
  <li className="currency" onClick={() => onClickCurrency(text)}>{text}</li>
);

// == Props Validation
Currency.propTypes = {
  text: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};

// == Export
export default Currency;

// version déeloppée
/*
const Currency = ({ text, onClickCurrency }) => {
  const handleClick = () => {
    onClickCurrency(text);
  };
  return (
    <li
      className="currency"
      onClick={handleClick}
    >
      {text}
    </li>
  );
};
*/
