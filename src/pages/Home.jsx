import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
        <br />
        <br />
        <header className='h-300 min-vh-100 d-flex align-items-center text-light shadow'>
          <div className='container'>
            <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
              <h2 className='ab-0 text-white fw-bold'>Welcome to </h2>
              <h1 className='ab-5 text-white fw-bold text-center text-sm-start'>Eden Confectinery</h1>
              <br />
              <MenuBtn />
            </div>
          </div>
        </header>

        <div className='container my-5'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <div></div>
          </div>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'> About Us</h2>
          </div>
        </div>
    </div>
  )
}

export default Home;
