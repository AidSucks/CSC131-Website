import {fetchCustomerAppointments} from "@/app/lib/actions";
import {Button, Table} from "react-bootstrap";
import dayjs from "dayjs";
import Stack from "react-bootstrap/Stack";
import {TrashFill, EnvelopeArrowUpFill, PencilFill} from "react-bootstrap-icons";

export default async function DashboardAppointmentsPage() {

  const customerAppointments = await fetchCustomerAppointments();

  return (
    <div className={"flex-grow-1"}>
      <h3>Appointments</h3>
      <Table bordered border={2}>
        <thead>
          <tr className={"text-center"}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Start</th>
            <th>End</th>
            <th>Message</th>
            <th>Submitted</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customerAppointments.map(
            appointment => {
              return (
                <tr key={appointment.id}>
                  <td valign={"middle"} align={"center"}>{appointment.fullName}</td>
                  <td valign={"middle"} align={"center"}>{appointment.contactEmail}</td>
                  <td valign={"middle"} align={"center"}>{appointment.contactPhone}</td>
                  <td valign={"middle"} align={"center"}>{dayjs(appointment.appointmentStart).format("MMM DD, h:mm A")}</td>
                  <td valign={"middle"} align={"center"}>{dayjs(appointment.appointmentEnd).format("MMM DD, h:mm A")}</td>
                  <td valign={"middle"} align={"center"}>{appointment.message}</td>
                  <td valign={"middle"} align={"center"}>{dayjs(appointment.submittedDate).format("MMM DD, h:mm A")}</td>
                  <td valign={"middle"} align={"center"}>
                    <Stack direction={"horizontal"} gap={2} className={"justify-content-center"}>
                      <Button variant={"success"}><EnvelopeArrowUpFill/></Button>
                      <Button variant={"primary"}><PencilFill/></Button>
                      <Button variant={"danger"}><TrashFill/></Button>
                    </Stack>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>

      </Table>
    </div>
  );
}