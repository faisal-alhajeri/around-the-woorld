import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import CountriesContainer from './components/CountriesContainer';
import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';


const BASE_URL = 'https://restcountries.com/v3.1/'

function App() {
  const [countries, setCountries] = useState([])
  

  useEffect(() => {
    axios.get(BASE_URL + 'all/')
    .then(res => setCountries(res.data))
  }, [])




  return (
    <>
    <div className='navbar'>
      <Navbar />
    </div>

    <div className='background'>
      <div className='main-container container'>
      <Routes>
        <Route path='/' element={<MainPage countries={countries}/>} />
        <Route path='/country/:code' element={<CountryPage countries={countries}/>} />

      </Routes>
      </div>
    </div>


    </>
  );
}

export default App;
