'use client';

import {Button, Card, Container} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import {Github, Google} from "react-bootstrap-icons";
import {logIn} from "@/app/lib/actions";
import {redirect} from "next/navigation";

export default function LoginPage() {
  return (
    <body data-bs-theme={"dark"}>
      <Container className={"d-flex flex-grow-1 vh-100 align-items-center justify-content-center"}>
        <Card className={"bg-body-secondary"}>
          <Card.Body>
            <Card.Title><h1 className={"text-center mb-4"}>Dashboard Login</h1></Card.Title>
            <Stack direction={"vertical"} gap={2}>
              <Button variant={"danger"} onClick={() => logIn("google")}>
                <div className={"d-flex flex-grow-1 justify-content-center"}>
                  <b className={"me-3 align-self-center"} style={{fontSize: "18px"}}>Sign in with Google</b>
                  <Google
                    width={32}
                    height={32}/>
                </div>
              </Button>
              <Button variant={"dark"} onClick={() => logIn("github")}>
                <div className={"d-flex flex-grow-1 justify-content-center"}>
                  <b className={"me-3 align-self-center"} style={{fontSize: "18px"}}>Sign in with GitHub</b>
                  <Github
                    width={32}
                    height={32}/>
                </div>
              </Button>
              <Button variant={"primary"} style={{height: "45.33px"}} onClick={() => redirect("/")}>
                <div className={"d-flex flex-grow-1 justify-content-center"}>
                  <b className={"align-self-center"} style={{fontSize: "18px"}}>Back to Homepage</b>
                </div>
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Container>
    </body>
  );
}