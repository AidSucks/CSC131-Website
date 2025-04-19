'use client'
import { useEffect, useState } from "react";
import PageTitle from "@/app/components/PageTitle";

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

    const res = await fetch("/api/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...form, date: selectedDate, hour: selectedHour}),
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

    const hours = [];
    for (let h = rule.startHour; h <= rule.endHour; h++) {
      hours.push(h);
    }

    return hours; 
  }

  return (
    <div>
        <PageTitle title="Book a Consultation Appointment" />

        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
            <input name="phoneNumber" type="tel" placeholder="Your Phone Number" onChange={handleChange} required />
            <textarea name="comment" placeholder="Any comments?" onChange={handleChange} />

            <label>Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedHour(null);
              }}
              required
            />

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