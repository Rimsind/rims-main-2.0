const DoctorTimetableCard = () => {
  return (
    <>
      <div className="card location_card shadow-sm">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img poly-img">
                <a href="doctor-profile.html">
                  <img
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
                    <i className="fas fa-mobile"></i> 987456321
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    City center, Haldia
                    <br />
                    West Bengal, Pin -721657
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <a className="apt-btn" href="booking.html">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorTimetableCard;
