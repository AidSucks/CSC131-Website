import {BusinessInfoForm} from "@/app/components/admin/forms/BusinessInfoForm";
import {auth} from "@/auth";
import {fetchAllUsers, fetchBusinessInfo} from "@/app/lib/actions";
import {Stack} from "react-bootstrap";

export default async function BusinessInfoPage() {

  const session = await auth();
  const users = await fetchAllUsers();

  const currentUser = users.find((user) => {
    return user.email === session?.user?.email;
  });

  if(currentUser?.role !== "ADMINISTRATOR") return (
    <h1>You are not authorized to view this page</h1>
  );

  const businessInfo = await fetchBusinessInfo();

  return (
    <Stack direction={"vertical"} gap={3}>
      <h3>Public Business Information</h3>
      <BusinessInfoForm businessInfo={businessInfo}/>
    </Stack>
  );
}