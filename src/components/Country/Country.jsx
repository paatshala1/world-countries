import './Country.css'

export default function Country({ country }) {
  const { area, population } = country
  const name = country.name.official
  const languages = Object.values(country.languages) // Arr
  const { alt: flagDesc, png: flagUrl } = country.flags
  const driving = country.driving
  const googleMaps = country.maps.googleMaps.toString()
  const subregion = country.subregion
  const timezones = country.timezones

  let currencyObject
  let currencies
  if (country.currencies !== undefined) {
    currencyObject = Object.entries(country.currencies)
    currencies = currencyObject.map(element => {
      return [element[0], element[1].name, element[1].symbol]
    })
  } else {
    currencies = [['---', 'Not Available', '---']]
  }

  let capital
  if (country.capital !== undefined) {
    capital = country.capital[0]
  } else {
    capital = 'Not Available'
  }

  let code
  if (country.code !== undefined) {
    code = country.code
  } else {
    code = 'Not Available'
  }

  let borders
  if (country.borders !== undefined) {
    borders = country.borders
  } else {
    borders = 'Not Available'
  }

  // --------------------------------------RETURN------------------------------------

  return (
    <article className='result-detail'>
      <div className='result-detail__header'>
        <p>Subregion: {subregion}</p>
        <h1>{name}</h1>
        <h2>{`Capital: ${capital}`}</h2>
        <div>
          <span>Find it in: </span>
          <a href={googleMaps} target='_blank' rel='noreferrer'>
            Google Maps
          </a>
        </div>
        <hr />
      </div>

      <section className='result-flag'>
        <img
          className='result-flag__image'
          src={flagUrl}
          alt={`Flag of ${name}`}
        />
        <p>{flagDesc}</p>
      </section>

      <section>
        <h4>Section 1</h4>
        <p>
          Area: {area} km<sup>2</sup>
        </p>
        <div>
          <p>Borders:</p>
          {typeof borders === 'object'
            ? borders.map(border => <span key={border}>{` ${border} `}</span>)
            : borders}
        </div>
        <div>
          <p>Timezone(s)</p>
          <ul>
            {timezones.map((zone, index) => (
              <li key={`${zone}_${index}`}>{zone}</li>
            ))}
          </ul>
          <p>International code (coic): {code}</p>
        </div>
      </section>

      <section>
        <h4>Section 2</h4>
        <p>Population: {population} hab.</p>
        <p>Languages</p>
        <ul>
          {languages.map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        {/* <p>Language(s): {languages}</p> */}
        <p>Currencies</p>
        <ul>
          {currencies.map(currency => (
            <li key={currency[0]}>
              <div>
                <span>{`${currency[1]}: `}</span>
                <span>{`${currency[0]}, `}</span>
                <span>{`${currency[2]}.`}</span>
              </div>
            </li>
          ))}
        </ul>
        <p>Driving side: {driving}</p>
      </section>
    </article>
  )
}
