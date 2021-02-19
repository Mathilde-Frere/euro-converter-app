// == Import npm
import React from 'react';

// == Imports
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './style.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies />
    <Amount
      value={1.09}
      currency="United State Dollar"
    />
  </div>
);

// == Props Validation

// == Export
export default Converter;
