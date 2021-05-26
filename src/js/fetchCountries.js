// нахождение страны
const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(countryAlpha){
    return fetch(`${BASE_URL}/${countryAlpha}`)
       .then(response => {
            return response.json();
        });
};

export default{ fetchCountries };