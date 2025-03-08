import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

export default function CarouselSlides() {
    return(
        <Carousel fade>
            <CarouselItem style={{height: 900}}> 
                <Image src="/img/carousel-1.jpg" priority={true} width={1920} height={1080}
                    style={{marginTop: '-200px', width: '100%', height: 'auto'}} alt="Image" />
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
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
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem style={{height: 900}}> 
                <Image src="/img/carousel-2.jpg" priority={true} width={1920} height={1080}
                        style={{marginTop: '-200px', width: '100%', height: 'auto'}} alt="Image" />
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
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
                </CarouselCaption>
            </CarouselItem>
      </Carousel>
    );
}