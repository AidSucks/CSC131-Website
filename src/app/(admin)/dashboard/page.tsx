'use client';

import { Row, Col, Card } from 'react-bootstrap';
import React from 'react';

export default function DashboardPage() {
    const styles = {
        container: {
            padding: '2rem',
            width: '100%',
        },
        profileIcon: {
            backgroundColor: '#fff',
            color: '#000',
            padding: '0.5rem 1rem',
            borderRadius: '999px',
        },
        statCard: {
            textAlign: 'center' as const,
        },
        chartPlaceholder: {
            height: '200px',
            background: '#eaeaea',
            borderRadius: '8px',
        },
        activityPlaceholder: {
            height: '150px',
            background: '#f3f3f3',
            borderRadius: '8px',
        },
    };

    const statValues = {
        Customers: 123,
        Posts: 45,
        Appointments: 67,
        Users: 89,
    };

    return (
        <div style={styles.container}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Dashboard</h2>
                <div style={styles.profileIcon}>👤 Admin</div>
            </div>

            <Row className="mb-4">
                {Object.entries(statValues).map(([label, value], idx) => (
                    <Col key={idx} md={3} className="mb-3">
                        <Card style={styles.statCard}>
                            <Card.Body>
                                <Card.Title>{label}</Card.Title>
                                <h3>#{value}</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col md={8}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Overview</Card.Title>
                            <div style={styles.chartPlaceholder} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Tasks</Card.Title>
                            <ul>
                                <li >Finishing Calculator</li>
                                <li>Website touch ups</li>
                                <li>Gotta work on the appointments</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card>
                <Card.Body>
                    <Card.Title>Recent Activity</Card.Title>
                    <div style={styles.activityPlaceholder} />
                </Card.Body>
            </Card>
        </div>
    );
}
