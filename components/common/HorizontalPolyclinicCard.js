import Image from "next/image";
const HorizontalPolyclinicCard = () => {
  return (
    <>
      {" "}
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img poly-img">
                <a href="doctor-profile.html">
                  <Image
                    height="130"
                    width="145"
                    src="/assets/images/polyclinic.jpg"
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <a href="doctor-profile.html">Haldia Polyclinic</a>
                </h4>
                <p className="doc-speciality">Haldia, West Bengal</p>
                <i className="far fa-envelope"></i>
                haldiapolyclinic@gmail.com
                <div className="clinic-details"></div>
                <div className="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                  <span> Whitneing</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-mobile"></i> 987456321
                  </li>
                  <li>
                    <i className="far fa-clock"></i>
                    10:00 A.M to 8:00 P.M
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Haldia, WB
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <a className="view-pro-btn" href="doctor-profile.html">
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

export default HorizontalPolyclinicCard;
