import React from "react";

import {Header} from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body>
        <Header/>
          <main style={{minHeight: '100vh'}}>
            {children}
          </main>
        <Footer />

        {/* Back to  button - Need Fix*/}
        {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
          <i className="bi bi-arrow-up"></i></a> */}
    </body>
  );
}