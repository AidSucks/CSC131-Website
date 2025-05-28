import type { Metadata } from "next";
import { Nunito, Rubik } from "next/font/google";

// Libraries Stylesheet
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";

const nunito = Nunito({
  weight: ["400", "600", "700", "800"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"]
});

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"]
});

export const metadata: Metadata = {
  title: "Financial Advising Site",
  description: "Created for CSC 131",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className + " " + rubik.className}>
      {children}
    </html>
  );
}
