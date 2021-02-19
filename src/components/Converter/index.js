// == Import npm
import React from 'react';

// == Imports
import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesData from 'src/data/currenciesData';

import './style.scss';

// == Composant
class Converter extends React.Component {
  // Définition du state du composant Converter
  state = {
    open: false,
  };

  toggle = () => {
    // console.log('je veux faire varier la valeur de open');
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    console.log('this.state', this.state);

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggler onClick={this.toggle} />
        {open && (
          <Currencies currencies={currenciesData} />
        )}
        <Amount
          value={1.09}
          currency="United State Dollar"
        />
      </div>
    );
  }
}

// == Props Validation

// == Export
export default Converter;
