import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
const DoctorTimetableCard = ({ schedule, doctor }) => {
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
                      schedule?.polyclinic?.image?.url ||
                      "/assets/images/alternate/alt-hospital.png"
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
                  {schedule.polyclinic?.street_address},
                  {schedule.polyclinic?.city}
                  {schedule.polyclinic?.state}
                </p>
                <i className="far fa-envelope"></i>{" "}
                {schedule?.polyclinic?.email}
                <div className="clinic-details"></div>
                <div className="clinic-services">
                  {schedule?.schedule.map((items, index) => (
                    <span key={index}>{items?.day}</span>
                  ))}
                  {/* <span>Dental Fillings</span>
                  <span> Whitneing</span>
                  <span> Whitneing</span> */}
                </div>
              </div>
            </div>
            {/* <div className="doc-info-center ms-auto">
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
            </div> */}
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="fas fa-mobile"></i>{" "}
                    {schedule?.polyclinic?.phone}
                  </li>

                  <li>
                    <i className="far fa-money-bill-alt"></i>₹ {schedule?.fee}
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link
                  href={`/schedule?doctorId=${doctor}&&polyclinicId=${schedule?.polyclinic?.id}&&fee=${schedule?.fee}`}
                >
                  <a className="btn btn-primary">Book Appointment</a>
                </Link>
              </div>
              {/* <div className="clinic-booking">
                <button className="btn btn-primary" onClick={authCheck}>
                  Book Appointment
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorTimetableCard;
