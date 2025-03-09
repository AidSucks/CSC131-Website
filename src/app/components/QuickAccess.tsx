import Link from "next/link"

export default function QuickAccess() {
  return (
    <div className="container-fluid facts py-5 pt-lg-0" style={{marginTop: '-10px'}}>
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="pt-4 text-white mb-2">Contact Us</h2>
                <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Please feel free to contact us with any question.</h5>
                <Link href="/contact"
                className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">Contact Us</Link>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div className="bg-light shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="text-primary pt-4 mb-2">Calculators</h2>
                <h5 className=" text-break mb-0" style={{textAlign: "center"}}>You can review interesting calculators on my site.</h5>
                <Link href="#"
                className="btn btn-primary px-4 mt-4 mb-4 py-md-3 px-md-5">View Calculators</Link>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="pt-4 text-white mb-2">Videos</h2>
                <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>We have interesting videos for you to watch on my site.</h5>
                <Link href="#"
                className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View Videos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
