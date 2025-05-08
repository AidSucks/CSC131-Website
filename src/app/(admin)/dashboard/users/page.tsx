import Stack from "react-bootstrap/Stack";
import {fetchAllUsers} from "@/app/lib/actions";
import {AddAuthorizedUserForm} from "@/app/components/admin/forms/AddAuthorizedUserForm";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import AuthorizedUserAdminDataGrid from "@/app/components/admin/AuthorizedUserAdminDataGrid";
import prisma from "@/app/lib/prisma";

export default async function AdminUsersPage() {

  const session = await auth();

  if(!session) redirect("/");

  const users = await fetchAllUsers(session.user?.email ?? undefined);

  const currentUser = await prisma.authorizedUser.findUnique({
    where: {
      email: session.user?.email ?? ""
    }
  });

  if(currentUser?.role !== "ADMINISTRATOR") return (
    <h1>You are not authorized to view this page</h1>
  );

  return (
    <Stack direction={"vertical"} gap={2}>
      <AuthorizedUserAdminDataGrid authorizedUsers={users}/>
      <AddAuthorizedUserForm/>
    </Stack>
  );
}