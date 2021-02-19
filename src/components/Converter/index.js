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
    baseAmount: 1,
    currency: 'United States Dollar',
  };

  toggle = () => {
    // console.log('je veux faire varier la valeur de open');
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // Recherche du taux de change
    const foundCurrency = currenciesData.find((element) => element.name === currency);

    // Réalisation de la convertion qui sera renvoyée
    const convertedAmount = baseAmount * foundCurrency.rate;

    // Arrondi au centième
    return Math.round(convertedAmount * 100) / 100;
  }

  render() {
    const { open, baseAmount, currency } = this.state;
    // console.log('this.state', this.state);

    const convertedAmount = this.makeConversion();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler onClickButton={this.toggle} isOpen={open} />
        {open && (
          <Currencies currencies={currenciesData} />
        )}
        <Amount
          value={convertedAmount}
          currency={currency}
        />
      </div>
    );
  }
}

// == Props Validation

// == Export
export default Converter;
