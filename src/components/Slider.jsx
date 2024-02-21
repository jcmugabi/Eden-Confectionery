import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Slider = ({ numSlides, imagesAndPrices, reverseAnimation }) => {
  const slideIndexes = reverseAnimation ? [...Array(numSlides)].map((_, index) => numSlides - 1 - index) : [...Array(numSlides)].map((_, index) => index);

  return (
    <Carousel indicators={false} pause={false} controls={true} nextIcon={<span className="carousel-arrow">&#x276F;</span>} prevIcon={<span className="carousel-arrow">&#x276E;</span>} reverse={reverseAnimation}>
      {slideIndexes.map((slideIndex) => (
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
  );
};

export default Slider;
