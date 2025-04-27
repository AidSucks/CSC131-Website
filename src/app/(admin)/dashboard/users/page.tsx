import Stack from "react-bootstrap/Stack";
import {fetchAllUsers, removeAuthorizedUser} from "@/app/lib/actions";
import {Button} from "react-bootstrap";
import {TrashFill} from "react-bootstrap-icons";
import {AddAuthorizedUserForm} from "@/app/components/admin/forms/AddAuthorizedUserForm";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

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

  return (
    <Stack gap={3}>
      {
        users.map((user) => {

          if(user === currentUser) return;

          const handleClick = removeAuthorizedUser.bind(null, user.email);

          return (
            <div key={user.email}>
              <Stack direction={"horizontal"} gap={5}>
                <div>{user.username}</div>
                <div>{user.role}</div>
                <div>{user.email}</div>
                <Button onClick={handleClick}>
                  <TrashFill/>
                </Button>
              </Stack>
              <hr/>
            </div>
          );
        })
      }
      <AddAuthorizedUserForm/>
    </Stack>
  );
}