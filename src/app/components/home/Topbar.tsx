import {
  EnvelopeOpen,
  Facebook, GeoAlt, Instagram, Linkedin, Telephone,
  TwitterX, Youtube
} from "react-bootstrap-icons";

import {fetchBusinessInfo} from "@/app/lib/actions";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";

export default async function Topbar() {

  const businessInfo = await fetchBusinessInfo();

  return (
    <Container fluid className={"px-5 d-none bg-dark d-lg-block"}>
      <Row style={{height: 45}}>

        <Col className={"d-flex"}>
          <Stack direction={"horizontal"} gap={3} className={"text-light"}>
            <div>
              <GeoAlt size={18} className={"me-2"}/>
              <small>{businessInfo?.businessAddress}</small>
            </div>
            <div className={"text-light"}>
              <Telephone size={18} className={"me-2"}/>
              <small>{businessInfo?.businessPhone}</small>
            </div>
            <div>
              <EnvelopeOpen size={18} className={"me-2"}/>
              <small>{businessInfo?.businessEmail}</small>
            </div>
          </Stack>
        </Col>

        <Col className={"d-flex justify-content-end"}>
          <Stack direction={"horizontal"} gap={2}>
            {businessInfo?.twitterX ?
                <Button href={businessInfo.twitterX} target={"_blank"} variant={"outline-light"} size={"sm"}
                        className={"rounded-circle"}>
                  <TwitterX size={14}/>
                </Button>
                : null}
            {businessInfo?.facebook ?
              <Button href={businessInfo.facebook} target={"_blank"} variant={"outline-light"} size={"sm"}
                      className={"rounded-circle"}>
                <Facebook size={14}/>
              </Button>
              : null}
            {businessInfo?.linkedin ?
              <Button href={businessInfo.linkedin} target={"_blank"} variant={"outline-light"} size={"sm"}
                      className={"rounded-circle"}>
                <Linkedin size={14}/>
              </Button>
              : null}
            {businessInfo?.instagram ?
              <Button href={businessInfo.instagram} target={"_blank"} variant={"outline-light"} size={"sm"}
                      className={"rounded-circle"}>
                <Instagram size={14}/>
              </Button>
              : null}
            {businessInfo?.youtube ?
              <Button href={businessInfo.youtube} target={"_blank"} variant={"outline-light"} size={"sm"}
                      className={"rounded-circle"}>
                <Youtube size={14}/>
              </Button>
              : null}
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}
