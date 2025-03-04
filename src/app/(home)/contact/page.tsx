import PageTitle from "@/app/components/PageTitle";

export function ContactPageComponent() {
  return(
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate. Accusamus inventore magnam nihil, consequatur saepe est doloremque quas nostrum fuga esse temporibus similique recusandae tenetur. Quas enim temporibus aperiam?
      </p>  
    </div>
  );
}

export default function Page() {  
  return(
    <div>
      <PageTitle title="Contact Us" />
      
      <ContactPageComponent />
    </div>
  );
}