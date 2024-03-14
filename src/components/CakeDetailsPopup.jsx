import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CakeDetailsPopup = ({ cakeDetails }) => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    // Check if cakeDetails is provided and open the modal if true
    if (cakeDetails) {
      setShowModal(true);
    }
  }, [cakeDetails]); // Re-run effect when cakeDetails changes

  if (!cakeDetails) return null;

  const { img, price, description } = cakeDetails;

  const handleOrderClick = () => {
    // Create a mailto link with necessary parameters
    const mailtoLink = `mailto:edencofectionery@gmail.com?subject=Cake Order&body=Please find the details of the cake below:%0A%0APrice: ${price}%0ADescription: ${description}%0A(Kindly include your contact and location details.)%0A%0AImage Link: ${img}`;

    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{price}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={img} alt={price} style={{ maxWidth: '100%' }} onClick={handleClose} /> {/* Image click closes the modal */}
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOrderClick}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CakeDetailsPopup;
