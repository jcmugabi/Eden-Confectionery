import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Slider from '../components/Slider';
import RedVelvetImg from '../imgs/redvelvet-cake.jpg';
import LemonImg from '../imgs/lemon-cake.jpg';
import CaramelImg from '../imgs/caramel-cake.jpg';
import ChocolateImg from '../imgs/chocolate-cake.webp';
import CoconutImg from '../imgs/coconut-cake.jpg';
import './Cakes.css';

const imagesAndPrices = [
  { img: RedVelvetImg, price: 'UGX 50,000' },
  { img: LemonImg, price: 'UGX 60,000' },
  { img: CaramelImg, price: 'UGX 70,000' },
  { img: ChocolateImg, price: 'UGX 80,000' },
  { img: CoconutImg, price: 'UGX 90,000' },
  { img: RedVelvetImg, price: 'UGX 50,000' },
  { img: LemonImg, price: 'UGX 60,000' },
  { img: CaramelImg, price: 'UGX 70,000' },
  { img: ChocolateImg, price: 'UGX 80,000' },
  // Add more images and prices here
];

const ButterCream = [
  { img: require('../imgs/gallery/butter-cream/bc-1.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/butter-cream/bc-2.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/butter-cream/bc-3.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-4.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/butter-cream/bc-5.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/butter-cream/bc-6.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-7.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/butter-cream/bc-8.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/butter-cream/bc-9.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-10.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/butter-cream/bc-11.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/butter-cream/bc-12.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/butter-cream/bc-13.jpg').default, price: 'UGX 70,000' }
];

const Chocolate = [
  { img: require('../imgs/gallery/chocolate/choc-1.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-2.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-3.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-4.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-5.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-6.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-7.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-8.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-9.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-10.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-11.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-12.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-13.jpg').default, price: 'UGX 50,000' },
  { img: require('../imgs/gallery/chocolate/choc-14.jpg').default, price: 'UGX 60,000' },
  { img: require('../imgs/gallery/chocolate/choc-15.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-16.jpg').default, price: 'UGX 70,000' },
  { img: require('../imgs/gallery/chocolate/choc-17.jpg').default, price: 'UGX 70,000' },
];


const Cakes = () => {
  // Calculate number of slides
  const numSlides = Math.ceil(imagesAndPrices.length / 3);

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
          <Slider imagesAndPrices={ButterCream} numSlides={numSlides} />
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Chocolate Cakes</h2>
          <Slider imagesAndPrices={Chocolate} numSlides={numSlides} reverseAnimation={true} />
        </Container>
      </div>
    </div>
  );
};

export default Cakes;
