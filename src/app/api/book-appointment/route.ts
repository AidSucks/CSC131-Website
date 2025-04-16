import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
  try {
    const { name, email, date } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = [
      {
        to: email,
        subject: "Your Appointment is Booked",
        text: `Hi ${name},\n\nYour appointment is confirmed for ${date}.`,
      },
      {
        to: process.env.SMTP_USER,
        subject: "New Appointment Booked",
        text: `New appointment booked:\nName: ${name}\nEmail: ${email}\nDate: ${date}`,
      },
    ];

    await Promise.all(
      mailOptions.map((mail) =>
        transporter.sendMail({ from: process.env.SMTP_USER, ...mail })
      )
    );

    return NextResponse.json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
