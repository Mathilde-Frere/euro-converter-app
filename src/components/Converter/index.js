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
  // == State
  // Définition du state du composant Converter
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  };

  // == Lifecycles
  componentDidMount() {
    this.changePageTitleEffect();
  }

  componentDidUpdate(prevProps, prevState) {
    // Récupération de la valeur de currency du state courant
    const { currency } = this.state;
    // Comparaison avec l'ancien state
    if (currency !== prevState.currency) {
      this.changePageTitleEffect();
    }
  }

  // == Méthodes modifiant le state

  // Fonction chargée de faire varier la valeur de la propriété open du state
  toggle = () => {
    // console.log('je veux faire varier la valeur de open');
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  // Fonction chargée de convertir 1 euro dans une autre devise
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
    // console.log('je veux modifier la valeur de search', value);
    this.setState({
      search: value,
    });
  }

  // Fonction chargée de filtrer les devises en fonction de la recherche
  getCurrencies = () => {
    // par défaut => retourne la liste complète des devises (pas de filtre)
    let filteredCurrencies = currenciesData;

    const { search } = this.state;
    // si search est truthy => filtrage des devises
    if (search) {
      filteredCurrencies = currenciesData.filter((currency) => {
        // passage des noms des currencies en minuscule pour comparer ce qui est comparable
        const loweredCurrency = currency.name.toLowerCase();
        const loweredSearch = search.toLowerCase();

        return loweredCurrency.includes(loweredSearch);
      });
    }

    return filteredCurrencies;
  }

  // Fonction chargée de modifier la valeur du montant de base qui sera converti (baseAmount)
  setBaseAmount = (value) => {
    this.setState({
      baseAmount: value,
    });
  }

  // Fonction chargée de modifier le titre de la page en fonction de la devise choisie
  changePageTitleEffect = () => {
    const { currency } = this.state;
    document.title = `Euro to ${currency}`;
  }

  // == Render
  render() {
    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;
    // console.log('this.state', this.state);

    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getCurrencies();

    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          setBaseAmount={this.setBaseAmount}
        />
        <Toggler onClickButton={this.toggle} isOpen={open} />
        {open && (
          <Currencies
            currencies={filteredCurrencies}
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
