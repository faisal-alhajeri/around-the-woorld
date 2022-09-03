import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BASE_URL = 'https://restcountries.com/v3.1/'


export default function useCountries() {
    const [countries, setCountries] = useState([])
    console.log(BASE_URL);

    useEffect(() => {
        let storageCountries = localStorage.getItem('countries')

        if (storageCountries){
            setCountries(old => JSON.parse(storageCountries))
        } else {
            axios.get(BASE_URL + 'all/')
            .then(res => {
                localStorage.setItem('countries', JSON.stringify(res.data))
                setCountries(res.data)
            })
            .catch(err => console.log(err))
        }


      }, [])
    

    return countries;
}
