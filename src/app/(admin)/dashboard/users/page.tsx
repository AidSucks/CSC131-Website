import Stack from "react-bootstrap/Stack";
import {fetchAllUsers} from "@/app/lib/actions";
import {Button} from "react-bootstrap";
import {TrashFill} from "react-bootstrap-icons";
import {AddAuthorizedUserForm} from "@/app/components/admin/AddAuthorizedUserForm";

export default async function AdminUsersPage() {

  const users = await fetchAllUsers();

  return (
    <Stack gap={3}>
      {
        users.map((user) => {
          return (
            <div key={user.email}>
              <Stack direction={"horizontal"} gap={5}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <Button>
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