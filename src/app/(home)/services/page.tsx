import PageTitle from "@/app/components/PageTitle";
import {ServicesPageComponent} from "@/app/components/PageComponents";

export default function Page() {  
  return(
    <div>
      <PageTitle title="Services" />
      
      <ServicesPageComponent />
    </div>
  );
}