'use client';

import {Button, Form, InputGroup, Stack} from "react-bootstrap";

interface BusinessInfo {
  phone?: string,
  email?: string,
  address?: string,
  facebook?: string,
  instagram?: string,
  linkedin?: string,
  youtube?: string,
  twitterX?: string
}

export function BusinessInfoForm({businessInfo}: {businessInfo: BusinessInfo}) {
  return (
    <Form>

      <Stack gap={3}>
        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Email</InputGroup.Text>
          <Form.Control type={"email"} defaultValue={businessInfo.email}/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Phone</InputGroup.Text>
          <InputGroup.Text>(</InputGroup.Text>
          <Form.Control type={"number"} maxLength={3} minLength={3}/>
          <InputGroup.Text>)</InputGroup.Text>
          <Form.Control type={"number"} maxLength={3} minLength={3}/>
          <InputGroup.Text>-</InputGroup.Text>
          <Form.Control type={"number"} maxLength={4} minLength={4}/>
        </InputGroup>

        <Form.Group>
          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Facebook</InputGroup.Text>
            <Form.Control type={"url"} defaultValue={businessInfo.facebook}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Youtube</InputGroup.Text>
            <Form.Control htmlSize={1} type={"url"} defaultValue={businessInfo.youtube}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Instagram</InputGroup.Text>
            <Form.Control type={"url"} defaultValue={businessInfo.instagram}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Twitter</InputGroup.Text>
            <Form.Control type={"url"} defaultValue={businessInfo.twitterX}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Linked-In</InputGroup.Text>
            <Form.Control type={"url"} defaultValue={businessInfo.linkedin}/>
          </InputGroup>
        </Form.Group>

        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Address</InputGroup.Text>
          <Form.Control type={"text"} defaultValue={businessInfo.address}/>
        </InputGroup>

        <Button type={"submit"} className={"w-25 align-self-center"}>Save Changes</Button>
      </Stack>

    </Form>
  );
}