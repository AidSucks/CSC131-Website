import Stack from "react-bootstrap/Stack";
import {fetchAllUsers, removeAuthorizedUser} from "@/app/lib/actions";
import {Button} from "react-bootstrap";
import {PencilFill, TrashFill} from "react-bootstrap-icons";
import {AddAuthorizedUserForm} from "@/app/components/admin/forms/AddAuthorizedUserForm";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {AdminDataTable} from "@/app/components/admin/AdminDataTable";

export default async function AdminUsersPage() {

  const session = await auth();

  if(!session) redirect("/");

  const users = await fetchAllUsers();

  const currentUser = users.find((user) => {
    return user.email === session?.user?.email;
  });

  if(currentUser?.role !== "ADMINISTRATOR") return (
    <h1>You are not authorized to view this page</h1>
  );

  const headers = [
    "Username",
    "Email",
    "Role",
    "Actions"
  ];

  const tableData = users.map(
    (user) => {
      const actionButtons = [
        <Button variant={"primary"}><PencilFill/></Button>
      ]

      if(user !== currentUser)
        actionButtons.push(<Button variant={"danger"} onClick={removeAuthorizedUser.bind(null, user.email)}><TrashFill/></Button>);

      return [
        user.username,
        user.email,
        user.role,
        actionButtons
      ];
    }
  );

  return (
    <Stack direction={"vertical"} gap={2}>
      <h3>Authorized Users</h3>
      <AdminDataTable headers={headers} data={tableData}/>
      <AddAuthorizedUserForm/>
    </Stack>
  );
}