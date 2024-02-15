import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MenuBtn } from '../components/MenuBtn';
import AboutImg from '../imgs/about-img.jpg';
import { Link } from 'react-router-dom';
import { CakeGallery } from '../components/CakeGallery';
import { ContactInfo } from '../components/ContactInfo';
import './Home.css';

const Home = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isFavouritesVisible, setIsFavouritesVisible] = useState(false);
  const [isCakeGalleryVisible, setIsCakeGalleryVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const aboutControls = useAnimation();
  const favouritesControls = useAnimation();
  const cakeGalleryControls = useAnimation();
  const contactControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const favouritesSection = document.getElementById('favourites-section');
      const cakeGallerySection = document.getElementById('cake-gallery-section');
      const contactSection = document.getElementById('contact-section');

      if (aboutSection && window.scrollY > aboutSection.offsetTop - 740) {
        setIsAboutVisible(true);
      }

      if (favouritesSection && window.scrollY > favouritesSection.offsetTop - 740) {
        setIsFavouritesVisible(true);
      }

      if (cakeGallerySection && window.scrollY > cakeGallerySection.offsetTop - 740) {
        setIsCakeGalleryVisible(true);
      }

      if (contactSection && window.scrollY > contactSection.offsetTop - 740) {
        setIsContactVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAboutVisible) {
      aboutControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      aboutControls.start({ opacity: 0, y: 50 });
    }
  }, [aboutControls, isAboutVisible]);

  useEffect(() => {
    if (isFavouritesVisible) {
      favouritesControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      favouritesControls.start({ opacity: 0, y: 50 });
    }
  }, [favouritesControls, isFavouritesVisible]);

  useEffect(() => {
    if (isCakeGalleryVisible) {
      cakeGalleryControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      cakeGalleryControls.start({ opacity: 0, y: 50 });
    }
  }, [cakeGalleryControls, isCakeGalleryVisible]);

  useEffect(() => {
    if (isContactVisible) {
      contactControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      contactControls.start({ opacity: 0, y: 50 });
    }
  }, [contactControls, isContactVisible]);

  return (
    <div className='home-page'>
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
            <motion.div id='about-section' animate={aboutControls} initial={{ opacity: 0, y: 50 }}>
              <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                <img src={AboutImg} className='img-fluid' alt="about img" />
              </div>
              </motion.div>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <motion.div id='about-section' animate={aboutControls} initial={{ opacity: 0, y: 50 }}>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'> About Us</h2>
              </motion.div>
              <motion.div id='about-section' animate={aboutControls} initial={{ opacity: 0, y: 50 }}>
              <p>Eden Confectionery is a Brand that started as a small personal business. The owner is Ms. Joy Kezia Kisakye, supported by a group of staff, where majority are her family.</p>
              </motion.div>
              <motion.div id='about-section' animate={aboutControls} initial={{ opacity: 0, y: 50 }}>
              <p className='mb-5'>The Confectionery is a family tradition. Their baked goods bring back fond memories. It's like a taste of home! Visually Stunning, amazing flovours. Simply the best!</p>
              </motion.div>
              <motion.div id='about-section' animate={aboutControls} initial={{ opacity: 0, y: 50 }}>
              <Link to='/about'>
                <button type='button' className='btn btn-outline-success btn-lg'>
                  More About Us
                </button>
              </Link>
              </motion.div>
            </div>
          </div>
      </div>

      <div className='bg-dark favourites-section py-5 text-light shadow'>
  <div className='container d-flex flex-column align-items-center'>
    <motion.div id='favourites-section' animate={favouritesControls} initial={{ opacity: 0, y: 50 }}>
      <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
    </motion.div>
    <div className='row mb-5 w-100'>
      <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
        <motion.div animate={favouritesControls} initial={{ opacity: 0, y: 50 }}>
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
        </motion.div>
      </div>
      <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
            <motion.div animate={favouritesControls} initial={{ opacity: 0, y: 50 }}>
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
              </motion.div>
            </div>
    </div>
  </div>
</div>

<motion.div id='cake-gallery-section' animate={cakeGalleryControls} initial={{ opacity: 0, y: 50 }}>
  <CakeGallery />
</motion.div>

<div className='bg-dark text-light py-5 shadow'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
        <motion.div id='contact-section' animate={contactControls} initial={{ opacity: 0, y: 50 }}>
          <ContactInfo />
        </motion.div>
      </div>
      <div className='col-lg-6 d-flex justify-content-center'>
        <motion.div id='contact-section' animate={contactControls} initial={{ opacity: 0, y: 50 }}>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.838883770679!2d32.69882353921313!3d0.36265797975953005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177ddb5d1ef5f169%3A0x95b5291ef4568d46!2sEden%20Confectionery!5e0!3m2!1sen!2sug!4v1625328751602!5m2!1sen!2sug"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0">
          </iframe>
        </motion.div>
      </div>
    </div>
  </div>
</div>
</div>
);
};

export default Home;
