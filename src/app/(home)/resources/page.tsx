import PageTitle from "@/app/components/PageTitle";
import {ResourcesPageComponent} from "@/app/components/PageComponents";

export default function Page() {  
  return(
    <div>
      <PageTitle title="Resources" />
      
      <ResourcesPageComponent />
    </div>
  );
}