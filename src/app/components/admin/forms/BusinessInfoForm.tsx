'use client';

import {Button, Form, InputGroup, Stack} from "react-bootstrap";
import {BusinessInfo} from "@/app/lib/zod-schemas";
import {updateBusinessInformation} from "@/app/lib/actions";

export function BusinessInfoForm(
  {businessInfo}: {businessInfo: BusinessInfo | null}
) {

  return (
    <Form action={updateBusinessInformation} className={"d-flex w-50"}>

      <Stack gap={3} direction={"vertical"}>
        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Email</InputGroup.Text>
          <Form.Control name={"businessEmail"} type={"email"} defaultValue={businessInfo?.businessEmail ?? ""}/>
        </InputGroup>

        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Phone</InputGroup.Text>
          <Form.Control name={"businessPhone"} type={"tel"} defaultValue={businessInfo?.businessPhone ?? ""}/>
        </InputGroup>

        <Form.Group>
          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Facebook</InputGroup.Text>
            <Form.Control name={"facebook"} type={"url"} defaultValue={businessInfo?.facebook ?? ""}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Youtube</InputGroup.Text>
            <Form.Control name={"youtube"} htmlSize={1} type={"url"} defaultValue={businessInfo?.youtube ?? ""}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Instagram</InputGroup.Text>
            <Form.Control name={"instagram"} type={"url"} defaultValue={businessInfo?.instagram ?? ""}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Twitter</InputGroup.Text>
            <Form.Control name={"twitterX"} type={"url"} defaultValue={businessInfo?.twitterX ?? ""}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Linked-In</InputGroup.Text>
            <Form.Control name={"linkedin"} type={"url"} defaultValue={businessInfo?.linkedin ?? ""}/>
          </InputGroup>
        </Form.Group>

        <InputGroup>
          <InputGroup.Text className={"justify-content-center"} style={{width: 175}}>Business Address</InputGroup.Text>
          <Form.Control name={"businessAddress"} type={"text"} defaultValue={businessInfo?.businessAddress ?? ""}/>
        </InputGroup>

        <Button type={"submit"} className={"w-25 align-self-center"}>Save Changes</Button>
      </Stack>

    </Form>
  );
}