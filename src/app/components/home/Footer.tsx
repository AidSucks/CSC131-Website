'use client';

import Link from "next/link";

import {
  ArrowRight,
  EnvelopeOpen,
  Facebook,
  GeoAlt,
  Linkedin,
  Telephone,
  TwitterX, Youtube
} from "react-bootstrap-icons";

import {Button, Col, Stack} from "react-bootstrap";

export default function Footer() {

    return (
        <>
        <div className="container-fluid bg-dark text-light mt-5 fadeInUp">
        <div className="container">
          <div className="row">

            {/** About Miniature **/}
            <div className="col-lg-3 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <Link href="/public" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    Ron Smithey
                  </h1>
                </Link>
                <p className="mt-3 mb-4">
                  Ron entered the financial field over 23 years ago in 2002 because he wanted to help
                  individuals and business owners build, protect, and distribute their financial wealth.
                  After all these years in the industry he continues to be passionate about helping his clients navigate
                  their financial journeys from college saving plans, long term care and retirement.
                </p>

              </div>
            </div>


            <div className="col-lg-9 col-md-6">
              <div className="row">

                {/** Get In Touch/Contact **/}
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <Stack direction={"vertical"} gap={3}>
                    <div
                      className="section-title section-title-sm position-relative pb-3">
                      <h3 className="text-light mb-0">Get In Touch</h3>
                    </div>

                    <Col className={"d-flex align-items-center"}>
                      <GeoAlt size={18} className={"text-primary me-2"}/>
                      <span className={"w-100"}>5101 E. La Palma Avenue<br/>Suite #202-D<br/>Anaheim Hills, CA 92807</span>
                    </Col>

                    <Col className={"d-flex align-items-center"}>
                      <EnvelopeOpen size={18} className={"text-primary me-2"}/>
                      <span className={"w-100"}>ron.smithey@lpl.com</span>
                    </Col>

                    <Col className={"d-flex align-items-center"}>
                      <Telephone size={18} className={"text-primary me-2"}/>
                      <span className={"w-100"}>(714) 202-9858</span>
                    </Col>

                    <Col className="d-flex mt-4">
                      <Button href={"https://x.com/RonSmitheyLPL"} target={"_blank"} variant={"primary"} size={"sm"}
                              className={"d-flex align-items-center justify-content-center btn-square me-2"}>
                        <TwitterX size={20}/>
                      </Button>
                      <Button href={"https://www.facebook.com/profile.php?id=61577343456410"} target={"_blank"} variant={"primary"} size={"sm"}
                              className={"d-flex align-items-center justify-content-center btn-square me-2"}>
                        <Facebook size={20}/>
                      </Button>
                      <Button href={"https://www.linkedin.com/in/ron-smithey/"} target={"_blank"} variant={"primary"} size={"sm"}
                              className={"d-flex align-items-center justify-content-center btn-square me-2"}>
                        <Linkedin size={20}/>
                      </Button>
                      <Button href={"https://www.youtube.com/@RonSmithey"} target={"_blank"} variant={"primary"} size={"sm"}
                              className={"d-flex align-items-center justify-content-center btn-square me-2"}>
                        <Youtube size={20}/>
                      </Button>
                    </Col>
                  </Stack>
                </div>


                {/** Quick Links **/}
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div
                    className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Stack direction={"vertical"} gap={2}>
                      <Link className={"text-light"} href="/"><ArrowRight className={"text-primary me-2"}/>Home</Link>
                      <Link className={"text-light"} href="/about"><ArrowRight className={"text-primary me-2"}/>About</Link>
                      <Link className={"text-light"} href="/services"><ArrowRight className={"text-primary me-2"}/>Services</Link>
                      <Link className={"text-light"} href="/resources"><ArrowRight className={"text-primary me-2"}/>Resources</Link>
                      <Link className={"text-light"} href="/contact"><ArrowRight className={"text-primary me-2"}/>Contact</Link>
                    </Stack>
                  </div>
                </div>


                {/** Compliance & Legal Disclaimers **/}
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Compliance</h3>
                  </div>
                  <div className="">
                    <p>
                      Securities offered through LPL Financial<br/>
                      Member SIPC
                      <Link className="text-blue border-bottom ms-2" target="_blank" href="https://www.sipc.org/">sipc.org</Link>
                    </p>
                    <br/>
                    <p>
                      The LPL Financial Registered Representative associated with this site may only discuss and/or transact securities business with residents
                       of the following states: AZ, CA, FL, ID, NV, OH, OR, TX, WA
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
                  <Link className="text-white border-bottom" href="/">Ron Smithey Financial Services</Link>.
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}