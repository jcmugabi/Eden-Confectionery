import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Slider = ({ numSlides, imagesAndPrices, reverseAnimation }) => {
  const slideIndexes = reverseAnimation ? [...Array(numSlides)].map((_, index) => numSlides - 1 - index) : [...Array(numSlides)].map((_, index) => index);

  // Custom styles for navigation buttons
  const buttonStyle = {
    fontSize: '2rem', // Adjust the font size
    color: '#fff', // Set the color of the arrows
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the background color
    border: 'none', // Remove any border
    padding: '10px', // Add padding for better visibility
    borderRadius: '5px', // Add border radius for rounded corners
    cursor: 'pointer', // Change cursor to pointer on hover
  };

  return (
    <Carousel
      indicators={false}
      pause={false}
      controls={true}
      nextIcon={<span style={buttonStyle}>&#x276F;</span>}
      prevIcon={<span style={buttonStyle}>&#x276E;</span>}
      reverse={reverseAnimation}
    >
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
