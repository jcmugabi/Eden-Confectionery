import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css'
import AboutImg from '../imgs/about-img.jpg'
import { Form, Link } from 'react-router-dom';
import {CakeGallery} from '../components/CakeGallery';
import {ContactInfo} from '../components/ContactInfo';
// import ContactImage from '../imgs/contact-img.jpg';

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
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
              <img src={AboutImg} className='img-fluid' alt="about img" />
            </div>
          </div>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'> About Us</h2>
              <p>Eden Confectionery is a Brand that started as a small personal business. The owner is Ms. Joy Kezia Kisakye, supported by a group of staff, where majority are her family.</p>
              <p className='mb-5'>The Confectionery is a family tradition. Their baked goods bring back fond memories. It's like a taste of home! Visually Stunning, amazing flovours. Simply the best!</p>
              <Link to='/about'>
              <button type='button' className='btn btn-outline-success btn-lg'>
                More About Us
              </button>
              </Link>
          </div>
        </div>
      </div>

      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Weddings</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'> english Breakfast</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 80,000</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spicy Beef</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 120,000</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 100,000</p>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Birthdays</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'> english Breakfast</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 80,000</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spicy Beef</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 120,000</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
                  <p fs-3 mx-2 text-success fw-bold>UGX 100,000</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <CakeGallery/>

      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column align-items-center justtify-content-center mb-5 mb-lg-0'>
              <ContactInfo />
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.838883770679!2d32.69882353921313!3d0.36265797975953005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177ddb5d1ef5f169%3A0x95b5291ef4568d46!2sEden%20Confectionery!5e0!3m2!1sen!2sug!4v1625328751602!5m2!1sen!2sug"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0">
              </iframe>
           </div>

            {/* <div className='col-lg-6 d-flex justify-content-center'>
              <img src={ContactImage} className='img-fluid w-50' alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
