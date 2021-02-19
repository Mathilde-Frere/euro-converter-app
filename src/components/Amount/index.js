// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Amount = ({ value, currency }) => (
  <div className="amount">
    <p className="amount__value">{value}</p>
    <p className="amount__currency">{currency}</p>
  </div>
);

// == Props Validation
Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

// == Export
export default Amount;
