import React from 'react';
import './About.css'
import { CakeGallery } from '../components/CakeGallery';

function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className='container my-5'>
        <p>Located in Seeta Mukono and founded in 2017 by Ms. Joy Kezia Kisakye, 
          our bakery is a testament to her passion for crafting delectable confections. 
          At our bakery, we specialize in creating cakes that not only tantalize the taste buds but also serve as stunning centerpieces for any occasion. 
          From elegant wedding cakes to whimsical birthday creations, we pour our heart and soul into every confection we bake, 
          ensuring that each bite is a delightful experience for our customers. 
          With a commitment to quality ingredients and unparalleled attention to detail, 
          we strive to exceed expectations with every cake that leaves our kitchen.</p>
        <p>Since our inception, our bakery has become a beloved destination for cake lovers in Kampala and beyond. 
          With a diverse menu featuring an array of flavors, designs, and sizes, 
          there's something to satisfy every craving and suit every celebration. 
          Whether you're marking a milestone birthday, commemorating a special anniversary, 
          or simply indulging in a sweet treat, our cakes are crafted with care and creativity. 
          As a family-owned and operated business, we take pride in serving our community with delicious desserts that bring joy to every occasion. 
          Discover the magic of our bakery and let us elevate your celebrations with our mouthwatering cakes.</p>
      </div>
      <div className='bg-dark text-light'>
        <CakeGallery />
      </div>
      <div className='bg-light text-dark py-5'><h2>Reviews</h2> </div>
    </div>
  )
}

export default About;
