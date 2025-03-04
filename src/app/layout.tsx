import type { Metadata } from "next";

// Libraries Stylesheet
import "../../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../public/lib/animate/animate.min.css";

// Customized Bootstrap Stylesheet
import "../../public/css/bootstrap.min.css";

// Template Stylesheet
import "../../public/css/style.css"

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
      <head>
        {/* Google Web Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>

      {children}
    </html>
  );
}
