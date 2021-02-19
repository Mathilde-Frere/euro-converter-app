// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import Currency from './Currency';

import './style.scss';

// == Composant
const Currencies = ({ currencies }) => {
  const currenciesList = currencies.map((currency) => {
    const currencyName = currency.name;
    return <Currency key={currency.name} text={currencyName} />;
  });

  // Version condensée
  // const currenciesList = currencies.map((currency) => <Currency key={currency.name} text={currency.name} />);

  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        {currenciesList}
      </ul>
    </div>
  );
};

// == Props Validation
Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Currencies;
