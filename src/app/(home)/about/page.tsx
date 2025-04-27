import PageTitle from "@/app/components/home/PageTitle";

import businessInfo from "../../../../public/data/businessInfo.json";
import {TelephoneFill} from "react-bootstrap-icons";
import Image from "next/image";


export default function Page() {
  return(
    <div>
      <PageTitle title="About Us" />

      {/* <AboutPageComponent/> */}

      <div className="container-fluid py-5 fadeInUp">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">Mission Statement</h1>
                    </div>
                    <div className="mb-4">
                        <p>
                            Our mission is to empower individuals with financial confidence, enabling them to live life fully,
                            with control and clear purpose. We work to ease stress and uncertainty by guiding our clients through
                            a thoughtful, deliberate process that answers three key questions:
                        </p>
                        <ul>
                            <li>Where are you now?</li>
                            <li>Where do you want to go?</li>
                            <li>How do you plan to get there?</li>
                        </ul>
                        <p>
                            Through this experience it is our desire to develop rich, long-term relationships rooted in trust, 
                            confidence and mutual respect.
                        </p>
                    </div>
                    <br/>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Empowering</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Financial Confidence</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Trustworthy</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <TelephoneFill color={"white"} width={32} height={32}/>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">{businessInfo.phone}</h4>
                        </div>
                    </div>
                    <a href="/contact" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Contact Us</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <Image
                          src={"/img/about.jpg"}
                          alt={"About Image"}
                          width={800}
                          height={800}
                          className={"position-absolute w-100 h-100 rounded wow zoomIn"}
                          style={{objectFit: 'cover'}}
                          data-wow-delay={"0.9s"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}