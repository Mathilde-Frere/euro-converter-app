// == Import npm
import React from 'react';

// == Imports
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import currenciesData from 'src/data/currenciesData';

import './style.scss';

// == Composant
class Converter extends React.Component {
  constructor(props) {
    super(props);

    // Définition du state du composant Converter
    this.state = {
      open: false,
    };

    // Liaison du contexte de la class (this) à celui de la méthode de class "toggle" via le bind
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('je veux faire varier la valeur de open');
    this.setState({
      open: !this.state.open,
    });
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <button type="button" onClick={this.toggle}>Toggle</button>
        {this.state.open && (
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
