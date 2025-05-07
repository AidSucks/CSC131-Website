import {fetchCustomerAppointments} from "@/app/lib/actions";
import AppointmentsAdminDataGrid from "@/app/components/admin/AppointmentsAdminDataGrid";

export default async function DashboardAppointmentsPage() {

  const customerAppointments = await fetchCustomerAppointments();

  return (
    <AppointmentsAdminDataGrid appointments={customerAppointments}/>
  );
}