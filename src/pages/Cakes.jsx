import React from 'react';
import { Card, Carousel, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Birthday Cakes</h2>
          <Carousel indicators={false} pause={false}>
            {[...Array(numSlides)].map((_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                >
                  <Container>
                    <Row className='justify-content-center'>
                      {[0, 1, 2].map((itemIndex) => {
                        const dataIndex = slideIndex * 3 + itemIndex;
                        const item = imagesAndPrices[dataIndex];
                        if (!item) return null; // Skip if no item exists
                        return (
                          <Col lg={4} md={12} key={dataIndex}>
                            <Card className='border-0'>
                              <Card.Img variant='top' src={item.img} alt='cake' />
                              <Card.ImgOverlay className='d-flex align-items-start'>
                                <Card.Text className='text-dark fs-3 fw-bold'>
                                  {item.price}
                                </Card.Text>
                              </Card.ImgOverlay>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                </motion.div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Cakes;
