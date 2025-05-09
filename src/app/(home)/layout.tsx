import React from "react";

import {Header} from "../components/home/Header";
import Footer from "../components/home/Footer";
import BackToTopButton from "../components/home/BackToTopButton";

import "../../../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../../public/lib/animate/animate.min.css";

// Customized Bootstrap Stylesheet
import "../../../public/css/bootstrap.min.css";

// Template Stylesheet
import "../../../public/css/style.css"

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body>
        <Header/>
          <main style={{minHeight: '100vh'}}>
            {children}
          </main>
          <BackToTopButton/>
        <Footer/>
    </body>
  );
}