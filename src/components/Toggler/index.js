// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Toggler = ({ onClickButton }) => <button type="button" onClick={onClickButton}>Toggle</button>;

// == Props Validation
Toggler.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

// == Export
export default Toggler;
