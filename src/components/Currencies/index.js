// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import Currency from './Currency';

import './style.scss';

// == Composant
const Currencies = ({
  currencies,
  setCurrency,
  inputValue,
  setSearchValue,
}) => {
  const currenciesList = currencies.map((currency) => {
    const currencyName = currency.name;
    return (
      <Currency
        key={currency.name}
        text={currencyName}
        onClickCurrency={setCurrency}
      />
    );
  });

  // Version condensée
  // const currenciesList = currencies.map((currency) => <Currency key={currency.name} text={currency.name} />);

  return (
    <div className="currencies">
      <input
        className="currencies__input"
        type="text"
        placeholder="Rechercher une devise"
        value={inputValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
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
  setCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

// == Export
export default Currencies;
