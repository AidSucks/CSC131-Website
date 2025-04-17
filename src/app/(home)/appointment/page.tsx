'use client'
import { useState } from "react";
import PageTitle from "@/app/components/PageTitle";


export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", date: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/book-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setStatus(result.message);
  };

  return (
    <div>
        <PageTitle title="Book a Consultation Appointment" />

        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
            <input name="date" type="datetime-local" onChange={handleChange} required />
            <button type="submit">Book Appointment</button>
            <p>{status}</p>
        </form>
    </div>

  );
}