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
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <div className="doctor-location-items py-3 pe-4 border-end border-1 border-light ">
              <div className="doc-info-cont text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
                <Image
                  className="border border-2 border-primary rounded"
                  height={50}
                  width={50}
                  src={
                    data?.polyclinic?.image?.url ||
                    data?.nursing_home?.image?.url ||
                    data?.hospital?.image?.url ||
                    "/assets/images/polyclinic.jpg"
                  }
                  alt="Polyclinic Image"
                />
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
          {/* <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
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
          </div> */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 py-3">
            <div className="doctor-time-slot row align-items-center justify-content-around">
              {data?.slots?.map((items, index) => (
                <div
                  className="col-12 col-sm-12 col-md-5 col-lg-2 col-xl-2 col-xxl-2 py-3 bg-light mb-3"
                  key={index}
                >
                  <div className="doctor-location-items text-center">
                    <a
                      className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-0 px-xl-0 px-xxl-2 shadow-sm"
                      style={{
                        backgroundColor: "#ffc107",
                        color: "#1d00a3",
                        fontWeight: "400",
                      }}
                    >
                      {items?.date}
                    </a>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <span
                          className="fs-6"
                          style={{ color: "#1d00a3", fontWeight: "500" }}
                        >
                          From
                        </span>
                        <p
                          className="fs-6 text-dark"
                          style={{ fontWeight: "500" }}
                        >
                          {items?.time_from}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fs-6"
                          style={{ color: "#1d00a3", fontWeight: "500" }}
                        >
                          To
                        </span>
                        <p
                          className="fs-6 text-dark"
                          style={{ fontWeight: "500" }}
                        >
                          {items?.time_to}
                        </p>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p
                          className="fs-6 text-dark"
                          style={{ fontWeight: "500" }}
                        >
                          <i
                            className="far fa-money-bill me-1"
                            style={{ color: "#1d00a3" }}
                          ></i>
                          - ₹{data?.fee}
                        </p>
                      </div>
                      <div className="col-6">
                        <p
                          className="fs-6 text-dark"
                          style={{ fontWeight: "500" }}
                        >
                          <i
                            className="far fa-loveseat me-1"
                            style={{ color: "#1d00a3" }}
                          ></i>
                          - {items?.seats}
                        </p>
                      </div>
                    </div>
                    {!!data.polyclinic && (
                      <>
                        <Link
                          href={`/checkout?doctorId=${doctorId}&&polyclinicId=${data?.polyclinic?.id}&&fee=${data?.fee}&&date=${items?.date}&&time=${items?.time_from}-${items?.time_to}`}
                        >
                          <a
                            className="btn text-light fs-6 px-4 px-sm-4 px-md-4 px-lg-2 px-xl-2 px-xxl-4"
                            style={{ backgroundColor: "#1d00a3" }}
                          >
                            Book Now
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
                            className="btn text-light fs-6 px-4 px-sm-4 px-md-4 px-lg-2 px-xl-2 px-xxl-4"
                            style={{ backgroundColor: "#1d00a3" }}
                          >
                            Book Now
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
                            className="btn text-light fs-6 px-4 px-sm-4 px-md-4 px-lg-2 px-xl-2 px-xxl-4"
                            style={{ backgroundColor: "#1d00a3" }}
                          >
                            Book Now
                          </a>
                        </Link>
                      </>
                    )}
                  </div>
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
