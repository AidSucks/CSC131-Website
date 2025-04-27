'use client';
import PageTitle from "@/app/components/home/PageTitle";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PageTitle title="Resources" />
      {/* Guides & Tutorials Header */}
      <Container>
        <div className="section-title position-relative pb-3 mb-5" style={{ marginTop: "-80px" }}>
          <h1 className="mb-0">Guides & Tutorials</h1>
        </div>
      </Container>

      {/* Cards Section */}
      <Container>
        <Row className="d-flex justify-content-center gap-3">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-1.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Financial Management Insight:
                  Strategies to Help Build Your Future
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-2.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Investing Basics:
                  Embark on Your Wealth-Building Journey
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-3.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Financial Protection:
                  Using Insurance to Help Manage Life’s Risks</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-2.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Financial Management Insight:
                  Strategies to Help Build Your Future
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-3.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Investing Basics:
                  Embark on Your Wealth-Building Journey
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img as={Image} variant="top" src={"/img/blog-1.jpg"} width={250} height={200} alt={"Image"}/>
              <Card.Body>
                <Card.Title>Financial Protection:
                  Using Insurance to Help Manage Life’s Risks</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}