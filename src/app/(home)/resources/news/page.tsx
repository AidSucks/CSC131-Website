'use client';

import PageTitle from "@/app/components/PageTitle";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Page() {
  return (
    <div>
      <PageTitle title="Resources" />
      <Container>

        {/* Section Title */}
        <div className="section-title position-relative pb-3 mb-5" style={{ marginTop: "-80px" }}>
          <h1 className="mb-0">News</h1>
        </div>

        {/* Featured Card */}
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Card className="text-center shadow">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Something Important Here</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Check It Out</Button>
              </Card.Body>
              <Card.Footer className="text-muted">March 19, 2025</Card.Footer>
            </Card>
          </Col>
        </Row>

        {/* Responsive Grid of Cards */}
        <Row className="g-4">
          {[1, 2, 3].map((_, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <Card className="shadow">
                <Card.Img variant="top" src="/plant.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}