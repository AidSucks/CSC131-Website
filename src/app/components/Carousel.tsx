'use client'
import { useEffect } from 'react';

import Image from "next/image";
import Link from "next/link";

export default function Carousel() {

    let carouselItems: HTMLCollection;
    let carouselItemsCount = 0;
    let currentItem = 0;

    let intervalID: NodeJS.Timeout;

    function nextCarouselItem() {
        clearTimeout(intervalID);
        const prevItem = currentItem;
        currentItem = (currentItem === carouselItemsCount-1) ? 0 : currentItem+1;
        
        activateNewItem(prevItem); 
    }

    function prevCarouselItem() {
        clearTimeout(intervalID);
        const prevItem = currentItem;
        currentItem = (currentItem === 0) ? carouselItemsCount-1 : currentItem-1;
        
        activateNewItem(prevItem);
    }

    function activateNewItem(prevItem: number) {
        carouselItems[prevItem].classList.remove("active");
        carouselItems[currentItem].classList.add("active");

        clearTimeout(intervalID);
        intervalID = setTimeout(nextCarouselItem, 6000);
    }

    useEffect(() => {
        if(!carouselItems){
            carouselItems = document.getElementsByClassName("carousel-inner")[0].children;
            carouselItemsCount = carouselItems.length;
        }

        setTimeout(nextCarouselItem, 6000);
    });
    
    return(
        <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src="/img/carousel-1.jpg" priority={true} width={1920} height={1080} style={{width: '100%', height: 'auto'}} alt="Image" />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{maxWidth: '900px'}}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Introduction
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Overview of Ron Smithey Financial Services
                </h1>
                <Link
                  href="/services"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >Services</Link>
                <Link
                  href="/contact"
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <Image src="/img/carousel-2.jpg" width={1920} height={1080} style={{width: '100%', height: 'auto'}} alt="Image" />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{maxWidth: '900px'}}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Another Introduction
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Commitment to Trusted Financial Guidance
                </h1>
                <Link
                  href="/#"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >Book an Appointment</Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
          onClick={prevCarouselItem}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
          onClick={nextCarouselItem}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}