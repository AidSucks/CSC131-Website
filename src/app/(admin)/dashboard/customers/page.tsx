import {Button, Table} from 'react-bootstrap';
import {fetchAllCustomerInquiries} from "@/app/lib/actions";
import {EnvelopeArrowUpFill, TrashFill} from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";

export default async function DashboardCustomersPage() {

  const customerInquiries = await fetchAllCustomerInquiries();

  if(customerInquiries.length === 0) return (
    <div>
      <h2>No customer submissions yet!</h2>
    </div>
  );

  return (
    <div>
      <h1 className="mb-4">Customers</h1>
      <Table style={{ backgroundColor: '#5c5c5c', color: '#fff', border: '1px solid #444' }}>
        <thead style={{ backgroundColor: '#353535', color: '#fafafa' }}>
          <tr className={"text-center"}>
            <th></th>
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
                <td>{index + 1}</td>
                <td>{inquiry.fullName}</td>
                <td>{inquiry.contactEmail}</td>
                <td>{inquiry.contactPhone}</td>
                <td>{inquiry.servicesRequested}</td>
                <td>{inquiry.message}</td>
                <td>
                  <Stack direction={"horizontal"} gap={2}>
                    <Button><EnvelopeArrowUpFill/></Button>
                    <Button><TrashFill/></Button>
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
