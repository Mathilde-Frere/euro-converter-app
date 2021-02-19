// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Toggler = ({ onClickButton, isOpen }) => {
  const handleClick = () => {
    onClickButton();
  };

  const classnames = isOpen ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classnames}
    >
      =
    </button>
  );
};

// <button type="button" onClick={onClickButton}>Toggle</button>;

// == Props Validation
Toggler.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

// == Export
export default Toggler;
