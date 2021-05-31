import '../sass/main.scss';
import countryItemTpl from '../templates/country-item.hbs';
import API from './fetchCountries.js';
import getRefs from './get-refs.js';

const refs = getRefs();

refs.searchInput.addEventListener('input', onInput);
// refs.searchInput.addEventListener('input', debounce(onInput, 500));

// событие на инпуте
function onInput(event) {
    event.preventDefault();
    const input = event.target;
    const searchQuery = input.value;

    API.fetchCountries(searchQuery)
    .then(data => {renderCountryCard(...data)})
    .catch(onFetchError)
    // .finally(() => input.value = "");
};
 

// рисование интерфейса 
function renderCountryCard(country){
    const markup = countryItemTpl(country);
        
    console.log(country.name);
    refs.cardContainer.innerHTML = markup;
};

// ошибка
function onFetchError(error){
    alert('Make the request more specific');    
};

