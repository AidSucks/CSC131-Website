"use client";
import React, { useState, ChangeEvent } from "react";
import Head from "next/head";
import { Instagram, Facebook, Youtube, Linkedin, TwitterX } from "react-bootstrap-icons";
import PageTitle from "@/app/components/PageTitle";

import businessInfo from "../../../../public/data/businessInfo.json";
import socialMedia from "../../../../public/data/SocialMedia.json";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: {
            rothIra: false,
            traditionalIra: false,
            rollover401k: false,
            lifeInsurance: false,
            setupCollegePlans: false,
            healthInsurance: false,
            longTermCare: false,
            comprehensivePlan: false,
            retirementPlanning: false,
            other: false,
        },
    });

    const [messageLength, setMessageLength] = useState(0);
    const [error, setError] = useState("");


    const handleChange = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                services: {
                    ...prev.services,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));

            if (name === "message") {
                setMessageLength(value.length);
            }
        }

        setError("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isServiceSelected = Object.values(formData.services).some((value) => value);
        if (!isServiceSelected) {
            setError("Please select at least one service.");
            return;
        }

        console.log("Form submitted:", formData);
        alert("Inquiry submitted successfully, we will contact you soon!");
    };

    return (
        <>
            <PageTitle title="Contact Us" />

            <Head>
                <title>Contact Us</title>
            </Head>

            <div className="container mt-4">
                <div className="card mb-4 p-4">
                    <h2 className="mb-3">Contact Us</h2>
                    <p><strong>Company Name: </strong> {businessInfo.name}</p>
                    <p><strong>Address: </strong>{businessInfo.address}</p>
                    <p><strong>Phone: </strong>{businessInfo.phone}</p>
                    <p><strong>Email: </strong>{businessInfo.email}</p>

                    {/* Social Media Links */}
                    <div className="mt-3">
                        <h5>Follow Us</h5>
                        <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                            <Instagram width={40} height={40} style={{ color: '#E1306C', marginTop: '5px' }} />
                        </a>
                        <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="me-3">
                            <Facebook width={40} height={40} style={{ color: '#4267B2', marginTop: '5px' }} />
                        </a>
                        <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                            <Youtube width={40} height={40} style={{ color: '#FF0000', marginTop: '5px' }} />
                        </a>
                        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                            <Linkedin width={40} height={40} style={{ color: '#0A66C2', marginTop: '5px', marginLeft: '17px' }} />
                        </a>
                        <a href={socialMedia.twitterX} target="_blank" rel="noopener noreferrer" className="me-3">
                            <TwitterX width={40} height={40} style={{ color: '#000000', marginTop: '5px'}} />
                        </a>
                    </div>
                </div>

                <h2 className="mb-4">Inquiry Form</h2>
                <form onSubmit={handleSubmit}>
                    <h5>Personal Information</h5>
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

                    <h5 className="mt-4">Select Services Requested</h5>
                    <div className="form-group">
                        {Object.keys(formData.services).map((service) => {
                            let formattedService = service
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase());

                            if (service === "rollover401k") {
                                formattedService = "Rollover 401(k)";
                            }

                            return (
                                <div className="form-check" key={service}>
                                    <input
                                        type="checkbox"
                                        name={service}
                                        className="form-check-input"
                                        id={service}
                                        checked={formData.services[service as keyof typeof formData.services]}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor={service}>
                                        {formattedService}
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    {error && <div className="text-danger mt-2">{error}</div>}

                    <div className="form-group mt-3">
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows={4}
                            placeholder="Enter any additional details..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            maxLength={300}
                        />
                        <small className="form-text text-muted">
                            {300 - messageLength} characters remaining
                        </small>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    );
}
