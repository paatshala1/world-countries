// import './Country.css'

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
    <article className='  mt-6 grid grid-cols-2 rounded-md bg-indigo-100 p-6 '>
      <div className=' col-span-full'>
        <p className=''>Subregion: {subregion}</p>
        <h1 className=''>{name}</h1>
        <h2 className='text-2xl '>{`Capital: ${capital}`}</h2>
        <div className=' flex items-center'>
          <span className=''>Find it in: </span>
          <div>
            <a
              href={googleMaps}
              target='_blank'
              rel='noreferrer'
              className='ml-2 text-orange-300'
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className=' col-span-2 mt-4 grid grid-cols-2 justify-start gap-1 py-4'>
        <img className=' my-0 mx-auto' src={flagUrl} alt={`Flag of ${name}`} />
        <p className=' text-xl text-indigo-600'>{flagDesc}</p>
      </div>

      <section className=' row-start-3 grid grid-cols-12 gap-2 p-4'>
        <h2 className='col-span-9 mt-6 border-t-4  border-indigo-600 pl-2 pt-2 text-2xl'>
          Section 1
        </h2>
        <div className=' col-span-full col-start-2 grid gap-2'>
          <p className=' col-span-full'>
            Area:{`  ${area}`} km<sup>2</sup>
          </p>
          <div className='grid grid-cols-5'>
            <p>Borders:</p>
            <div className=' col-span-full col-start-2 ml-2 flex flex-wrap gap-2'>
              {typeof borders === 'object'
                ? borders.map(border => (
                    <span key={border}>{` ${border} `}</span>
                  ))
                : borders}
            </div>
          </div>
          <div className='grid grid-cols-12'>
            <p>Timezone(s):</p>
            <ul className=' col-span-full grid grid-cols-12'>
              {timezones.map((zone, index) => (
                <li
                  key={`${zone}_${index}`}
                  className=' col-span-full col-start-2'
                >
                  {zone}
                </li>
              ))}
            </ul>
            <p className=' col-span-full'>International code (coic): {code}</p>
          </div>
        </div>
      </section>

      <section className=' row-start-3 grid grid-cols-12 gap-2 p-4 text-indigo-700'>
        <h2 className='col-span-9 mt-6 border-t-4  border-indigo-600 pl-2 pt-2 text-2xl'>
          Section 2
        </h2>
        <div className=' col-span-full col-start-2 grid gap-2'>
          <p>Population: {population} hab.</p>
          <div className='grid grid-cols-5'>
            <p>{`Lang(s)`}: </p>
            <ul className=' col-span-full col-start-2 flex gap-2'>
              {languages.map(lang => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          {/* <p>Language(s): {languages}</p> */}
          <div className='grid grid-cols-5'>
            <p>Currencies:</p>
            <ul className=' col-span-full grid grid-cols-12'>
              {currencies.map(currency => (
                <li key={currency[0]} className=' col-span-full col-start-2'>
                  <div>
                    <span>{`${currency[1]}(${currency[0]}): `}</span>
                    <span>{`${currency[2]}`}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p>Driving side: {driving}</p>
        </div>
      </section>
    </article>
  )
}
