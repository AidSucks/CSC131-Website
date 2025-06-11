'use client';

import { Carousel, CarouselItem } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import testimonials from "../../../../public/data/Testimonials.json";

export default function Testimonials() {
    const maxCardsCount = 3;
    const testimonialsCount = testimonials.length;

    const slidesCount = testimonialsCount < maxCardsCount ? 1 : testimonialsCount;
    const cardsCount = testimonialsCount < maxCardsCount ? testimonialsCount : maxCardsCount;

    let carouselItems: number[][] = Array.from(Array(slidesCount), () => new Array(cardsCount));

    let adjustedIndex = 0;
    for (let i = 0; i < slidesCount; i++) {
        for (let x = i; x < cardsCount + i; x++) {
            adjustedIndex = x % testimonialsCount;
            carouselItems[i][x - i] = adjustedIndex;
        }
    }

    return (
        <div className="container-fluid py-5 fadeInUp">
            <div className="container py-5">
                <div
                    className="section-title text-center position-relative pb-3 mb-4 mx-auto"
                    style={{ maxWidth: "600px" }}
                >
                    <h2 className="fw-bold text-primary text-uppercase">Testimonials</h2>
                    <h4 className="mb-0">What Our Clients Say about Our Services</h4>
                </div>

                <Carousel className="carousel" interval={4500}>
                    {carouselItems.map((row, rowIndex) => (
                        <CarouselItem key={rowIndex} className="testimonial-item bg-light my-4">
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}
                            >
                                {row.map((col, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={colIndex === 1 ? "shadow bg-white z-0" : ""}
                                        style={{ minWidth: "20rem" }}
                                    >
                                        <div className="testimonial-item bg-light my-4">
                                            <div
                                                className="d-flex align-items-center border-bottom pt-5 pb-4 px-5"
                                                style={colIndex === 1 ? { backgroundColor: "white" } : {}}
                                            >
                                                <div className="ps-4">
                                                    <h4 className="text-primary mb-1">{testimonials[col].clientName}</h4>
                                                    <small className="text-uppercase">Profession</small>
                                                </div>
                                            </div>
                                            <div
                                                className="pt-4 pb-5 px-5"
                                                style={colIndex === 1 ? { backgroundColor: "white" } : {}}
                                            >
                                                {testimonials[col].statement}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Stack>
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>

            <style jsx global>{`
                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    filter: invert(0%) brightness(0.2); /* dark gray */
                    background-size: 100% 100%;
                    width: 2rem;
                    height: 2rem;
                }

                .carousel-control-prev,
                .carousel-control-next {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}
