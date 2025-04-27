import PageTitle from "@/app/components/home/PageTitle";
import {ResourcesPageComponent} from "@/app/components/home/PageComponents";
import Link from "next/link";

export default function Page() {  
  return(
    <div> 
      <PageTitle title="Resources" />
      
      <div>
          <div className="container-fluid facts py-5 pt-lg-0" style={{marginTop: '-100px' , marginBottom: '-100px' }}>
              <div className="container py-5 pt-lg-0">
                  <div className="row gx-0" style={{height: '250px'}}>
                      <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '250px'}}>
                              <h2 className="pt-4 text-white mb-2">News</h2>
                              <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Stay updated with the latest announcements, updates, and trends. We bring you what's new and noteworthy, all in one place.
                              </h5>
                              <Link href="/contact"
                                    className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View News</Link>
                          </div>
                      </div>
                      <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                          <div className="bg-light shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '250px'}}>
                              <h2 className="text-primary pt-4 mb-2">Guides & Tutorials</h2>
                              <h5 className=" text-break mb-0" style={{textAlign: "center"}}>Step-by-step help to get you going. Whether you're a beginner or looking to level up, our guides make learning easy.
                              </h5>
                              <Link href="#"
                                    className="btn btn-primary px-4 mt-4 mb-4 py-md-3 px-md-5">View Guides & Tutorials</Link>
                          </div>
                      </div>
                      <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '250px'}}>
                              <h2 className="pt-4 text-white mb-2">FAQs</h2>
                              <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Got questions? We’ve got answers. Browse common questions and find quick solutions to your most pressing issues.
                              </h5>
                              <Link href="#"
                                    className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View FAQs</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}