import {BusinessInfoForm} from "@/app/components/admin/BusinessInfoForm";
import {auth} from "@/auth";
import {redirect, RedirectType} from "next/navigation";

export default async function BusinessInfoPage() {

  const testInfo = {
    email: "testemail@somedomain.com",
    facebook: "https://www.facebook.com/yourcompany",
    instagram: "https://www.instagram.com/yourcompany",
    linkedin: "https://www.linkedin.com/yourcompany",
    youtube: "https://www.youtube.com/yourcompany",
    twitterX: "https://x.com/yourcompany",
    address: "5101 East La Palma Avenue, Suite #202-D, Anaheim Hills, CA 92807"
  }

  const session = await auth();

  // Or user does not have admin role
  // Either redirect to dashboard or show not authorized page
  if(!auth) redirect("/dashboard", RedirectType.replace);

  return (
    <BusinessInfoForm businessInfo={testInfo}/>
  );
}