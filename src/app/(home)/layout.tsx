import React from "react";

import {Header} from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
        <body>
            <Header/>
                <main style={{minHeight: '100vh'}}>
                    {children}
                </main>
                <BackToTopButton/>
            <Footer />
        </body>
  );
}