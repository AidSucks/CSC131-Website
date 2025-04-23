import { NextResponse } from "next/server";
import prisma  from "../../lib/prisma";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
  try {
    const { name, email, phoneNumber, comment, date, time } = await req.json();

    const appointmentDate = new Date(date);
    appointmentDate.setTime(time);

    const newApptSlot = await prisma.appointmentSlot.create({
      data: {
        date: appointmentDate,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        comment: comment,
      }
    });
    
    const formattedDate = appointmentDate.toLocaleString();

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
        text: `Hi ${name},\n\nYour appointment is confirmed for ${formattedDate}.
        \n\nComments: ${comment}`,
      },
      {
        to: process.env.SMTP_USER,
        subject: "New Appointment Booked",
        text: `New appointment booked:\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}
        \nDate: ${formattedDate}\nComment: ${comment}`,
      },
    ];

    // await Promise.all(
    //   mailOptions.map((mail) =>
    //     transporter.sendMail({ from: process.env.SMTP_USER, ...mail })
    //   )
    // );

    console.log(mailOptions);

    return NextResponse.json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
