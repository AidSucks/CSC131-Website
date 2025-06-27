import CarouselSlides from "@/app/components/home/CarouselSlides";
import QuickAccess from "@/app/components/home/QuickAccess";
import Testimonials from "@/app/components/home/Testimonials";
import NewsPage from "@/app/(home)/resources/news/page";
import {Articles} from "@/app/components/home/Articles";

export default function Home() {
    return (
        <>
            <CarouselSlides />

            <Testimonials />

            <QuickAccess />

        </>
    );
}
