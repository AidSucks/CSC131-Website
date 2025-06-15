'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createCustomerInquiry(formData: FormData) {
  const fullName = formData.get("fullName") || "Unknown";
  const email = formData.get("contactEmail") || "Not provided";
  const phone = formData.get("contactPhone") || "Not provided";
  const message = formData.get("message") || "No message";
  const selectedServices = formData.getAll("services") as string[];

  const body = `
New customer inquiry received:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Selected Services: ${selectedServices.join(", ") || "None"}

Message:
${message}
`;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: `Customer Inquiry from ${fullName}`,
      text: body,
      headers: {
        "Reply-To": email as string
      }
    });

  } catch (err) {
    console.error("Resend error:", err);
  }
}
