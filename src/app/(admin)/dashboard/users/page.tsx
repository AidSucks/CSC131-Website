import Stack from "react-bootstrap/Stack";
import {fetchUser} from "@/app/lib/actions";

export default async function AdminUsersPage() {

  const user = await fetchUser();

  return (
    <Stack>
      <h3>{user?.id}</h3>
      <h3>{user?.name}</h3>
      <h3>{user?.email}</h3>
      <h3>{user?.role}</h3>
    </Stack>
  );
}