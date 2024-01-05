import React from 'react';
import './Cakes.css';
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap';
import RedVelvetImg from '../imgs/redvelvet-cake.jpg';
import LemonImg from '../imgs/lemon-cake.jpg';
import CaramelImg from '../imgs/caramel-cake.jpg';
import ChocolateImg from '../imgs/chocolate-cake.webp';
import CoconutImg from '../imgs/coconut-cake.jpg';

const redvelvet = [
  {
    id: 1,
    name: 'Red Velvet Cake Plain',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 110,000',
  },
  {
    id: 2,
    name: 'Red Velvet Cake Cream',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 115,000',
  },
  {
    id: 3,
    name: 'Red Velvet Cake Fondant',
    description: 'A red velvet cake is a cake with a dark red, bright red or red-brown color. It is traditionally prepared as a layer cake topped with cream cheese or cooked roux icing.',
    price: 'UGX 140,000',
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
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Red Velvet</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={RedVelvetImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className='col-lg-6 d-flex-column justify-content-around'>
              {redvelvet.map((redvelvet)=>(
                <div key={redvelvet.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'>
                        {redvelvet.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {redvelvet.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {redvelvet.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cakes;
