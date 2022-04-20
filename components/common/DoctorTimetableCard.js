import Image from "next/image";
import Link from "next/link";

const DoctorTimetableCard = ({ data, doctorId }) => {
  return (
    <>
      <section className="doctor-location">
        <div
          className="row align-items-center border-bottom border-1"
          style={{ backgroundColor: "#abd5ff" }}
        >
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="doctor-location-items py-3 pe-4 border-end border-1 ">
              <div className="doc-info-cont">
                <h4 className="doc-name fs-5">
                  <a href="doctor-profile.html">{data?.polyclinic?.name}</a>
                </h4>
                <p className="doc-speciality text-dark">
                  {data?.polyclinic?.street_address},<br />
                  {data?.polyclinic?.city},{data?.polyclinic?.state},<br />
                  {data?.polyclinic?.country}. PIN- {data?.polyclinic?.pincode}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
<<<<<<< HEAD
            <div className="doctor-time-slot d-flex align-items-center justify-content-between">
              {data?.slots?.map((items, index) => (
                <div
                  className="doctor-location-items text-center pe-4 border-end border-1 "
                  key={index}
                >
                  <a
                    className="fs-6 py-1 px-4 shadow-sm text-dark"
                    style={{ backgroundColor: "#ffc107" }}
                  >
                    {items?.date}
                  </a>
                  <p className="fs-6 text-dark mt-2">
                    {items?.time_from} - {items?.time_to}
                  </p>
                  <p className="fs-6 text-dark mt-2">Rs.{data?.fee}</p>

                  <Link
                    href={`/checkout?doctorId=${doctorId}&&polyclinicId=${data?.polyclinic?.id}&&fee=${data?.fee}&&date=${items?.date}&&time=${items?.time_from}-${items?.time_to}`}
                  >
                    <a
                      className="btn text-light fs-6 rounded-pill"
                      style={{ backgroundColor: "#1d00a3" }}
                    >
                      Book Now <sup className="">{items?.seats}</sup>
                    </a>
                  </Link>
=======
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
>>>>>>> d32c59b243fff7663ab4cb20b317a81ca66b1d90
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
