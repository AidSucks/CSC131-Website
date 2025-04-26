import PageTitle from "@/app/components/PageTitle";
import {fetchAvailabilityRules, fetchUnavailabilityRules} from "@/app/lib/actions";
import {AppointmentForm} from "@/app/components/AppointmentForm";
import {AvailabilityRule, DAYS} from "@/app/lib/zod-schemas";

export default async function AppointmentPage() {

  const l = 7;

  const availabilityRules = await fetchAvailabilityRules();
  const unavailabilityRules = await fetchUnavailabilityRules();

  // availability rules arrive possibly disordered
  availabilityRules.sort((a, b) => DAYS[a.dayOfWeek] - DAYS[b.dayOfWeek]);

  // timeslots possible disordered
  //TODO Need to remove timeslots that intersect with unavailability rules
  availabilityRules.forEach(
    rule => {
      rule.allowedAppointments.sort((a, b) => a.startHour - b.startHour)
    }
  );

  // availability rules may not contain all rules defined
  let filteredRules: (AvailabilityRule | null)[] = new Array(l).fill(null);

  // if not all rules are present, order them correctly for dayjs: SUNDAY = 0, SATURDAY = 6;
  if(availabilityRules.length < l && availabilityRules.length > 0) {
    filteredRules = filteredRules.map(
      (rule, index) => {
        if(availabilityRules[index].dayOfWeek === DAYS[index]) return availabilityRules[index];
        return rule;
      }
    );
  }else if(availabilityRules.length === l) {
    filteredRules = availabilityRules;
  }

  return (
    <div>
        <PageTitle title="Schedule a Consultation Appointment" />

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Schedule Here</h5>
                <h1 className="mb-0">Please fill out the appointment form</h1>
            </div>

            <AppointmentForm
              availability={filteredRules}
              unavailability={unavailabilityRules}
            />

          </div>
        </div>
    </div>
  );
}