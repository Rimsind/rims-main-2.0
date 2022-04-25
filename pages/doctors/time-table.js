import { BreadCrums } from "components/common";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { DoctorSidebar } from "components/DoctorComponents";
import { withAuth } from "helpers/withAuth";
import Image from "next/image";
import Link from "next/link";

const DoctorTimeTable = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  return (
    <>
      <section className="section-doc-tm-tbl">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Doctor / Doctor Time-Table"
            title1="Doctor Time Table"
          />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <DoctorSidebar status6="active" data={data} />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-header">
                      <Link href="/doctors/time-table-form">
                        <a className="btn btn-primary fs-6 px-5 shadow-sm">
                          <i className="fas fa-plus me-2"></i>Add New Entry
                        </a>
                      </Link>
                    </div>
                    <div className="card-body">
                      {/* <div
                        className="row align-items-center border-bottom border-1"
                        style={{ backgroundColor: "#abd5ff" }}
                      >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
                          <div className="doctor-time-slot row align-items-center justify-content-between">
                            {data?.slots?.map((items, index) => (
                              <div
                                className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-3 pb-3 pb-sm-3 pb-md-3 pb-lg-3 pb-xl-0 pb-xxl-0"
                                key={index}
                              >
                                <div className="doctor-location-items text-center pe-4 border-end border-1 ">
                                  <a
                                    className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5 shadow-sm"
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
                                        style={{
                                          color: "#1d00a3",
                                          fontWeight: "500",
                                        }}
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
                                        style={{
                                          color: "#1d00a3",
                                          fontWeight: "500",
                                        }}
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
                                          className="btn text-light fs-6 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5"
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
                                          className="btn text-light fs-6 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5"
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
                                          className="btn text-light fs-6 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5"
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
                      </div> */}
                      <div
                        className="row align-items-center border-bottom border-1"
                        style={{ backgroundColor: "#abd5ff" }}
                      >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                          <div className="doctor-location-items py-3 pe-4 border-end border-1 border-light ">
                            <div className="doc-info-cont text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
                              <Image
                                className="border border-2 border-primary rounded"
                                height={50}
                                width={50}
                                src={"/assets/images/polyclinic.jpg"}
                                alt="Polyclinic Image"
                              />
                              <h4 className="doc-name fs-5">
                                <a>Haldia Polyclinic</a>
                              </h4>
                              <p className="doc-speciality text-dark">
                                Haldia, Durgachak, West Bengal, India, Pin -
                                721658
                              </p>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                <div className="d-grid gap-2">
                                  <Link href="#">
                                    <a
                                      className="btn fs-6"
                                      style={{
                                        backgroundColor: "#0282971f",
                                        color: "#017066",
                                      }}
                                    >
                                      <i className="fad fa-file-edit me-1"></i>
                                      Edit
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                <div className="d-grid gap-2">
                                  <Link href="#">
                                    <a
                                      className="btn fs-6"
                                      style={{
                                        backgroundColor: "#f211361f",
                                        color: "#e63c3c",
                                      }}
                                    >
                                      <i className="fad fa-trash-alt me-1"></i>
                                      Delete
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 py-3">
                          <div className="doctor-time-slot row align-items-center justify-content-between">
                            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-3 pb-3 pb-sm-3 pb-md-3 pb-lg-3 pb-xl-0 pb-xxl-0">
                              <div className="doctor-location-items text-center pe-4 border-end border-1 ">
                                <a
                                  className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5 shadow-sm"
                                  style={{
                                    backgroundColor: "#ffc107",
                                    color: "#1d00a3",
                                    fontWeight: "400",
                                  }}
                                >
                                  2022-04-23
                                </a>
                                <div className="row align-items-center">
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      From
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      11:30 A.M.
                                    </p>
                                  </div>
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      To
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      4:30 P.M.
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
                                      - ₹500
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
                                      - 100
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#0282971f",
                                            color: "#017066",
                                          }}
                                        >
                                          <i className="fad fa-file-edit me-1"></i>
                                          Edit
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#f211361f",
                                            color: "#e63c3c",
                                          }}
                                        >
                                          <i className="fad fa-trash-alt me-1"></i>
                                          Delete
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-3 pb-3 pb-sm-3 pb-md-3 pb-lg-3 pb-xl-0 pb-xxl-0">
                              <div className="doctor-location-items text-center pe-4 border-end border-1 ">
                                <a
                                  className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5 shadow-sm"
                                  style={{
                                    backgroundColor: "#ffc107",
                                    color: "#1d00a3",
                                    fontWeight: "400",
                                  }}
                                >
                                  2022-04-23
                                </a>
                                <div className="row align-items-center">
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      From
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      11:30 A.M.
                                    </p>
                                  </div>
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      To
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      4:30 P.M.
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
                                      - ₹500
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
                                      - 100
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#0282971f",
                                            color: "#017066",
                                          }}
                                        >
                                          <i className="fad fa-file-edit me-1"></i>
                                          Edit
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#f211361f",
                                            color: "#e63c3c",
                                          }}
                                        >
                                          <i className="fad fa-trash-alt me-1"></i>
                                          Delete
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-3 pb-3 pb-sm-3 pb-md-3 pb-lg-3 pb-xl-0 pb-xxl-0">
                              <div className="doctor-location-items text-center pe-4 border-end border-1 ">
                                <a
                                  className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5 shadow-sm"
                                  style={{
                                    backgroundColor: "#ffc107",
                                    color: "#1d00a3",
                                    fontWeight: "400",
                                  }}
                                >
                                  2022-04-23
                                </a>
                                <div className="row align-items-center">
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      From
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      11:30 A.M.
                                    </p>
                                  </div>
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      To
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      4:30 P.M.
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
                                      - ₹500
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
                                      - 100
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#0282971f",
                                            color: "#017066",
                                          }}
                                        >
                                          <i className="fad fa-file-edit me-1"></i>
                                          Edit
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#f211361f",
                                            color: "#e63c3c",
                                          }}
                                        >
                                          <i className="fad fa-trash-alt me-1"></i>
                                          Delete
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-3 col-xxl-3 pb-3 pb-sm-3 pb-md-3 pb-lg-3 pb-xl-0 pb-xxl-0">
                              <div className="doctor-location-items text-center pe-4 border-end border-1 ">
                                <a
                                  className="fs-6 py-1 px-5 px-sm-5 px-md-4 px-lg-4 px-xl-5 px-xxl-5 shadow-sm"
                                  style={{
                                    backgroundColor: "#ffc107",
                                    color: "#1d00a3",
                                    fontWeight: "400",
                                  }}
                                >
                                  2022-04-23
                                </a>
                                <div className="row align-items-center">
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      From
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      11:30 A.M.
                                    </p>
                                  </div>
                                  <div className="col-6">
                                    <span
                                      className="fs-6"
                                      style={{
                                        color: "#1d00a3",
                                        fontWeight: "500",
                                      }}
                                    >
                                      To
                                    </span>
                                    <p
                                      className="fs-6 text-dark"
                                      style={{ fontWeight: "500" }}
                                    >
                                      4:30 P.M.
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
                                      - ₹500
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
                                      - 100
                                    </p>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#0282971f",
                                            color: "#017066",
                                          }}
                                        >
                                          <i className="fad fa-file-edit me-1"></i>
                                          Edit
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0 mb-xxl-0">
                                    <div className="d-grid gap-2">
                                      <Link href="#">
                                        <a
                                          className="btn fs-6"
                                          style={{
                                            backgroundColor: "#f211361f",
                                            color: "#e63c3c",
                                          }}
                                        >
                                          <i className="fad fa-trash-alt me-1"></i>
                                          Delete
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(DoctorTimeTable);
