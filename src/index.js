import './sass/main.scss';
// import menuItemTpl from './templates/menu-item.hbs';
// import menuItems from './menu.json';

fetch('https://restcountries.eu/rest/v2/name/usa')
.then(response => {
    return response.json();
})
.then(country => {
    console.log(country);
})
.catch(error => {
    console.log(error);
});
 
// https://restcountries.eu/rest/v2/name/{name}
// https://restcountries.eu/rest/v2/name/eesti
// https://restcountries.eu/rest/v2/name/united

// name
// capital: "Berlin"
// population
// languages
// flag