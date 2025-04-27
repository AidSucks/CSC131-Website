import {Button, Table} from 'react-bootstrap';
import {fetchAllCustomerInquiries} from "@/app/lib/actions";
import {EnvelopeArrowUpFill, TrashFill} from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";

export default async function DashboardCustomersPage() {

  const customerInquiries = await fetchAllCustomerInquiries();

  return (
    <div className={"flex-grow-1"}>
      <h3>Customers</h3>
      <Table border={2} bordered>
        <thead>
          <tr className={"text-center"}>
            <th>#</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Selected Services</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customerInquiries.map((inquiry, index) =>{
            return (
              <tr key={inquiry.id}>
                <td valign={"middle"} align={"center"}>{index + 1}</td>
                <td valign={"middle"} align={"center"}>{inquiry.fullName}</td>
                <td valign={"middle"} align={"center"}>{inquiry.contactEmail}</td>
                <td valign={"middle"} align={"center"}>{inquiry.contactPhone}</td>
                <td valign={"middle"} align={"center"}>{inquiry.servicesRequested}</td>
                <td valign={"middle"} align={"center"}>{inquiry.message}</td>
                <td valign={"middle"} align={"center"}>
                  <Stack direction={"horizontal"} gap={2} className={"justify-content-center"}>
                    <Button variant={"success"}><EnvelopeArrowUpFill/></Button>
                    <Button variant={"danger"}><TrashFill/></Button>
                  </Stack>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  );
}
