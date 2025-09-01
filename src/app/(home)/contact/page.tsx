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
      <PageTitle title="Contact" />

      <div style={{ marginTop: "-60px" }}>
        <div className="container mt-4">
          <div className="card mb-4 p-4 flex-lg-row flex-column">

            <div className={"d-flex col-lg-4 flex-column"}>
              <h2>Contact</h2>

              <div className={"mb-2"}><strong>Address:</strong></div>
              <span>5101 E. La Palma Avenue</span>
              <span>Suite #202-D</span>
              <span>Anaheim Hills CA 92807</span>

              <div className={"mt-3 mb-2"}><strong>Phone:</strong></div>
              <span>714-202-9858</span>

              <div className={"mt-3 mb-2"}><strong>Email:</strong></div>
              <span>ron.smithey@lpl.com</span>

              <div>
                <div className={"mt-3 mb-2"}><strong>Social Media:</strong></div>

                <a href={"https://www.facebook.com/profile.php?id=61577343456410"} target="_blank"
                   rel="noopener noreferrer" className="me-3">
                  <Facebook width={28} height={28} style={{color: '#4267B2', marginTop: '5px'}}/>
                </a>
                <a href={"https://www.youtube.com/@RonSmithey"} target="_blank" rel="noopener noreferrer">
                  <Youtube width={28} height={28} style={{color: '#FF0000', marginTop: '5px'}}/>
                </a>
                <a href={"https://www.linkedin.com/in/ron-smithey/"} target="_blank" rel="noopener noreferrer"
                   className="me-3">
                  <Linkedin width={28} height={28} style={{color: '#0A66C2', marginTop: '5px', marginLeft: '17px'}}/>
                </a>
                <a href={"https://x.com/RonSmitheyLPL"} target="_blank" rel="noopener noreferrer" className="me-3">
                  <TwitterX width={28} height={28} style={{color: '#000000', marginTop: '5px'}}/>
                </a>

              </div>

            </div>

            <div className={"d-flex col-sm-8 mt-3 mt-lg-0 flex-column align-items-center"}>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.289479363508!2d-117.8065000741958!3d33.859820874402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd117b5171693%3A0xac899739c795686d!2s5101%20E%20La%20Palma%20Ave%20202%20d%2C%20Anaheim%2C%20CA%2092807!5e0!3m2!1sen!2sus!4v1756601023223!5m2!1sen!2sus"
                style={{border: 0, maxHeight: 400, minHeight: 200, maxWidth: 750, minWidth: 250}} loading="lazy" width={"100%"} height={"100%"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

          </div>

          <CustomerInquiryForm/>

        </div>
      </div>
    </>
  );
}
