import CarouselSlides from "@/app/components/CarouselSlides"

import {AboutPageComponent, ContactPageComponent} from "@/app/components/PageComponents";


export default function Home() {
  return (
    <>
      <CarouselSlides />
      
      <div>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate. Accusamus inventore magnam nihil, consequatur saepe est doloremque quas nostrum fuga esse temporibus similique recusandae tenetur. Quas enim temporibus aperiam?
        </p>
      </div>

      <AboutPageComponent />
      <ContactPageComponent />
    </>
  );
}
