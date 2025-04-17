'use client';

import { Card, Row, Col, Container } from 'react-bootstrap';

export default function DashboardPostsPage() {
    return (
        <Container className="mt-4">
            <h1 className="mb-4 text-black">Posts</h1>
            <Row>
                <Col md={6} className="mb-4">
                    <Card style={{ backgroundColor: '#7e7e7e', color: '#fff', border: '1px solid #444' }}>
                        <Card.Body>
                            <Card.Title className="text-white">Title of the Post</Card.Title>
                            <Card.Text className="text-light">
                                Some quick example text to build on the card title and make up the bulk of the card's content.                            </Card.Text>
                            <Card.Link href="#" className="text-info">
                                www.linktopost.com/post
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card style={{ backgroundColor: '#7e7e7e', color: '#fff', border: '1px solid #444' }}>
                        <Card.Body>
                            <Card.Title className="text-white">Another Post</Card.Title>
                            <Card.Text className="text-light">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#" className="text-info">
                                www.linkexample.org/clickhere
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card style={{ backgroundColor: '#7e7e7e', color: '#fff', border: '1px solid #444' }}>
                        <Card.Body>
                            <Card.Title className="text-white">Facebook Post</Card.Title>
                            <Card.Text className="text-light">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#" className="text-info">
                                www.thisisalinktoapost.com/info
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card style={{ backgroundColor: '#7e7e7e', color: '#fff', border: '1px solid #444' }}>
                        <Card.Body>
                            <Card.Title className="text-white">Instagram Post</Card.Title>
                            <Card.Text className="text-light">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#" className="text-info">
                                www.postpostpostpost.com/post
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
