// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Header = ({ baseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__base-amount">{baseAmount} Euro</p>
  </header>
);

// == Props Validation
Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

// == Export
export default Header;
