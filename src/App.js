import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import CountriesContainer from './components/CountriesContainer';
import Navbar from './components/Navbar';
import useCountries from './hooks/countriesHook';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';



function App() {
  const countries = useCountries()
  

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
