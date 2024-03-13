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

const Kids = [
  { img: require('../imgs/gallery/kids/kids-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/kids/kids-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/kids/kids-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/kids/kids-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/kids/kids-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/kids/kids-6.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Fruit = [
  { img: require('../imgs/gallery/fruit/fruit-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/fruit/fruit-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/fruit/fruit-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/fruit/fruit-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/fruit/fruit-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/fruit/fruit-1.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Birthday = [
  { img: require('../imgs/gallery/birthday-specials/bd-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/birthday-specials/bd-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/birthday-specials/bd-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/birthday-specials/bd-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/birthday-specials/bd-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/birthday-specials/bd-6.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Weddings = [
  { img: require('../imgs/gallery/wedding-intro/wed-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/wedding-intro/wed-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/wedding-intro/wed-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/wedding-intro/wed-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/wedding-intro/wed-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/wedding-intro/wed-6.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Graduation = [

  { img: require('../imgs/gallery/graduation/grad-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/graduation/grad-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/graduation/grad-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/graduation/grad-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/graduation/grad-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/graduation/grad-6.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Christmas = [
  { img: require('../imgs/gallery/christmas/cmas-1.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/christmas/cmas-2.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/christmas/cmas-3.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/christmas/cmas-4.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/christmas/cmas-5.jpg'), price: 'UGX 50,000' },
  { img: require('../imgs/gallery/christmas/cmas-6.jpg'), price: 'UGX 50,000' },
  // Add more images and prices here
];

const Cakes = () => {
  // Calculate number of slides for ButterCream section
  const numSlidesButterCream = Math.ceil(ButterCream.length / 3);

  // Calculate number of slides for Chocolate section
  const numSlidesChocolate = Math.ceil(Chocolate.length / 3);

  // Calculate number of slides for Kids section
  const numSlidesKids = Math.ceil(Kids.length / 3);

  // Calculate number of slides for Fruit section
  const numSlidesFruit = Math.ceil(Fruit.length / 3);
  
  // Calculate number of slides for Birthday Specials section
  const numSlidesBirthday = Math.ceil(Birthday.length / 3);

  // Calculate number of slides for Weddings and Intros section
  const numSlidesWeddings = Math.ceil(Weddings.length / 3);

  // Calculate number of slides for Graduation section
  const numSlidesGraduation = Math.ceil(Graduation.length / 3);

  // Calculate number of slides for Christmas section
  const numSlidesChristmas = Math.ceil(Christmas.length / 3);

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

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Kids Cakes</h2>
          <Slider imagesAndPrices={Kids} numSlides={numSlidesKids}  />

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Fruit Cakes</h2>
          <Slider imagesAndPrices={Fruit} numSlides={numSlidesFruit} reverseAnimation={true} />

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Birthday Specials</h2>
          <Slider imagesAndPrices={Birthday} numSlides={numSlidesBirthday}  />

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Wedding Cakes</h2>
          <Slider imagesAndPrices={Weddings} numSlides={numSlidesWeddings} reverseAnimation={true} />

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Graduation Cakes</h2>
          <Slider imagesAndPrices={Graduation} numSlides={numSlidesGraduation}  />

          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Christmas Cakes</h2>
          <Slider imagesAndPrices={Christmas} numSlides={numSlidesChristmas} reverseAnimation={true} />
        </Container>
      </div>
    </div>
  );
};

export default Cakes;
