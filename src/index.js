import './sass/main.scss';
import countryItemTpl from './templates/country-item.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchInput: document.querySelector('.js-text-input'),
};

refs.searchInput.addEventListener('input', onInput);

function onInput(event) {
    event.preventDefault();
    const input = event.currentTarget;
    const searchQuery = input.value;
    // console.log(searchQuery);

    fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(error => console.log(error))
    .finally(() => input.value = "");
};


// нахождение страны
function fetchCountries(countryAlpha){
    return fetch(`https://restcountries.eu/rest/v2/alpha/${countryAlpha}`)
        .then(response => {
            return response.json();
        });
};

// рисование интерфейса 
function renderCountryCard(country){
    const markup = countryItemTpl(country);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;  
};