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
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
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

  // Fonction chargée de changer la valeur de la propriété currency du state
  setCurrency = (currency) => {
    // console.log('je veux changer la valeur de currency', currency);
    this.setState({
      currency,
    });
  }

  // Fonction chargée de modifier la valeur de la propriété search du state
  setSearch = (value) => {
    console.log('je veux modifier la valeur de search', value);
    this.setState({
      search: value,
    });
  }

  render() {
    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;
    // console.log('this.state', this.state);

    const convertedAmount = this.makeConversion();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler onClickButton={this.toggle} isOpen={open} />
        {open && (
          <Currencies
            currencies={currenciesData}
            setCurrency={this.setCurrency}
            inputValue={search}
            setSearchValue={this.setSearch}
          />
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
