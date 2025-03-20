import PageTitle from "@/app/components/PageTitle";
import {ResourcesPageComponent} from "@/app/components/PageComponents";
import Link from "next/link";

export default function Page() {  
  return(
    <div> 
      <PageTitle title="Resources" />
        <div className="container-fluid facts py-5 pt-lg-0" style={{marginTop: '-100px', marginBottom: '-125px'}}>
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                        <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                            <h2 className="pt-4 text-white mb-2">NEWS</h2>
                            <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Regular updates on market trends, financial insights, and economic news.</h5>
                            <Link href="/resources/news"
                                  className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View News</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="bg-light shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                            <h2 className="text-primary pt-4 mb-2">GUIDES/TUTORIALS</h2>
                            <h5 className=" text-break mb-0" style={{textAlign: "center"}}>Step-by-step guides covering topics like budgeting, investing, and financial planning.</h5>
                            <Link href="/resources/guidestutorials"
                                  className="btn btn-primary px-4 mt-4 mb-4 py-md-3 px-md-5">View Guides & Tutorials</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                            <h2 className="pt-4 text-white mb-2">FAQs</h2>
                            <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Common questions regarding financial strategies, market fluctuations, and service offerings.</h5>
                            <Link href="/resources/faqs"
                                  className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}