import React from "react";
import {Header} from "@/app/ui/header";

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body data-bs-theme={"light"}>
      <div className={"container"}>
        <Header/>
        <main className={"vh-100"}>
          {children}
        </main>
      </div>
    </body>
  );
}