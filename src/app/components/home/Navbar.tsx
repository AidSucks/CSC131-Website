'use client'

import { useState, useEffect } from 'react';
import {usePathname} from "next/navigation";

import Link from 'next/link';

import {Dropdown, NavItem, NavLink} from "react-bootstrap";
import {List} from "react-bootstrap-icons";

export default function Navbar() {
  // Toggle navbar hamburger menu.
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [resourcesHovered, setResourcesHovered] = useState(false);

  // Sticky Navbar
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 300) {
          setIsScrolledDown(true);
        }
        else {
          setIsScrolledDown(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const currentPath = usePathname();

  return (
    <div className="container-fluid position-relative p-0">
      <nav className={`navbar navbar-expand-xl navbar-dark px-5 py-3 py-xl-3 ${isScrolledDown ? 'sticky-top shadow-sm' : ''}`}>
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0">Ron Smithey<br/>Financial Services</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={toggleMenu}
      >
        <List/>
      </button>

      {/* Nav links */}
      <div className={`collapse navbar-collapse ${isOpen ? 'show': ''}`} id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">

          <NavItem>
            <NavLink as={Link} href={"/"} active={currentPath === "/"}>Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink as={Link} href={"/about"} active={currentPath === "/about"}>About Us</NavLink>
          </NavItem>

          <NavItem>
            <NavLink as={Link} href={"/services"} active={currentPath === '/services'}>Services</NavLink>
          </NavItem>

          {/* Resources Dropdown */}
          <Dropdown
            defaultShow={false}
            align={"start"}
            onMouseEnter={() => setResourcesHovered(true)}
            onMouseLeave={() => setResourcesHovered(false)}
            show={resourcesHovered}>

            <Dropdown.Toggle as={Link} href={"/resources"} className={"nav-link"}>Resources</Dropdown.Toggle>

            <Dropdown.Menu className={"m-0"} >
              <Dropdown.Item as={Link} href={"/resources/calculators"}>Financial Calculators</Dropdown.Item>
              <Dropdown.Item as={Link} href={"/resources/news"}>News</Dropdown.Item>
              <Dropdown.Item as={Link} href={"/resources/guidestutorials"}>Guides & Tutorials</Dropdown.Item>
              <Dropdown.Item as={Link} href={"/resources/faqs"}>FAQs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <NavItem>
            <NavLink as={Link} href={"/contact"} active={currentPath === "/contact"}>Contact Us</NavLink>
          </NavItem>

        </div>

      </div>

    </nav>
  </div>
  );
};