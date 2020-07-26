import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
const Service = ({ service }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{service.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{
						<div>
							<h3>{service.nickname}</h3>
							<h4>{service.birthday}</h4>
						</div>
					}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="col-4">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={service.img} />
					<Card.Body>
						<Button
							variant="primary"
							onClick={handleShow}
							className="btn-block"
						>
							{service.name}
						</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Service;
