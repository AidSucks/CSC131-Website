'use client'
import { useEffect, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PageTitle from "@/app/components/PageTitle";
import dayjs from "dayjs";

type AvailabilityRule = {
  id: number;
  dayOfWeek: number;
  startHour: number;
  endHour: number;
}

export default function Page() {
  const [availabilityRules, setAvailabilityRules] = useState<AvailabilityRule[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "", comment: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("api/slot-availability")
      .then((res) => res.json())
      .then(setAvailabilityRules);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...form, date: selectedDate, time: selectedTime}),
    });

    const result = await res.json();
    setStatus(result.message);
  };

  const availableHours = () => {
    if(!selectedDate)
      return [];

    const selectedDay = new Date(selectedDate).getDay();
    const rule = availabilityRules.find((rule) => rule.dayOfWeek === selectedDay);

    if(!rule)
      return [];

    let timeslots : Date[] = [];
    for (let h = rule.startHour; h <= rule.endHour; h++) {
      let appointmentTime = new Date();
      appointmentTime.setHours(h, 0, 0, 0);

      timeslots.push(appointmentTime);
    }

    return timeslots; 
  }

  function getMinDate() {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1); // Offset it by 1 day. User can't book an appointment until next day.
    return minDate.toISOString().split("T")[0];
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

            <form onSubmit={handleSubmit} className="container py-5" style={{maxWidth: '900px'}}>
                <div className="row g-3">
                  <div className="col-12">
                      <input name="name" placeholder="Your Name" 
                        className="form-control border-0 bg-light px-4" style={{height: '55px'}} onChange={handleChange} required />
                    </div>
                  <div className="col-12">
                      <input name="email" type="email" placeholder="Your Email" 
                        className="form-control border-0 bg-light px-4" style={{height: '55px'}} onChange={handleChange} required />
                  </div>
                    <div className="col-12">
                      <input name="phoneNumber" type="tel" placeholder="Your Phone Number" 
                        className="form-control border-0 bg-light px-4" style={{height: '55px'}} onChange={handleChange} required />
                    </div>
                  <div className="col-12">
                      <textarea name="comment" placeholder="Any comments?" 
                        className="form-control border-0 bg-light px-4" rows={3} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="mt-4 px-4" >Select Date and Time:</label>
                  </div>

                <div className="col-12">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                    disablePast={true}

                    minDate={dayjs(getMinDate())}

                    // Disable Saturday and Sunday in the datepicker.
                    shouldDisableDate={(day) => {
                      const dayOfWeek = dayjs(day).day();
                      let shouldDisable = false;

                      if (dayOfWeek === 0 || dayOfWeek === 6)
                        shouldDisable = true;

                      return shouldDisable;
                    }}
                    
                    onChange={(newValue) => {
                      setSelectedDate(`${newValue}`);
                      setSelectedTime(null);
                      (document.getElementById("date-display") as HTMLDivElement).innerText = `${newValue?.format('dddd, MMMM D, YYYY')}`;
                      (document.getElementById("time-display") as HTMLDivElement).innerText = "";
                    }}
                    />
                  </LocalizationProvider>
                </div>
                  
                <div className="mx-4 col-12">
                  {
                    availableHours().map((appointmentTime) => (
                      <button type="button" key={appointmentTime.getTime()}
                      className={`btn btn-primary mx-2 my-2 py-3 px-4 border rounded ${selectedTime === appointmentTime.getTime() ? "bg-blue-500 text-white disabled": "active"}`}
                      onClick={() => {
                        setSelectedTime(appointmentTime.getTime());
                        (document.getElementById("time-display") as HTMLDivElement).innerText = appointmentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                        }}>
                        {`${appointmentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`}
                      </button>
                    ))
                  }
                </div>

                <div className="col-12 py-5">
                  <label className="mt-4 px-4">Selected Date:</label>
                  <h5 className="mt-2 px-5" id="date-display"></h5>

                  <label className="mt-4 px-4">Selected Time:</label>
                  <h5 className="mt-2 px-5" id="time-display"></h5>
                </div>
                
                <div className="col-12">
                  <button type="submit" className="btn btn-primary py-3" style={{minWidth: '50%', marginLeft: '25%'}} disabled={!selectedTime}>Book Appointment</button>
                </div>
                <p>{status}</p>
            </form>
          </div>
        </div>
    </div>
  );
}