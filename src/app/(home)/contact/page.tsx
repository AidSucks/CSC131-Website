import { Instagram, Facebook, Youtube, Linkedin, TwitterX } from "react-bootstrap-icons";
import PageTitle from "@/app/components/home/PageTitle";

import businessInfo from "../../../../public/data/businessInfo.json";
import socialMedia from "../../../../public/data/SocialMedia.json";
import {CustomerInquiryForm} from "@/app/components/home/forms/CustomerInquiryForm";

export default function ContactPage() {
    return (
        <>
            <PageTitle title="Contact Us" />

            <div style={{ marginTop: "-60px" }}>
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
                    <CustomerInquiryForm/>
                </div>
            </div>
        </>
    );
}
