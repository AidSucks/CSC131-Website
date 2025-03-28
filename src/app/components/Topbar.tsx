import businessInfo from "../../../public/data/businessInfo.json";
import SocialMedia from "../../../public/data/SocialMedia.json";

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center" style={{height: 45}}>
          <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{businessInfo.address}</small>
          <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>{businessInfo.phone}</small>
          <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{businessInfo.email}</small>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-inline-flex align-items-center" style={{height: 45}}>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={SocialMedia.twitterX} target="_blank"><i className="bi bi-twitter-x"></i></a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={SocialMedia.facebook} target="_blank"><i className="fab fa-facebook-f fw-normal"></i></a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={SocialMedia.linkedin} target="_blank"><i className="fab fa-linkedin-in fw-normal"></i></a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={SocialMedia.instagram} target="_blank"><i className="fab fa-instagram fw-normal"></i></a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href={SocialMedia.youtube} target="_blank"><i className="fab fa-youtube fw-normal"></i></a>
        </div>
      </div>
    </div>
  </div>
  )
}
