import Image from "next/image";
const DoctorTimetableCard = ({ schedule }) => {
  console.log(schedule);
  return (
    <>
      <div className="card location_card shadow-sm">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img poly-img">
                <a href="doctor-profile.html">
                  <Image
                    height="130"
                    width="145"
                    src={
                      schedule.polyclinic?.coverImage?.url ||
                      "/assets/images/polyclinic.jpg"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <a href="doctor-profile.html">{schedule?.polyclinic?.name}</a>
                </h4>
                <p className="doc-speciality">
                  {schedule?.polyclinic?.city},{schedule?.polyclinic?.state}
                </p>
                <i className="far fa-envelope"></i>{" "}
                {schedule?.polyclinic?.email}
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
                    {schedule?.schedule.map((item, index) => (
                      <div className="listing-day" key={index}>
                        <div className="day">{item?.day}</div>
                        <div className="time-items">
                          <span className="time">
                            {item?.start_time} - {item?.end_time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-mobile"></i>{" "}
                    {schedule?.polyclinic?.phone}
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {schedule.polyclinic?.street_address},
                    {schedule.polyclinic?.city}
                    <br />
                    {schedule.polyclinic?.state}, Pin -
                    {schedule.polyclinic?.pincode}
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
