import type { Metadata } from "next";

import "bootstrap/scss/bootstrap.scss";

import React from "react";

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
    <html lang="en">
      {children}
    </html>
  );
}
