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
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
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

    // const res = await fetch("/api/book-appointment", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({...form, date: selectedDate, hour: selectedHour}),
    // });

    // const result = await res.json();
    // setStatus(result.message);
  };

  const availableHours = () => {
    if(!selectedDate)
      return [];

    const selectedDay = new Date(selectedDate).getDay();
    const rule = availabilityRules.find((rule) => rule.dayOfWeek === selectedDay);

    if(!rule)
      return [];

    const hours = [];
    for (let h = rule.startHour; h <= rule.endHour; h++) {
      hours.push(h);
    }

    return hours; 
  }

  function getMinDate() {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1); // Offset it by 1 day. User can't book an appointment until next day.
    return minDate.toISOString().split("T")[0];
  }
  

  return (
    <div>
        <PageTitle title="Book a Consultation Appointment" />

        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
            <input name="phoneNumber" type="tel" placeholder="Your Phone Number" onChange={handleChange} required />
            <textarea name="comment" placeholder="Any comments?" onChange={handleChange} />

            <div>
              <label>Selected Date:</label>
              <h4 id="date-display"></h4>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                disablePast={true}

                minDate={dayjs(getMinDate())}

                // Disable Saturday and Sunday in the datepicker.
                shouldDisableDate={(date) => {
                  const dayOfWeek = new Date(date).getDay();
                  if (dayOfWeek === 0 || dayOfWeek === 6)
                  return true
                }}
                
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                  setSelectedHour(null);
                  setForm({ ...form, date: newValue });
                  document.getElementById("date-display").innerText = newValue;
                }}
                />
              </LocalizationProvider>
            </div>

            <div className="space-x-2">
              {
                availableHours().map((hour) => (
                  <button type="button" key={hour}
                  className={`px-4 py-2 border rounded ${selectedHour === hour ? "bg-blue-500 text-white": ""}`}
                  onClick={() => setSelectedHour(hour)}>
                    {`${hour}:00`}
                  </button>
                ))
              }
            </div>

            <button type="submit" disabled={!selectedHour}>Book Appointment</button>
            <p>{status}</p>
        </form>
    </div>

  );
}