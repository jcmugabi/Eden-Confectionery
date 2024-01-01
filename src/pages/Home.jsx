import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css'

const Home = () => {
  return (
    <div className='home-page'>
        <br />
        <br />
        <header className='h-300 min-vh-100 d-flex align-items-center text-light shadow'>
          <div className='container'>
            <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
              <h2 className='ab-0 text-black fw-bold'>Welcome to </h2>
              <h1 className='ab-5 text-black fw-bold text-center text-sm-start'>Eden Confectinery</h1>
              <br />
              <MenuBtn />
            </div>
          </div>
        </header>
    </div>
  )
}

export default Home;
