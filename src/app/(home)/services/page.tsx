import PageTitle from "@/app/components/home/PageTitle";

export default function Page() {  
  return(
    <>
      <PageTitle title="Services" />

      <div className="container-fluid py-5" style={{marginTop:'-150px', marginBottom:'-100px'}}>
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
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-2-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Investment management</h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-3-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Retirement strategies</h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-4-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Estate conservation</h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-5-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Insurance and annuity products</h4>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-6-circle-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Real Estate Management</h4>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  );
}