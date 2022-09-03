import React, { useMemo, useState } from 'react'
import CountriesContainer from '../components/CountriesContainer'

export default function MainPage({ countries, }) {
const [search, setSearch] = useState('')

let showCountries = useMemo(() => {

    return countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }, [countries, search])


  return (
      <>
      <div className='container text-center flex'>
      <label htmlFor='country-name' >Search The World</label>
      <input id='country-name' onChange={({target}) => setSearch(target.value)} />
  
    </div>
     <CountriesContainer countires={showCountries} />
      
      </>
  )
}
