import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../components/Slider';
import './Cakes.css';

const ButterCream = [
  { img: require('../imgs/gallery/butter-cream/bc-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/butter-cream/bc-2.jpg'), price: 'UGX 60,000' },
  { img: require('../imgs/gallery/butter-cream/bc-4.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-5.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-6.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-7.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-8.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-9.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-10.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-11.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-12.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-13.jpg'), price: 'UGX 70,000' },
  // Add more images and prices here
];

const Chocolate = [
  { img: require('../imgs/gallery/chocolate/choc-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-2.jpg'), price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-3.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-4.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-5.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-6.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-7.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-8.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-9.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-10.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-11.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-12.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-13.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-14.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-15.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-16.jpg'), price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-17.jpg'), price: 'UGX 70,000' },
  // Add more images and prices here
];

const Cakes = () => {
  // Calculate number of slides for ButterCream section
  const numSlidesButterCream = Math.ceil(ButterCream.length / 3);

  // Calculate number of slides for Chocolate section
  const numSlidesChocolate = Math.ceil(Chocolate.length / 3);

  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Cakes</h1>
        </div>
      </header>

      <div className='cake-carousel my-5'>
        <Container>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>ButterCream Cakes</h2>
          <Slider imagesAndPrices={ButterCream} numSlides={numSlidesButterCream} />
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Chocolate Cakes</h2>
          <Slider imagesAndPrices={Chocolate} numSlides={numSlidesChocolate} reverseAnimation={true} />
        </Container>
      </div>
    </div>
  );
};

export default Cakes;
