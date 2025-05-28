import PageTitle from "@/app/components/home/PageTitle";
import {fetchOrderedAvailabilityRules, fetchUnavailabilityRules} from "@/app/lib/actions";
import {AppointmentForm} from "@/app/components/home/forms/AppointmentForm";

export default async function AppointmentPage() {

  const availabilityRules = await fetchOrderedAvailabilityRules();
  const unavailabilityRules = await fetchUnavailabilityRules();

  return (
    <div>
        <PageTitle title="Schedule a Consultation Appointment" />

        <div className="container-fluid py-5" style={{marginTop: '-150px', marginBottom: '-100px'}}>
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Schedule Here</h5>
                <h1 className="mb-0">Please fill out the appointment form</h1>
            </div>

            <AppointmentForm
              availability={availabilityRules}
              unavailability={unavailabilityRules}
            />

          </div>
        </div>
    </div>
  );
}