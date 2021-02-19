// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Header = ({ baseAmount, setBaseAmount }) => {
  const handleOnChange = (event) => {
    const parsedValue = Number(event.target.value);
    setBaseAmount(parsedValue);
  };

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">
        <input
          className="header__input"
          type="number"
          min={0}
          value={baseAmount}
          onChange={handleOnChange}
          // onChange={(event) => setBaseAmount(parseFloat(event.target.value, 10))}
        />
        Euro
      </p>
    </header>
  );
};

// == Props Validation
Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

// == Export
export default Header;
