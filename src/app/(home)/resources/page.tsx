import PageTitle from "@/app/components/home/PageTitle";
import Link from "next/link";

export default function Page() {  
  return(
      <div>
          <PageTitle title="Resources" />

          <div className="container-fluid facts py-4">
              <div className="container py-5">
                  <div className="row gx-4 gy-4">
                      <div className="col-lg-4 col-md-6">
                          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4 h-100 rounded">
                              <h2 className="pt-2 text-white mb-2">News</h2>
                              <h5 className="text-white text-center mb-0">
                                  Stay updated with the latest announcements, updates, and trends. We bring you what's new and noteworthy, all in one place.
                              </h5>
                              <Link href="/resources/news" className="btn btn-light px-4 mt-4 mb-2">View News</Link>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="bg-light shadow d-flex flex-column align-items-center justify-content-center p-4 h-100 rounded">
                              <h2 className="text-primary pt-2 mb-2">Guides & Tutorials</h2>
                              <h5 className="text-center mb-0">
                                  Step-by-step help to get you going. Whether you're a beginner or looking to level up, our guides make learning easy.
                              </h5>
                              <Link href="/resources/guidestutorials" className="btn btn-primary px-4 mt-4 mb-2">View Guides & Tutorials</Link>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4 h-100 rounded">
                              <h2 className="pt-2 text-white mb-2">FAQs</h2>
                              <h5 className="text-white text-center mb-0">
                                  Got questions? We’ve got answers. Browse common questions and find quick solutions to your most pressing issues.
                              </h5>
                              <Link href="/resources/faqs" className="btn btn-light px-4 mt-4 mb-2">View FAQs</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
}