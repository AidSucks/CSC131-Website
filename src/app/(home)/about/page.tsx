import PageTitle from "@/app/components/PageTitle";
import {AboutPageComponent} from "@/app/components/PageComponents";


export default function Page() {
  return(
    <div>
      <PageTitle title="About Us" />

      <AboutPageComponent/>
    </div>
  );
}