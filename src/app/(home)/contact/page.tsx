"use client"; // This ensures this is a Client Component
import React, { useState, ChangeEvent } from "react";
import Head from "next/head";
import { Instagram, Facebook, Youtube, Linkedin } from "react-bootstrap-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [isDateRequired, setIsDateRequired] = useState(false);
  const [isInquiryRequired, setIsInquiryRequired] = useState(false);
  const [formType, setFormType] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Month is 0-based

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Los_Angeles", // Ensures consistent timezone
    };

    return date.toLocaleDateString("en-US", options);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formType === "inquiry") {
      alert(`Inquiry submitted successfully!`);
    } else if (formType === "appointment") {
      const formattedDate = formatDate(formData.date);
      alert(`Appointment scheduled successfully for ${formattedDate}!`);
    }
  };

  const handleInquiryClick = () => {
    setFormType("inquiry");
    setIsDateRequired(false);
    setIsInquiryRequired(true);
  };

  const handleAppointmentClick = () => {
    setFormType("appointment");
    setIsDateRequired(true);
    setIsInquiryRequired(false);
  };

  return (
      <>
        <Head>
          <title>Contact Us</title>
        </Head>
        <div className="container mt-4">
          {/* Company Contact Info Section */}
          <div className="card mb-4 p-4">
            <h2 className="mb-3">Contact Us</h2>
            <p><strong>Company Name:</strong> Ron Smithey Financial Services</p>
            <p><strong>Address:</strong> TBA</p>
            <p><strong>Phone:</strong> 619-244-0868</p>
            <p><strong>Email:</strong> ronniedeansmithey@yahoo.com</p>

            {/* Social Media Links */}
            <div className="mt-3">
              <h5>Follow Us</h5>
              <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="me-3">
                <Instagram width={40} height={40} style={{ color: '#E1306C', marginTop: '5px' }} />
              </a>
              <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="me-3">
                <Facebook width={40} height={40} style={{ color: '#4267B2', marginTop: '5px' }}/>
              </a>
              <a href="https://www.youtube.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <Youtube width={40} height={40} style={{ color: '#FF0000', marginTop: '5px' }} />
              </a>
              <a href="https://www.linkedin.com/yourcompany" target="_blank" rel="noopener noreferrer" className="me-3">
                <Linkedin width={40} height={40} style={{ color: '#0A66C2', marginTop: '5px', marginLeft: '17px' }} />
              </a>
            </div>
          </div>

          {/* Inquiry / Appointment Form Section */}
          <h2 className="mb-4">Inquiry / Appointment Form</h2>
          <form onSubmit={handleSubmit}>
            <p>Personal Information</p>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email Address</label>
              <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
              />
            </div>
            <p><br></br></p>
            <div className="form-group mt-3">
              <label htmlFor="message">Inquiry</label>
              <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Enter any additional details..."
                  value={formData.message}
                  onChange={handleChange}
                  required={isInquiryRequired}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3" onClick={handleInquiryClick}>
              Submit Inquiry
            </button>
            <p><br></br></p>
            <div className="form-group mt-3">
              <p>Appointment</p>
              <label htmlFor="date">Preferred Date</label>
              <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required={isDateRequired}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3" onClick={handleAppointmentClick}>
              Schedule Appointment
            </button>

            <p></p>
          </form>
        </div>
      </>
  );
}
