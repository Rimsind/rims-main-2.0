import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
const DoctorTimetableCard = ({ data, doctor }) => {
  console.log(data, "data");
  return (
    <>
      <section className="doctor-location">
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
            <div className="doctor-time-slot d-flex align-items-center justify-content-between">
              {data?.schedule?.map((items, index) => (
                <div className="doctor-location-items text-center pe-4 border-end border-1 ">
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorTimetableCard;
