import Link from "next/link";

import businessInfo from "../../../public/data/businessInfo.json";
import SocialMedia from "../../../public/data/SocialMedia.json";

export default function Footer() {
    return (
        <>
        <div className="container-fluid bg-dark text-light mt-5 fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <Link href="/" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    <i className="fa fa-user-tie me-2"></i>Ron Smithey
                  </h1>
                </Link>
                <p className="mt-3 mb-4">
                  Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
                  stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
                  amet erat lorem stet eos. Diam amet et kasd eos duo.
                </p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                    />
                    <button className="btn btn-dark">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-9 col-md-6">
              <div className="row">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div
                    className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                      <p className="mb-0">{businessInfo.address}</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">{businessInfo.email}</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">{businessInfo.phone}</p>
                  </div>
                  <div className="d-flex mt-4">
                    <Link className="btn btn-primary btn-square me-2" href={SocialMedia.twitterX} target="_blank"><i className="bi bi-twitter-x"></i></Link>
                    <Link className="btn btn-primary btn-square me-2" href={SocialMedia.facebook} target="_blank"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square me-2" href={SocialMedia.linkedin} target="_blank"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square" href={SocialMedia.instagram} target="_blank"><i className="fab fa-instagram fw-normal"></i></Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div
                    className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                    <Link className="text-light mb-2" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                    <Link className="text-light mb-2" href="/services"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                    <Link className="text-light" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                    <Link className="text-light" href="/legal/privacy-policy"><i className="bi bi-arrow-right text-primary me-2"></i>Privacy Policy</Link>
                    <Link className="text-light" href="/legal/terms-conditions"><i className="bi bi-arrow-right text-primary me-2"></i>Terms & Conditions</Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Compliance</h3>
                  </div>
                  <div className="">
                    <p>Securities offered through LPL Financial, Member
                    <Link className="text-blue border-bottom" target="_blank" href="http://www.finra.org/"> FINRA </Link>
                    /
                    <Link className="text-blue border-bottom" target="_blank" href="https://www.sipc.org/"> SIPC</Link>
                    .</p>
                    <br/>
                    <p>The LPL FinSecurities offered through LPL Financial, Member
                    <Link className="text-blue border-bottom" target="_blank" href="http://www.finra.org/"> FINRA </Link>
                    /
                    <Link className="text-blue border-bottom" target="_blank" href="https://www.sipc.org/"> SIPC</Link>
                    .</p>
                    <br/>
                    <p>
                      The LPL Financial Registered Representative associated with this site may only discuss and/or transact securities business with residents
                       of the following states: AR, AZ, CA, FL,TN, ID.
                    </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white" style={{background: '#061429'}}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{height: '75px'}}>
                <p className="mb-0">
                  &copy;
                  <Link className="text-white border-bottom" href="#">Ron Smithey Financial Services</Link>.
                  All Rights Reserved. 
                  {/* Designed by
                  <Link className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex.</Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}