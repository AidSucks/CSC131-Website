import React from "react";

import {DashboardSidebar} from "@/app/ui/admin/dashboard-sidebar";

export default function AdminDashboardLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <body data-bs-theme={"dark"}>
      <div className={"d-flex"}>
        <DashboardSidebar/>
        <div className={"min-vh-100 p-3"}>
          {children}
        </div>
      </div>
    </body>
  );
}