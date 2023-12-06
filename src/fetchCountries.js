const baseUrl = 'https://restcountries.com/v3.1/name/';

function fetchCountries(countryName) {
  return fetch(
    `${baseUrl}${countryName}/?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountries };
