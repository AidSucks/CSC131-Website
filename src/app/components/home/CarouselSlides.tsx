import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
import {CaretLeftFill, CaretRightFill} from "react-bootstrap-icons";

export default function CarouselSlides() {

    return(
        <Carousel
          prevIcon={<CaretLeftFill size={32}/>}
          nextIcon={<CaretRightFill size={32}/>}
          fade touch>
            <CarouselItem className="carousel-item"> 
                <div style={{maxHeight: '900px'}}>
                    <Image src="/img/homepage.jpg" priority={true} width={1920} height={1080}
                        style={{
                            width: '100%',
                            height: 'auto'}} alt="Image" />
                </div>
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '900px'}}>
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            Welcome!
                        </h5>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                            Ron Smithey Financial
                        </h1>
                    </div>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem className="carousel-item"> 
                <div style={{maxHeight: '900px'}}>
                    <Image src="/img/lobby.jpg" priority={true} width={1920} height={1080}
                        style={{
                            width: '100%',
                            height: 'auto'}} alt="Image" />
                </div>
                <CarouselCaption className="d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '900px'}}>
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Can't find what you're looking for?
                      </h5>
                      <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                        Send Us a Message to find out more
                      </h1>
                      <Link
                        href="/contact"
                        className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                      >Contact Us</Link>
                    </div>
                </CarouselCaption>
            </CarouselItem>
      </Carousel>
    );
}