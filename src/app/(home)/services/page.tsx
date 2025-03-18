import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";


export default function Page() {  
  return(
    <>
      <PageTitle title="Services" />

      <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '1000px'}}>
                <h2 className="fw-bold text-primary text-uppercase">Our Services</h2>
                <h4 className="mb-0">
                  While developing a customized financial program, we will walk you through a step-by-step process that will help you feel confident in your decisions. Once your goals have been established, we will customize appropriate strategies to suit your vision and objectives. We can help you execute a sound financial program utilizing the following products and services through LPL Financial:
                </h4>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                          <i className="bi bi-1-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Tax management</h4>
                        {/* <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-2-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Investment management</h4>
                        {/* <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-3-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Retirement strategies</h4>
                        {/* <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-4-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Estate conservation</h4>
                        {/* <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-5-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Insurance and annuity products</h4>
                        {/* <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div> */}
            </div>
        </div>
      </div>

      <Testimonials/>
    </>
  );
}