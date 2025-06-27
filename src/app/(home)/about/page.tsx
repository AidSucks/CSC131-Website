import PageTitle from "@/app/components/home/PageTitle";

import {TelephoneFill} from "react-bootstrap-icons";
import Image from "next/image";

export default function AboutPage() {

  return(
    <div>
      <PageTitle title="About Us" />

      {/* <AboutPageComponent/> */}

      <div className="container-fluid py-5 fadeInUp" style={{marginTop:'-150px', marginBottom:'-100px'}}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-4">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">Who is Ron?</h1>
                    </div>
                    <div className="mb-4">

                        <p>
                            Ronnie’s journey as a Financial Advisor began over 23 years ago. He entered the financial field because he wanted to help individuals and business owners build, protect, and distribute their financial wealth. After all these years in the industry he continues to be passionate about helping his clients navigate their financial journeys from college saving plans, long term care and retirement.
                        </p>
                        <p>
                            Ronnie is well versed in all of the latest trends which enables him to successfully guide his clients through the highs and lows of economic cycles. He considers himself a partner in his clients financial journey, and continuously works towards building the strong foundations of a secure financial future. When he is not advising clients he enjoys spending time with his wife and four children. He is an active member in the local church and he volunteers his free time to his local Little League, having been a baseball coach for over 6 years and serving on the board for three years as the vice president and coaching coordinator.
                        </p>
                            Ronnie specializes in Retirement Planning, college planning, tax planning, and estate planning.
                            Offer business owners and individuals life insurance, Health Insurance, Long term care insurance, disability insurance, alternatives, stocks, bonds mutual funds, IRA’s, 401(k)’s, retirement plan rollovers etc...

                        <div className="section-title position-relative pb-3 my-4">
                            <h1 className="mb-0">Career History</h1>
                        </div>
                        <p>
                            Ronnie has been in the career field of financial advising since 2003.
                            Currently a Registered Representative with LPL Financial, an independent Broker/ Dealer and Registered Investment Advisor. August 2005-Present
                            Former Financial Advisor for Trilogy Financial Services Inc., a Registered Investment Advisory firm. August 2002-July 2005
                            Education:
                            BA Economics, University of Redlands
                            Minor in Business, University of Redlands
                        </p>
                    </div>
                    <br/>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <TelephoneFill color={"white"} width={32} height={32}/>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Still have questions? Give us a call!</h5>
                            <h4 className="text-primary mb-0">(714) 202-9858</h4>
                        </div>
                    </div>
                    <a href="/contact" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Contact Us</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative d-flex h-100">
                        <Image
                          src={"/img/about_us.jpg"}
                          alt={"About Image"}
                          width={500}
                          height={600}
                          className={"position-absolute w-100 align-self-center rounded wow zoomIn"}
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