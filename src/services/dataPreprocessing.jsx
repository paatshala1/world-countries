function extractData(data) {
  const requestedCountries = data.map(country => ({
    area: country.area,
    borders: country.borders,
    capital: country.capital,
    code: country.cioc,
    currencies: country.currencies,
    driving: country.car.side,
    flags: country.flags,
    languages: country.languages,
    maps: country.maps,
    name: country.name,
    population: country.population,
    subregion: country.subregion,
    timezones: country.timezones,
  }))
  return requestedCountries
}

function sortCountries(countries) {
  countries.sort(function (a, b) {
    if (a.name.common < b.name.common) {
      return -1
    }
    if (a.name.common > b.name.common) {
      return 1
    }
    return 0
  })
}

export { sortCountries, extractData }
