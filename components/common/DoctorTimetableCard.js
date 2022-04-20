import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
const DoctorTimetableCard = ({ data, doctor }) => {
  console.log(data, "data");
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
                      data?.polyclinic?.image?.url ||
                      "/assets/images/alternate/alt-hospital.png"
                    }
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <a href="doctor-profile.html">{data?.polyclinic?.name}</a>
                </h4>
                <p className="doc-speciality">
                  {data.polyclinic?.street_address},{data.polyclinic?.city}
                  {data.polyclinic?.state}
                </p>
                <i className="far fa-envelope"></i> {data?.polyclinic?.email}
                <div className="clinic-details"></div>
                <div className="clinic-services">
                  {data?.schedule.map((items, index) => (
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
                    <i className="fas fa-mobile"></i> {data?.polyclinic?.phone}
                  </li>

                  <li>
                    <i className="far fa-money-bill-alt"></i>₹ {data?.fee}
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link
                  href={`/schedule?doctorId=${doctor}&&polyclinicId=${data?.polyclinic?.id}&&fee=${data?.fee}`}
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
      {/* <section className="doctor-location">
        <div className="row align-items-center border-bottom border-1">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="doctor-location-items py-3 pe-4 border-end border-1 ">
              <div className="doc-info-cont">
                <h4 className="doc-name fs-6">
                  <a href="doctor-profile.html">{data?.polyclinic?.name}</a>
                </h4>
                <p className="doc-speciality">
                  {data?.polyclinic?.street_address},<br />
                  {data?.polyclinic?.city}
                  {data?.polyclinic?.state}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
            <div className="doctor-time-slot row align-items-center justify-content-between">
              {data?.schedule?.map((items, index) => (
                <div className="col">
                  <div
                    className="doctor-location-items text-center pe-4 border-end border-1"
                    key={index}
                  >
                    <a
                      className="fs-6 py-1 px-4 shadow-sm text-dark"
                      style={{ backgroundColor: "#e5e5e569" }}
                    >
                      {items?.day}
                    </a>
                    <p className="fs-6 text-dark mt-2">{items?.timeSlots}</p>
                    <Link href="#">
                      <button
                        className="btn text-light fs-6 rounded-pill"
                        style={{ backgroundColor: "#1d00a3" }}
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default DoctorTimetableCard;
