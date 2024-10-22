import React, { useState } from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CakeDetailsPopup from '../components/CakeDetailsPopup'; // Import the CakeDetailsPopup component

const Slider = ({ numSlides, imagesAndPrices, reverseAnimation }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  const slideIndexes = reverseAnimation ? [...Array(numSlides)].map((_, index) => numSlides - 1 - index) : [...Array(numSlides)].map((_, index) => index);

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <Carousel indicators={false} pause={false} controls={true} nextIcon={<span className="carousel-arrow">&#x276F;</span>} prevIcon={<span className="carousel-arrow">&#x276E;</span>} reverse={reverseAnimation} interval={10000}>
        {slideIndexes.map((slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Container>
              <Row className='justify-content-center'>
                {[0, 1, 2].map((itemIndex) => {
                  const dataIndex = slideIndex * 3 + itemIndex;
                  const item = imagesAndPrices[dataIndex];
                  if (!item) return null; // Skip if no item exists
                  return (
                    <Col lg={4} md={12} key={dataIndex}>
                      <motion.div
                        whileHover={{ scale: 0.99 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => handleCakeClick(item)} // Call handleCakeClick function on click
                      >
                        <Card className='border-0'>
                          <Card.Img variant='top' src={item.img} alt='cake' />
                          <Card.ImgOverlay className='d-flex align-items-start'>
                            <Card.Text className='text-dark fs-4 '>
                              {item.price}
                            </Card.Text>
                          </Card.ImgOverlay>
                        </Card>
                      </motion.div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>

      <CakeDetailsPopup show={showDetails} handleClose={handleCloseDetails} cakeDetails={selectedCake} />
    </>
  );
};

export default Slider;
