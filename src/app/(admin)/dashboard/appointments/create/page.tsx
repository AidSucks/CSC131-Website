import {AppointmentForm} from "@/app/components/home/forms/AppointmentForm";
import {fetchOrderedAvailabilityRules} from "@/app/lib/actions";

export default async function CreateAppointmentPage() {

  // Rules will arrive in-order: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
  // Timeslots will be ordered according to time, smallest to largest
  const availabilityRules = await fetchOrderedAvailabilityRules();

  availabilityRules.forEach(
    (rule) => console.log(rule)
  );

  return (
    <div>
      <h3>Schedule an Appointment</h3>
      <AppointmentForm availability={availabilityRules} unavailability={[]}/>
    </div>
  );
}