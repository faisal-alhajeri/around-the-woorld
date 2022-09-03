import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import UTCTimer from '../components/UTCTimer';

export default function CountryPage({ countries }) {
    const params = useParams()
    
    const countryCode = params.code
    const country = countries.find((country => country.cca2 === countryCode))

    return (
        <>
        
        <div className='gird'>
            <div className='row'>
                <div className='col-4'>
                    <div className='container country-flag rounded'>
                        <div className='img-container mx-auto px-5 py-4'>
                            <img className='rounded-image' alt='' src={country?.flags.svg} /> 
                            <hr />
                        </div>

                        <div className='container mx-auto  pb-3 px-3'>
                            <div className='country-flag-info p-3 rounded'>
                            <p>
                                Name: {country?.name.common}
                            </p>
                            <p>
                                Ofiicial: {country?.name.official}
                            </p>
                            <p>
                                short: {country?.cca2}
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-8 '>
                    <div className='rounded country-info'>
                        <div className='country-info-general-info rounded p-3'>
                            <h2 className='title'>
                                General Information
                            </h2>
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-start p-3'>
                            <div className='p-1 container'>
                                <h4 className='title'>About
                                    <div className='h-hr title' />

                                </h4>
                                <p>
                                    Region: {country?.subregion}
                                </p>
                                <p>
                                    Population: {country?.population}
                                </p>
                            </div>
                            <div className='v-hr' />
                            <div className='px-3 py-1 container'>
                                <h4 className='title'>Languages
                                    <div className='h-hr title' />

                                </h4>
                                <p>

                                    {
                                    
                                    country
                                    ? Object.values(country?.languages).map(lang => {
                                        return <p> {lang}</p>
                                    })
                                    : ''
                                    }
                                </p>
                            </div>
                            <div className='v-hr' />
                            <div className='px-3 py-1 container'>
                                <h4 className='title'>Time
                                    <div className='h-hr title' />

                                </h4>
                                <p>
                                    {
                                    country
                                    ? Object.values(country?.timezones).map(tzone => {
                                        return <UTCTimer utcString={tzone} />
                                    })
                                    : ''
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
