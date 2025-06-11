'use client';

import {Button, Form} from "react-bootstrap";
import React, {ChangeEvent, useState} from "react";
import {createCustomerInquiry} from "@/app/lib/actions";

const servicesList = [
  "Roth IRA",
  "Traditional IRA",
  "Rollover 401k",
  "Life Insurance",
  "College Planning",
  "Health Insurance",
  "Long Term Care",
  "Comprehensive Plan",
  "Retirement Planning",
  "Other"
];

export function CustomerInquiryForm() {

  const [messageLength, setMessageLength] = useState(0);
  const [selectedServices, setSelectedServices] = useState(new Array<string>(0));

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMessageLength(value.length);
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const fromIndex: number = selectedServices.indexOf(value);

    let newSelectedServices = selectedServices;

    if(fromIndex !== -1) {
      newSelectedServices.splice(fromIndex, 1);
    }else {
      newSelectedServices.push(value);
    }

    setSelectedServices(newSelectedServices);
  };

  return (
    <>
    <h2 className="mb-4">Send Ron a message:</h2>

    <Form action={createCustomerInquiry.bind(null, selectedServices)}>

      <Form.Group>

        <h5>Personal Information</h5>

        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type={"text"}
          name={"fullName"}
          required/>

        <Form.Label className={"mt-2"}>Email</Form.Label>
        <Form.Control
          type={"email"}
          name={"contactEmail"}
          required/>

        <Form.Label className={"mt-2"}>Phone Number (Optional)</Form.Label>
        <Form.Control
          type={"tel"}
          name={"contactPhone"}
          />

      </Form.Group>

      <Form.Group>

        <h5 className="my-3">Select Services Requested (Optional)</h5>

        {servicesList.map((service) => {
          return (
            <div key={service}>
              <Form.Check type={"checkbox"}>
                <Form.Check.Input value={service} onChange={handleCheckbox} type={"checkbox"}/>
                <Form.Check.Label>{service}</Form.Check.Label>
              </Form.Check>
            </div>
          );
        })}

      </Form.Group>

      <Form.Group>

        <Form.Label className={"mt-2"}>Message</Form.Label>
        <textarea
          name="message"
          className="form-control"
          rows={4}
          placeholder="Enter any additional details..."
          onChange={handleChange}
          maxLength={300}
        />
        <small className="form-text text-muted">
          {300 - messageLength} characters remaining
        </small>

      </Form.Group>

      <Button type={"submit"}>Submit</Button>

    </Form>
    </>
  );
}