// == Import npm
import React from 'react';

// == Imports
import Currency from './Currency';

import './style.scss';

// == Composant
const Currencies = () => (
  <div className="currencies">
    <p className="currencies__title">Currencies</p>
    <ul className="currencies__list">
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </ul>
  </div>
);

// == Props Validation

// == Export
export default Currencies;
