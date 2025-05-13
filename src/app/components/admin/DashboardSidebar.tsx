'use client';

import {
  House,
  People,
  Postcard,
  Calendar,
  InfoSquare,
  Tools,
  Envelope
} from "react-bootstrap-icons";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Dropdown, Nav} from "react-bootstrap";

import React from "react";
import {logOut} from "@/app/lib/actions";
import {User} from "next-auth";

const adminLinks = [
  {name: "Dashboard", href: "/dashboard", icon: House},
  {name: "Customers", href: "/dashboard/customers", icon: People},
  {name: "Posts", href: "/dashboard/posts", icon: Postcard},
  {name: "Appointments", href: "/dashboard/appointments", icon: Calendar},
  {name: "Users", href: "/dashboard/users", icon: People},
  {name: "Business Info", href: "/dashboard/business-info", icon: InfoSquare},
  {name: "Tools", href: "/dashboard/tools", icon: Tools}
];

export function DashboardSidebar(
  {userData}: {userData: User}) {

  const currentPath = usePathname();

  return (

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary vh-100" style={{width: "280px"}}>

      <Link href={"/dashboard"} className={"d-flex text-decoration-none align-items-center text-body-emphasis"}>
        <div className={"d-flex flex-grow-1 align-items-center justify-content-start ms-3"}>
          <span className="fs-4">Admin Dashboard</span>
        </div>
      </Link>

      <hr/>

      <Nav variant={"pills"} className={"flex-column mb-auto"} activeKey={currentPath}>
        {adminLinks.map(
          (link) => {

            const Icon = link?.icon;

            return(
              <Nav.Item key={link.name}>
                <Nav.Link href={link.href} className={"d-flex"}>
                  <Icon width={24} height={24} className={"me-3"}/>
                  <div className={"d-flex flex-grow-1 justify-content-start"}>{link.name}</div>
                </Nav.Link>
              </Nav.Item>
            );
          }
        )}
      </Nav>

      <hr/>

      <Dropdown className={"d-flex justify-content-center"}>
        <Dropdown.Toggle variant={"outline-primary"} aria-expanded={false} className={"d-flex align-items-center link-body-emphasis text-decoration-none"}>
          <Image width={32} height={32} src={userData.image ?? "/img/user.jpg"} alt={"User profile image"} className={"rounded-5 me-3"}/>
          <strong>{userData.name ? userData.name.split(" ")[0] : "Unknown"}</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className={"shadow"}>
          <Dropdown.Item href={"/"}>Back to Home Page</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={async () => logOut()}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
}