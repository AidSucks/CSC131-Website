import {Container} from "react-bootstrap";
import {redirect} from "next/navigation";
import {auth} from "@/auth";
import {LoginCard} from "@/app/components/admin/LoginCard";

export default async function LoginPage() {

  const session = await auth();

  if(session) redirect("/dashboard");

  return (
    <body data-bs-theme={"dark"}>
      <Container className={"d-flex flex-grow-1 vh-100 align-items-center justify-content-center"}>
        <LoginCard/>
      </Container>
    </body>
  );
}
