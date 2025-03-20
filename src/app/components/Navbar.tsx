'use client'
import { useState, useEffect } from 'react';
import {clsx} from "clsx";
import {usePathname} from "next/navigation";

import Link from 'next/link';

import businessInfo from "../../../public/data/businessInfo.json";

export default function Navbar() {
  // Toggle navbar hamburger menu.
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Set isHovered to true when user hovers over a dropdown menu.
  const [isHovered, setIsHovered] = useState(false);

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
      <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${isScrolledDown ? 'sticky-top shadow-sm' : ''}`}>
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Ron Smithey<br/>Financial Services</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={toggleMenu}
      >
        <span className="fa fa-bars"></span>
      </button>

      {/* Nav links */}
      <div className={`collapse navbar-collapse ${isOpen ? 'show': ''}`} id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="/" className={clsx("nav-item nav-link", {"active": currentPath === "/"})}>
              Home</Link>

          <Link href="/about" className={clsx("nav-item nav-link", {"active": currentPath === "/about"})}>
              About Us</Link>

          <div className="nav-item dropdown">
            <Link
              href="/services"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              >Services</Link>

            <div className={`dropdown-menu m-0 ${isHovered ? 'show': ''}`} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
              <Link href="/services/advisory" className="dropdown-item">Financial Planning & Advisory</Link>
              <Link href="/services/wealth-mangement" className="dropdown-item">Wealth Management</Link>
            </div>
          </div>
          
          <div className={"nav-item dropdown"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

              <Link href={"/resources"} className={"nav-link dropdown-toggle"}>Resources</Link>
              <div className={`dropdown-menu m-0 ${isHovered ? 'show': ''}`}>
                  <Link href={"resources/news"} className={"dropdown-item"}>News</Link>
                  <Link href={"resources/guidestutorials"} className={"dropdown-item"}>Guides & Tutorials</Link>
                  <Link href={"resources/faqs"} className={"dropdown-item"}>FAQs</Link>
              </div>

          </div>

          <Link href="/contact" className={clsx("nav-item nav-link", {"active": currentPath === "/contact"})}>
              Contact Us</Link>

        </div>

        <Link href="/api/auth/signin" className="btn btn-primary py-2 px-5 ms-5">Sign In</Link>

      </div>


      
      
    </nav>  
  </div>
  );
};