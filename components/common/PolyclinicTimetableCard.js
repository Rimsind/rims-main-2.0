const PolyclinicTimetableCard = () => {
  return (
    <>
      <div className="doctor-widget p-4 shadow-sm">
        <div className="doc-info-left">
          <div className="doctor-img">
            <a href="doctor-profile.html">
              <img
                src="/assets/images/smair-barman.jpg"
                className="img-fluid"
                alt="User Image"
              />
            </a>
          </div>
          <div className="doc-info-cont">
            <h4 className="doc-name">Dr. Samir Barman</h4>
            <p className="doc-speciality">
              25 years experience, Consultant Rehabilitation
            </p>
            <h5 className="doc-department">
              <i className="fas fa-user-tag"></i>
              Medicine
            </h5>
            <i className="far fa-envelope mb-3"></i>
            samirbarman112@gmail.com
            <div className="clinic-services">
              <span>
                <i className="fab fa-skype"></i> Skype Id: aryajana@0124
              </span>
            </div>
          </div>
        </div>
        <div className="doc-info-center ms-auto">
          <div className="widget business-widget">
            <div className="widget-content">
              <div className="listing-hours">
                <div className="listing-day"></div>
                <div className="listing-day">
                  <div className="day">Monday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Tuesday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Wednesday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
                <div className="listing-day">
                  <div className="day">Thursday</div>
                  <div className="time-items">
                    <span className="time">07:00 AM - 09:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="doc-info-right">
          <div className="clini-infos">
            <ul>
              <li>
                <i className="fas fa-certificate"></i> MBBS
              </li>

              <li>
                <i className="fas fa-map-marker-alt"></i> City Center, Haldia,
                WB
              </li>
              <li>
                <i className="far fa-money-bill-alt"></i> ₹300 - ₹1000
                <i
                  className="fas fa-info-circle"
                  data-bs-toggle="tooltip"
                  title="Lorem Ipsum"
                ></i>
              </li>
            </ul>
          </div>
          <div className="clinic-booking">
            <a className="view-pro-btn" href="doctor_details.html">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolyclinicTimetableCard;