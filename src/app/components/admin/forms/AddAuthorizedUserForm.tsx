'use client'

import {Col, Row, Form, Button} from "react-bootstrap";
import {PlusCircle} from "react-bootstrap-icons";
import {createAuthorizedUser} from "@/app/lib/actions";

export function AddAuthorizedUserForm() {
  return (
    <Form action={createAuthorizedUser}>
      <h6>Add an authorized user:</h6>
      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name={"email"} size={"sm"} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId={"roleGridSelect"}>
          <Form.Label>Role</Form.Label>
          <Form.Select name={"role"} size={"sm"} defaultValue="Choose...">
            <option>Administrator</option>
            <option>Moderator</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className={"align-self-end h-50 justify-content-start d-flex"} controlId={"submit"}>
          <div className={"d-flex w-25"}>
            <Button size={"sm"} className={"flex-grow-1"} type={"submit"}>
              <PlusCircle/>
            </Button>
          </div>
        </Form.Group>
      </Row>
    </Form>
  );
}