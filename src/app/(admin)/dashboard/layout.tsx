import React from "react";

import {auth} from "@/auth";
import {DashboardSidebar} from "@/app/components/admin/DashboardSidebar";
import {redirect} from "next/navigation";

export default function AdminDashboardLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body data-bs-theme={"light"}>
      <div className={"d-flex"}>
        <AdminDashboardSidebar/>
        <main className={"min-vh-100 d-flex flex-grow-1 p-3 overflow-auto"}>
          {children}
        </main>
      </div>
    </body>
  );
}

async function AdminDashboardSidebar() {

  const session = await auth();

  if(!session || !session.user) redirect("/api/auth/signin");

  return <DashboardSidebar userData={session.user}/>
}