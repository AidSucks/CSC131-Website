import PageTitle from "@/app/components/PageTitle";
import AboutPageComponent from "../../components/AboutPageComponent";

export default function Page() {  
  return(
    <div>
      <PageTitle title="About Us" />
      
      <AboutPageComponent />
    </div>
  );
}