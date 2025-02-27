'use client'

import {Bootstrap} from "react-bootstrap-icons";

import Link from "next/link";
import {clsx} from "clsx";
import {usePathname} from "next/navigation";

const links = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Resources", href: "/resources"},
  {name: "Services", href: "/services"},
  {name: "Contact", href: "/contact"},
];

export function Header() {

  const currentPath = usePathname();

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

        <div className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"}>
          <Bootstrap width={40} height={32}/>
          <span className="fs-4">Simple header</span>
        </div>

        <ul className="nav nav-pills">

          {links.map((link) => {
            return (
              <li className={"nav-item"} key={link.href}>
                <Link href={link.href} className={
                  clsx("nav-link", {"active": currentPath === link.href})
                }>
                  {link.name}
                </Link>
              </li>
            );
          })}

        </ul>

        <div className={"ms-md-5"}>
          <button type="button" className="btn btn-outline-primary me-2">Sign-Up</button>
        </div>

      </header>
    </>
  );
}