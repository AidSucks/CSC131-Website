import {fetchAllCustomerInquiries} from "@/app/lib/actions";
import CustomersAdminDataGrid from "@/app/components/admin/CustomersAdminDataGrid";

export default async function DashboardCustomersPage() {

  const customerInquiries = await fetchAllCustomerInquiries();

  return (
    <CustomersAdminDataGrid inquiries={customerInquiries}/>
  );
}
