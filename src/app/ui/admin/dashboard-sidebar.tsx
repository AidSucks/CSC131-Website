'use client';

import {Bootstrap, House, People, Postcard, Calendar, InfoSquare} from "react-bootstrap-icons";

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
  {name: "Business Info", href: "/dashboard/business-info", icon: InfoSquare}
];

export function DashboardSidebar(
  {userData}: {userData: User}) {

  const currentPath = usePathname();

  return (

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px"}}>

      <Link href={"/"} className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"}>
        <Bootstrap width={40} height={32}/>
        <span className="fs-4">Sidebar</span>
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

      <Dropdown className={"d-flex justify-content-start"}>
        <Dropdown.Toggle variant={"primary"} aria-expanded={false} className={"d-flex align-items-center link-body-emphasis text-decoration-none"}>
          <Image width={32} height={32} src={userData.image ?? "/img/user.jpg"} alt={"User profile image"} className={"rounded-5 me-3"}/>
          <strong>{userData.name ? userData.name.split(" ")[0] : "Unknown"}</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className={"shadow"}>
          <Dropdown.Item href={"#"}>Settings</Dropdown.Item>
          <Dropdown.Item href={"#"}>Profile</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={async () => logOut()}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
}