import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";

const HospitalId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/hospitals/${id}`, fetcher);

  return (
    <>
      <section className="section-hospital">
        <BreadCrums title="Home / Hospital Details" title1="Hospital Details" />
        <div className="container">
          <div className="content">
            <div className="row align-items-start">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="doc-info-left">
                      <div className="doctor-img poly-img">
                        <a href="#">
                          <Image
                            height="300"
                            width="300"
                            src={
                              data?.image?.url ||
                              "/assets/images/card_image.jpg"
                            }
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="#" className="fs-3">
                            {data?.name}
                          </a>
                        </h4>
                        <p className="doc-speciality">
                          {data?.city},{data?.state}
                        </p>
                        <i className="far fa-phone me-1"></i>
                        Emergency: {data?.emergency_no}
                        <div className="clinic-details"></div>
                        <div className="clinic-services">
                          {data?.features?.map((items, index) => (
                            <span className="bg-info text-light" key={index}>
                              {items?.feature_name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-start">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 col-xxl-5">
                        <h6 className="fs-6 fw-bold">Contact Info</h6>
                        <div className="info-right">
                          <div className="hos-email-right mb-3">
                            <i className="far fa-envelope me-2"></i>
                            {data?.email}
                          </div>
                          <div className="hos-phone-right mb-3">
                            <i className="far fa-phone me-2"></i>
                            {data?.phone}
                          </div>
                          <div className="hos-address-right mb-3">
                            <i className="far fa-map me-2"></i>
                            {data?.street_address}, {data?.city}, {data?.state},
                            <br /> {data?.country}, Pin - {data?.pincode}
                          </div>
                        </div>
                      </div>{" "}
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                        <h6 className="fs-6 fw-bold">Working Hours</h6>
                        <div className="info-right">
                          <div className="hos-email-right mb-3">
                            <i className="far fa-clock me-2"></i>
                            {data?.workingHours?.Start} -{" "}
                            {data?.workingHours?.end}
                          </div>
                          <div className="hos-phone-right mb-3">
                            <i className="far fa-ambulance me-2"></i>
                            Ambulance no: {data?.ambulance_no}
                          </div>
                          {/* <div className="hos-address-right mb-3">
                            <i className="far fa-map me-2"></i>
                            {data?.street_address}, {data?.city}, {data?.state},
                            <br /> {data?.country}, Pin - {data?.pincode}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5">
                    <div className="hos-desc">
                      <h6 className="fs-4 fw-bold  mb-5">Who We Are</h6>
                      <div className="hospital-cta-benner my-3">
                        <Image
                          src="/user_assets/img/doctorbanner.jpg"
                          alt="Hospital CTA Banner Image"
                          height="200px"
                          width="1000px"
                        />
                      </div>
                      <p className="fs-6">{data?.overview}</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
                    <div className="hos-features">
                      {/* <h6 className="fs-5 fw-bold  mb-5">Features</h6> */}
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                Regular Beds
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_regular_bed}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available_regular_bed}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                ICU Beds
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_icu_bed}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available_icu_bed}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                Regular Ambulance
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_ambulance}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available_ambulance}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                ICU Ambulance
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_icu_ambulance}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available?.icu_ambulance}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                Operation Theater
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_ot}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available_ot}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                Burn Care Units
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Total -{" "}
                                    <span className="count">
                                      {data?.total_burn_unit}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Available -{" "}
                                    <span className="count">
                                      {data?.available_burn_unit}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="hospital-details-item">
                            <div className="main_heading">
                              <h6
                                style={{
                                  fontSize: "20px",
                                  paddingTop: "11px",
                                  color: "black",
                                  marginBottom: "9px",
                                }}
                              >
                                Doctors & Nurse
                              </h6>
                              <div className="row align-items-center">
                                <div className="col-5">
                                  <p
                                    style={{
                                      color: "#0031bd",
                                      fontSize: "18px",
                                    }}
                                  >
                                    Doctor -
                                    <span className="count">
                                      {data?.total_doctors}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-7">
                                  <p
                                    style={{
                                      color: "#009789",
                                      fontSize: "18px",
                                      marginLeft: "17px",
                                    }}
                                  >
                                    Nurse -
                                    <span className="count">
                                      {data?.total_nurse}
                                    </span>
                                  </p>
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
            <div className="card">
              <div className="card-body">
                <h6 className="fs-5 fw-bold text-center mb-5">Doctors</h6>
                <div className="hos-doc-list">
                  <div className="row align-items-center">
                    {data?.doctors?.map((items, index) => (
                      <PolyclinicTimetableCard data={items} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map d-flex">
        <iframe
          src={data?.google_map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default HospitalId;
