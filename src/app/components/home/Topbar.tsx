'use client';

import {
  EnvelopeOpen,
  Facebook,
  GeoAlt,
  Linkedin,
  Telephone,
  TwitterX,
  Youtube
} from "react-bootstrap-icons";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Topbar() {

  return (
      <>
        <div className="topbar-responsive">
          <Container fluid className="bg-dark text-light px-3 px-md-5 py-2">
            <Row className="d-flex justify-content-between align-items-center text-center text-lg-start">
              <Col lg={8}>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-start align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <GeoAlt size={18} className="me-2" />
                    <small>5101 E. La Palma Avenue, Suite #202-D, Anaheim Hills, CA 92807</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <Telephone size={18} className="me-2" />
                    <small>(714) 202-9858</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <EnvelopeOpen size={18} className="me-2" />
                    <small>ron.smithey@lpl.com</small>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
                <div className="d-flex gap-2">
                    <Button href={"https://x.com/RonSmitheyLPL"} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                      <TwitterX size={14} />
                    </Button>
                    <Button href={"https://www.facebook.com/profile.php?id=61577343456410"} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                      <Facebook size={14} />
                    </Button>
                    <Button href={"https://www.linkedin.com/in/ron-smithey/"} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                      <Linkedin size={14} />
                    </Button>
                    <Button href={"https://www.youtube.com/@RonSmithey"} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                      <Youtube size={14} />
                    </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Hacky global style injection inside component */}
        <style
            dangerouslySetInnerHTML={{
              __html: `
            @media (max-width: 1199px) {
              .topbar-responsive {
                display: none !important;
              }
            }
          `,
            }}
        />
      </>
  );
}
