import {fetchCustomerAppointments} from "@/app/lib/actions";
import {Button, Stack} from "react-bootstrap";
import dayjs from "dayjs";
import {TrashFill, EnvelopeArrowUpFill, PencilFill} from "react-bootstrap-icons";
import {AdminDataTable} from "@/app/components/admin/AdminDataTable";

export default async function DashboardAppointmentsPage() {

  const customerAppointments = await fetchCustomerAppointments();

  const headers = [
    "Name",
    "Email",
    "Phone",
    "Start",
    "End",
    "Submitted",
    "Message",
    "Actions"
  ];

  const tableData = customerAppointments.map(
    (appointment, index) => {
      return [
        appointment.fullName,
        appointment.contactEmail,
        appointment.contactPhone,
        dayjs(appointment.appointmentStart).format("MMM DD, h:mm A"),
        dayjs(appointment.appointmentEnd).format("MMM DD, h:mm A"),
        dayjs(appointment.submittedDate).format("MMM DD, h:mm A"),
        appointment.message,
        [
          <Button variant={"success"}><EnvelopeArrowUpFill/></Button>,
          <Button variant={"primary"}><PencilFill/></Button>,
          <Button variant={"danger"}><TrashFill/></Button>
        ]
      ]
    });

  return (
    <Stack direction={"vertical"} gap={2}>
      <h3>Appointments</h3>
      <AdminDataTable headers={headers} data={tableData}/>
    </Stack>
  );
}