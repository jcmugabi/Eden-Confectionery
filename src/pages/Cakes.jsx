import React from 'react';
import './Cakes.css';
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap';
import RedVelvetImg from '../imgs/redvelvet-cake.jpg';
// import LemonImg from '../imgs/lemon-cake.jpg';
// import CaramelImg from '../imgs/caramel-cake.jpg';
import ChocolateImg from '../imgs/chocolate-cake.webp';
// import CoconutImg from '../imgs/coconut-cake.jpg';

const birthdays = [
  {
    id: 1,
    name: 'Coconut / Vanilla',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 80,000',
  },
  {
    id: 2,
    name: 'Red Velvet',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 135,000',
  },
  {
    id: 3,
    name: 'Chocollate',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 150,000',
  }
]

const weddings = [
  {
    id: 1,
    name: '3 Tier - Whole Fruit cake',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 2,000,000',
  },
  {
    id: 2,
    name: '4 Tier - Mixed flovour',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 2,400,000',
  },
  {
    id: 3,
    name: '3 Tier - Mixed flovour',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 1,800,000',
  }
]

const Cakes = () => {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Cakes</h1>
        </div>
      </header>

      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Birthday Cakes</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={RedVelvetImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className='col-lg-6 d-flex-column justify-content-around'>
              {birthdays.map((birthdays)=>(
                <div key={birthdays.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'>
                        {birthdays.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {birthdays.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {birthdays.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='weddings bg-dark py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Wedding Cakes</h2>
          <div className='row'>
          <div className='col-lg-6 d-flex-column justify-content-around'>
              {weddings.map((weddings)=>(
                <div key={weddings.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'>
                        {weddings.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {weddings.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {weddings.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={ChocolateImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cakes;
