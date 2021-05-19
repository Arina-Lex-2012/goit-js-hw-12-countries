import './sass/main.scss';
import countryItemTpl from './templates/country-item.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://restcountries.eu/rest/v2/alpha/col')
.then(response => {
    return response.json();
    
})
.then(country => {
    console.log(country);
    const markup = countryItemTpl(country);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
})
.catch(error => {
    console.log(error);
});

function renderCountryCard(){

};