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
                  <a href="doctor-profile.html">
                    {data?.polyclinic?.name ||
                      data?.nursing_home?.name ||
                      data?.hospital?.name}
                  </a>
                </h4>
                <p className="doc-speciality text-dark">
                  {data?.polyclinic?.street_address ||
                    data?.nursing_home?.street_address ||
                    data?.hospital?.street_address}
                  ,<br />
                  {data?.polyclinic?.city ||
                    data?.nursing_home?.city ||
                    data?.hospital?.city}
                  ,
                  {data?.polyclinic?.state ||
                    data?.nursing_home?.state ||
                    data?.hospital?.state}
                  ,<br />
                  {data?.polyclinic?.country ||
                    data?.nursing_home?.country ||
                    data?.hospital?.country}
                  . PIN-
                  {data?.polyclinic?.pincode ||
                    data?.nursing_home?.pincode ||
                    data?.hospital?.pincode}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
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
                  {!!data.polyclinic && (
                    <>
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
                    </>
                  )}{" "}
                  {!!data.nursing_home && (
                    <>
                      <Link
                        href={`/checkout?doctorId=${doctorId}&&nursingHomeId=${data?.nursing_home?.id}&&fee=${data?.fee}&&date=${items?.date}&&time=${items?.time_from}-${items?.time_to}`}
                      >
                        <a
                          className="btn text-light fs-6 rounded-pill"
                          style={{ backgroundColor: "#1d00a3" }}
                        >
                          Book Now <sup className="">{items?.seats}</sup>
                        </a>
                      </Link>
                    </>
                  )}{" "}
                  {!!data.hospital && (
                    <>
                      <Link
                        href={`/checkout?doctorId=${doctorId}&&hospitalId=${data?.hospital?.id}&&fee=${data?.fee}&&date=${items?.date}&&time=${items?.time_from}-${items?.time_to}`}
                      >
                        <a
                          className="btn text-light fs-6 rounded-pill"
                          style={{ backgroundColor: "#1d00a3" }}
                        >
                          Book Now <sup className="">{items?.seats}</sup>
                        </a>
                      </Link>
                    </>
                  )}
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
