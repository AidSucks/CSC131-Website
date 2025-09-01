'use client';

import React, { useState } from "react";
import { Button, Form, Alert, Col } from "react-bootstrap";
import Link from "next/link";
import Row from "react-bootstrap/Row";

const personalServices = [
  "401 (k) Rollovers",
  "College Planning",
  "Comprehensive Planning",
  "Disability Insurance",
  "Estate Planning",
  "Health Insurance",
  "Life Insurance",
  "Long Term Care",
  "Retirement Planning",
  "Roth IRA",
  "Traditional IRA",
  "Other"
];

const businessServices = [
  "Business Disability Insurance Plans",
  "Business Health Insurance Plans",
  "Business Life Insurance Plans",
  "Business Retirement Plans"
];

export function CustomerInquiryForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  formData.append("services", selectedServices.join(", "));

  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    setStatus("Message sent successfully.");
    form.reset();
    setSelectedServices([]);
    setMessageLength(0);
  } else {
    setStatus("Failed to send message. Please try again later.");
  }
};

  if(status)
    return <Alert variant="info">{status} <Link href={"/"}>Back to home</Link></Alert>;

  return (
    <div className={"d-flex flex-column"}>

      <div className={"d-flex flex-column w-75 align-self-center"}>
      <h2 className="mb-4">Send a message:</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>

            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="fullName" required />

            <Form.Label className="mt-2">Email</Form.Label>
            <Form.Control type="email" name="contactEmail" required />

            <Form.Label className="mt-2">Phone (Optional)</Form.Label>
            <Form.Control type="tel" name="contactPhone" />

          </Form.Group>

          <Form.Group>
            <Row className={"mt-3"}>
              <Col lg={3} sm={4}>
                <strong className={"text-dark"}>Personal Focus Areas:</strong>
                {personalServices.map((service) => (
                  <Form.Check type="checkbox" key={service}>
                    <Form.Check.Input
                      type="checkbox"
                      value={service}
                      onChange={handleCheckbox}
                    />
                    <Form.Check.Label>{service}</Form.Check.Label>
                  </Form.Check>
                ))}
              </Col>

              <Col lg={3} sm={4}>
                <strong className={"text-dark"}>Business Focus Areas:</strong>
                {businessServices.map((service) => (
                  <Form.Check type="checkbox" key={service}>
                    <Form.Check.Input
                      type="checkbox"
                      value={service}
                      onChange={handleCheckbox}
                    />
                    <Form.Check.Label>{service}</Form.Check.Label>
                  </Form.Check>
                ))}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">Message (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              maxLength={300}
              placeholder="Enter any additional details..."
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
            <small className="form-text text-muted">
              {300 - messageLength} characters remaining
            </small>
          </Form.Group>

          <Button type="submit" className="mt-3">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
