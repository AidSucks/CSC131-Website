import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
import { relative } from "path";

export default function CarouselSlides() {
    return(
        <Carousel fade>
            <CarouselItem className="carousel-item"> 
                <div style={{maxHeight: '900px'}}>
                    <Image src="/img/carousel-1.jpg" priority={true} width={1920} height={1080}
                        style={{
                            width: '100%',
                            height: 'auto'}} alt="Image" />
                </div>
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '900px'}}>
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            Welcome to our home page!
                        </h5>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                            Ron Smithey Financial Services
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
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="carousel-item"> 
                <div style={{maxHeight: '900px'}}>
                    <Image src="/img/carousel-2.jpg" priority={true} width={1920} height={1080}
                        style={{
                            width: '100%',
                            height: 'auto'}} alt="Image" />
                </div>
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '900px'}}>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                            Book a consultation appointment today!
                        </h1>
                        <Link
                        href="/appointment"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        >Schedule your Appointment</Link>
                    </div>
                </CarouselCaption>
            </CarouselItem>
      </Carousel>
    );
}