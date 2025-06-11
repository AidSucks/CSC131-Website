import {
  EnvelopeOpen,
  Facebook,
  GeoAlt,
  Instagram,
  Linkedin,
  Telephone,
  TwitterX,
  Youtube
} from "react-bootstrap-icons";

import { fetchBusinessInfo } from "@/app/lib/actions";
import { Button, Col, Container, Row } from "react-bootstrap";

export default async function Topbar() {
  const businessInfo = await fetchBusinessInfo();

  return (
      <>
        <div className="topbar-responsive">
          <Container fluid className="bg-dark text-light px-3 px-md-5 py-2">
            <Row className="d-flex justify-content-between align-items-center text-center text-lg-start">
              <Col lg={8}>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-start align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <GeoAlt size={18} className="me-2" />
                    <small>{businessInfo?.businessAddress}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <Telephone size={18} className="me-2" />
                    <small>{businessInfo?.businessPhone}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <EnvelopeOpen size={18} className="me-2" />
                    <small>{businessInfo?.businessEmail}</small>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
                <div className="d-flex gap-2">
                  {businessInfo?.twitterX && (
                      <Button href={businessInfo.twitterX} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                        <TwitterX size={14} />
                      </Button>
                  )}
                  {businessInfo?.facebook && (
                      <Button href={businessInfo.facebook} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                        <Facebook size={14} />
                      </Button>
                  )}
                  {businessInfo?.linkedin && (
                      <Button href={businessInfo.linkedin} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                        <Linkedin size={14} />
                      </Button>
                  )}
                  {businessInfo?.instagram && (
                      <Button href={businessInfo.instagram} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                        <Instagram size={14} />
                      </Button>
                  )}
                  {businessInfo?.youtube && (
                      <Button href={businessInfo.youtube} target="_blank" variant="outline-light" size="sm" className="rounded-circle">
                        <Youtube size={14} />
                      </Button>
                  )}
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
