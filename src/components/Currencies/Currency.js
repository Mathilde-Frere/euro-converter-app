// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Currency = ({ text }) => (
  <li className="currency">{text}</li>
);

// == Props Validation
Currency.propTypes = {
  text: PropTypes.string.isRequired,
};

// == Export
export default Currency;
