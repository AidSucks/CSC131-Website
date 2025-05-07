'use client';

import {Button, Card} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import {logIn} from "@/app/lib/actions";
import {Github, Google} from "react-bootstrap-icons";
import {redirect} from "next/navigation";

export function LoginCard() {

  return(
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
  );
}