import Image from "next/image";
const VerticalPolyclinicCard = () => {
  return (
    <>
      <div className="col-md-3 col-sm">
        <div className="item">
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
              <div className="img-overlay">
                <span>$20 - $50</span>
              </div>
            </div>
            <div className="doctors-body">
              <div className="rating">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <span className="d-inline-block average-ratings">3.5</span>
              </div>
              <a href="doctor-profile.html">
                <h4>Dr. Ruby Perrin</h4>
              </a>
              <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
              <div className="location d-flex">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Georgia, USA
                </p>
                <p className="ms-auto">
                  <i className="fas fa-user-md"></i> 450 Consultations
                </p>
              </div>
              <div className="row row-sm">
                <div className="col-6">
                  <a
                    href="doctor-profile.html"
                    className="btn view-btn"
                    tabIndex="0"
                  >
                    View Profile
                  </a>
                </div>
                <div className="col-6">
                  <a href="booking.html" className="btn book-btn" tabIndex="0">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalPolyclinicCard;
