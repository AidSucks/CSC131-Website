import PageTitle from "@/app/components/PageTitle";
import {ContactPageComponent} from "@/app/components/PageComponents";


export default function Page() {  
  return(
    <div>
      <PageTitle title="Contact Us" />
      
      <ContactPageComponent />
    </div>
  );
}