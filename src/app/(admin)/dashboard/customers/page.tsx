import {Button, Stack} from 'react-bootstrap';
import {fetchAllCustomerInquiries, removerCustomerInquiry} from "@/app/lib/actions";
import {EnvelopeArrowUpFill, TrashFill} from "react-bootstrap-icons";
import {AdminDataTable} from "@/app/components/admin/AdminDataTable";

export default async function DashboardCustomersPage() {

  const customerInquiries = await fetchAllCustomerInquiries();

  const headers = [
    "#",
    "Name",
    "Email",
    "Phone",
    "Requested Services",
    "Message",
    "Actions"
  ];

  const tableData = customerInquiries.map(
    (inquiry, index) => {
      return [
        index + 1,
        inquiry.fullName,
        inquiry.contactEmail,
        inquiry.contactPhone,
        inquiry.servicesRequested.toString(),
        inquiry.message,
        [
          <Button variant={"success"}><EnvelopeArrowUpFill/></Button>,
          <Button variant={"danger"} onClick={removerCustomerInquiry.bind(null, inquiry.id)}><TrashFill/></Button>
        ]
      ]
    });

  return (
    <Stack direction={"vertical"} gap={2}>
      <h3>Customers</h3>
      <AdminDataTable headers={headers} data={tableData}/>
    </Stack>
  );
}
