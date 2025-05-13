import { Instagram, Facebook, Youtube, Linkedin, TwitterX } from "react-bootstrap-icons";
import PageTitle from "@/app/components/home/PageTitle";

import {CustomerInquiryForm} from "@/app/components/home/forms/CustomerInquiryForm";
import {fetchBusinessInfo} from "@/app/lib/actions";

export default async function ContactPage() {

    const businessInfo = await fetchBusinessInfo();

    return (
        <>
            <PageTitle title="Contact Us" />

            <div style={{ marginTop: "-60px" }}>
                <div className="container mt-4">
                    <div className="card mb-4 p-4">
                        <h2 className="mb-3">Contact Us</h2>
                        <p><strong>Company Name: </strong>Ron Smithey Financial Services</p>
                        <p><strong>Address: </strong>{businessInfo?.businessAddress}</p>
                        <p><strong>Phone: </strong>{businessInfo?.businessPhone}</p>
                        <p><strong>Email: </strong>{businessInfo?.businessEmail}</p>

                        {/* Social Media Links */}
                        <div className="mt-3">
                            <h5>Follow Us</h5>
                            {businessInfo?.instagram ?
                              <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                                <Instagram width={40} height={40} style={{ color: '#E1306C', marginTop: '5px' }} />
                              </a>
                              : null}

                            {businessInfo?.facebook ?
                              <a href={businessInfo.facebook} target="_blank" rel="noopener noreferrer" className="me-3">
                                  <Facebook width={40} height={40} style={{ color: '#4267B2', marginTop: '5px' }} />
                              </a>
                              : null}

                            {businessInfo?.youtube ?
                              <a href={businessInfo.youtube} target="_blank" rel="noopener noreferrer">
                                  <Youtube width={40} height={40} style={{ color: '#FF0000', marginTop: '5px' }} />
                              </a>
                              : null}

                            {businessInfo?.linkedin ?
                              <a href={businessInfo.linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                                  <Linkedin width={40} height={40} style={{ color: '#0A66C2', marginTop: '5px', marginLeft: '17px' }} />
                              </a>
                              : null}

                            {businessInfo?.twitterX ?
                              <a href={businessInfo.twitterX} target="_blank" rel="noopener noreferrer" className="me-3">
                                  <TwitterX width={40} height={40} style={{ color: '#000000', marginTop: '5px'}} />
                              </a>
                              : null}

                        </div>
                    </div>

                    <h2 className="mb-4">Send Us a Message:</h2>
                    <CustomerInquiryForm/>
                </div>
            </div>
        </>
    );
}
