import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Alert, 
  Form, 
  Navbar, 
  Nav, 
  Modal, 
  Carousel,
  Accordion,
  Badge,
  ProgressBar,
  Spinner,
  Toast,
  ToastContainer
} from 'react-bootstrap';

const BootstrapExample = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [alertVariant, setAlertVariant] = useState('primary');

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  
  const handleShowToast = () => setShowToast(true);
  
  const changeAlertVariant = () => {
    const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setAlertVariant(randomVariant);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Bootstrap Components Example</h1>
      
      {/* Navbar Example */}
      <section className="mb-5">
        <h2 className="mb-3">Navbar</h2>
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="#home">Eventra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-light">Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      
      {/* Alerts Example */}
      <section className="mb-5">
        <h2 className="mb-3">Alerts</h2>
        <Alert variant={alertVariant} className="mb-3">
          This is a {alertVariant} alert—check it out!
        </Alert>
        <Button variant="secondary" onClick={changeAlertVariant} className="mb-3">
          Change Alert Variant
        </Button>
      </section>
      
      {/* Cards Example */}
      <section className="mb-5">
        <h2 className="mb-3">Cards</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Technical Workshop</Card.Title>
                <Card.Text>
                  Join us for an exciting technical workshop on the latest technologies.
                </Card.Text>
                <Button variant="primary">Register Now</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">June 15, 2025</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Cultural Night</Card.Title>
                <Card.Text>
                  Experience a night of cultural performances and celebrations.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">June 18, 2025</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Hackathon</Card.Title>
                <Card.Text>
                  Participate in our 24-hour coding challenge and win exciting prizes.
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">June 25, 2025</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </section>
      
      {/* Form Example */}
      <section className="mb-5">
        <h2 className="mb-3">Forms</h2>
        <Card>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Delhi</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Subscribe to newsletter" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </section>
      
      {/* Buttons Example */}
      <section className="mb-5">
        <h2 className="mb-3">Buttons</h2>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </div>
      </section>
      
      {/* Badges Example */}
      <section className="mb-5">
        <h2 className="mb-3">Badges</h2>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <h3>
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">Warning</Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">Light</Badge>
          <Badge bg="dark">Dark</Badge>
        </div>
      </section>
      
      {/* Progress Bars Example */}
      <section className="mb-5">
        <h2 className="mb-3">Progress Bars</h2>
        <ProgressBar className="mb-2" now={0} label={`0%`} />
        <ProgressBar className="mb-2" now={25} label={`25%`} />
        <ProgressBar className="mb-2" now={50} label={`50%`} />
        <ProgressBar className="mb-2" now={75} label={`75%`} />
        <ProgressBar className="mb-2" now={100} label={`100%`} />
        <ProgressBar className="mb-2">
          <ProgressBar variant="success" now={35} key={1} />
          <ProgressBar variant="warning" now={20} key={2} />
          <ProgressBar variant="danger" now={10} key={3} />
        </ProgressBar>
      </section>
      
      {/* Spinners Example */}
      <section className="mb-5">
        <h2 className="mb-3">Spinners</h2>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </div>
        <div className="d-flex flex-wrap gap-3">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      </section>
      
      {/* Accordion Example */}
      <section className="mb-5">
        <h2 className="mb-3">Accordion</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Eventra?</Accordion.Header>
            <Accordion.Body>
              Eventra is a comprehensive event management platform designed for college committees. 
              It helps streamline event planning, task management, and budget tracking for various 
              college events and activities.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I register my college?</Accordion.Header>
            <Accordion.Body>
              To register your college, navigate to the "Register College" page and fill out the 
              required information. Once your college is registered, you'll receive a unique college 
              code that committee members can use to sign up.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I track my committee's budget?</Accordion.Header>
            <Accordion.Body>
              Yes, Eventra provides comprehensive budget tracking features. You can add income and 
              expenses, categorize them, and generate reports to monitor your committee's financial 
              status in real-time.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      
      {/* Carousel Example */}
      <section className="mb-5">
        <h2 className="mb-3">Carousel</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Event+Management"
              alt="Event Management"
            />
            <Carousel.Caption>
              <h3>Event Management</h3>
              <p>Plan and organize college events with ease.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Task+Management"
              alt="Task Management"
            />
            <Carousel.Caption>
              <h3>Task Management</h3>
              <p>Assign and track tasks for your committee members.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Budget+Tracking"
              alt="Budget Tracking"
            />
            <Carousel.Caption>
              <h3>Budget Tracking</h3>
              <p>Monitor your committee's finances in real-time.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      
      {/* Modal Example */}
      <section className="mb-5">
        <h2 className="mb-3">Modal</h2>
        <Button variant="primary" onClick={handleModalShow}>
          Open Modal
        </Button>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Event Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="eventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" placeholder="Enter event name" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="eventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="eventDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleModalClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
      
      {/* Toast Example */}
      <section className="mb-5">
        <h2 className="mb-3">Toast</h2>
        <Button onClick={handleShowToast} className="mb-2">Show Toast</Button>
        <ToastContainer position="top-end" className="p-3">
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">Eventra</strong>
              <small>Just now</small>
            </Toast.Header>
            <Toast.Body>Event successfully created!</Toast.Body>
          </Toast>
        </ToastContainer>
      </section>
    </Container>
  );
};

export default BootstrapExample;
