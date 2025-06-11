import {
  Facebook,
  Youtube,
  Linkedin,
  TwitterX
} from "react-bootstrap-icons";

import PageTitle from "@/app/components/home/PageTitle";

import {CustomerInquiryForm} from "@/app/components/home/forms/CustomerInquiryForm";

export default function ContactPage() {

  return (
    <>
      <PageTitle title="Contact Us" />

      <div style={{ marginTop: "-60px" }}>
        <div className="container mt-4">
          <div className="card mb-4 p-4">
            <h2 className="mb-3">Contact Ron</h2>
            <p><strong>Address: </strong>5101 East La Palma Avenue, Suite #202-D, Anaheim Hills, CA 92807</p>
            <p><strong>Phone: </strong>(714) 202-9858</p>
            <p><strong>Email: </strong>ron.smithey@lpl.com</p>

            {/* Social Media Links */}
            <div className="mt-3">
              <h5>Follow Ron's Socials</h5>

              <a href={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer" className="me-3">
                <Facebook width={32} height={32} style={{ color: '#4267B2', marginTop: '5px' }} />
              </a>
              <a href={"https://www.youtube.com/@RonSmithey"} target="_blank" rel="noopener noreferrer">
                <Youtube width={32} height={32} style={{ color: '#FF0000', marginTop: '5px' }} />
              </a>
              <a href={"https://www.linkedin.com/in/ron-smithey/"} target="_blank" rel="noopener noreferrer" className="me-3">
                <Linkedin width={32} height={32} style={{ color: '#0A66C2', marginTop: '5px', marginLeft: '17px' }} />
              </a>
              <a href={"https://x.com/RonSmitheyLPL"} target="_blank" rel="noopener noreferrer" className="me-3">
                <TwitterX width={32} height={32} style={{ color: '#000000', marginTop: '5px'}} />
              </a>

            </div>
          </div>

          <CustomerInquiryForm/>

        </div>
      </div>
    </>
  );
}
