'use client';

import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const servicesList = [
  "Roth IRA", "Traditional IRA", "Rollover 401k", "Life Insurance",
  "College Planning", "Health Insurance", "Long Term Care",
  "Comprehensive Plan", "Retirement Planning", "Other"
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


  return (
    <>
      <h2 className="mb-4">Send Ron a message:</h2>

      {status && <Alert variant="info">{status}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h5>Personal Information</h5>

          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="fullName" required />

          <Form.Label className="mt-2">Email</Form.Label>
          <Form.Control type="email" name="contactEmail" required />

          <Form.Label className="mt-2">Phone Number (Optional)</Form.Label>
          <Form.Control type="tel" name="contactPhone" />
        </Form.Group>

        <Form.Group>
          <h5 className="my-3">Select Services Requested (Optional)</h5>
          {servicesList.map((service) => (
            <Form.Check type="checkbox" key={service}>
              <Form.Check.Input
                type="checkbox"
                value={service}
                onChange={handleCheckbox}
              />
              <Form.Check.Label>{service}</Form.Check.Label>
            </Form.Check>
          ))}
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-2">Message</Form.Label>
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
    </>
  );
}
