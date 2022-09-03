import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CountriesContainer({countires}) {

  return (
      <>
      <div className='countries-container my-5 grid '>
          <div className='row align-items-center'>
          {
            countires.map(country => {
            return(
                <div className='col-4 text-center my-4' key={country.name.common}>
                    <span className='p-2 hover-bigger'>
                        <NavLink to={`/country/${country.cca2}`} className='link'>
                            {country.name.common} <img className='flag-sm' alt='' src={country.flags.svg} /> 
                        </NavLink>
                    </span>
                </div>
            )
            })
        }
          </div>
      </div>

      </>

  )
}
