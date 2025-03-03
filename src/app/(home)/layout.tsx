import React from "react";

import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body>
      <div>
        <Header/>
          <main>
            {children}
          </main>
        <Footer />

        {/* Back to  button */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
          <i className="bi bi-arrow-up"></i></a>

      </div>
    </body>
  );
}