import '../sass/main.scss';
import countryItemTpl from '../templates/country-item.hbs';
import API from './fetchCountries.js';
import getRefs from './get-refs.js';

const refs = getRefs();

refs.searchInput.addEventListener('input', onInput);

function onInput(event) {
    event.preventDefault();
    const input = event.currentTarget;
    const searchQuery = input.value;
    // console.log(searchQuery);

    API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => input.value = "");
};


// рисование интерфейса 
function renderCountryCard(country){
    const markup = countryItemTpl(country);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;  
};

// ошибка
function onFetchError(error){
    alert('Такой страны нет');    
};

// fetch('https://restcountries.eu/rest/v2/name/col')
//     .then(r => r.json())
//     .then(console.log);

// fetch('https://restcountries.eu/rest/v2/name/col?fullText=false')
//         .then(r => r.json())
//         .then(console.log);

// fetch('https://pixabay.com/api')
// .then(r => r.json())
// .then(console.log);