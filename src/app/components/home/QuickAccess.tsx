import Link from "next/link"

export default function QuickAccess() {
  return (
    <div className="container-fluid facts py-5 pt-lg-0" style={{marginTop: '-10px', marginBottom: '-100px'}}>
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="pt-4 text-white mb-2">Contact</h2>
                <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Can't find what you're looking for? Get in touch with Ron</h5>
                <Link href="/contact"
                className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">Contact</Link>
            </div>
          </div>

          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div className="bg-light shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="text-primary pt-4 mb-2">Calculators</h2>
                <h5 className=" text-break mb-0" style={{textAlign: "center"}}>Click below to see the financial calculators we have to offer</h5>
                <Link href={"/resources/calculators"}
                className="btn btn-primary px-4 mt-4 mb-4 py-md-3 px-md-5">View Calculators</Link>
            </div>
          </div>

          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-primary shadow d-flex flex-column align-items-center justify-content-center p-4" style={{height: '220px'}}>
                <h2 className="pt-4 text-white mb-2">Resources</h2>
                <h5 className="text-white text-break mb-0" style={{textAlign: "center"}}>Check out some of the great resources we have available to you</h5>
                <Link href="/resources"
                className="btn btn-light quick-access-btn px-4 mt-4 mb-4 py-md-3 px-md-5">View Resources</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
