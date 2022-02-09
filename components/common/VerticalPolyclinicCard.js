import Image from "next/image";
const VerticalPolyclinicCard = () => {
  return (
    <>
      <div className="item me-4">
        <div className="our-doctors-card">
          <div className="doctors-header">
            <a href="#">
              <Image
                height={200}
                width={300}
                src="/assets/images/doctors/doctor-01.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="doctors-body">
            <a href="doctor-profile.html">
              <h4>Haldia Polyclinics</h4>
            </a>
            <p>Dental Filling, Whitning</p>
            <div className="location d-flex">
              <p>
                <i className="fas fa-map-marker-alt"></i> City Center, Haldia
              </p>
              <p className="ms-auto">
                <i className="far fa-clock"></i> 10:00 A.M to 8:00 P.M
              </p>
            </div>
            <div className="row row-sm">
              <div className="col-12">
                <a
                  href="doctor-profile.html"
                  className="btn view-btn"
                  tabIndex="0"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalPolyclinicCard;
