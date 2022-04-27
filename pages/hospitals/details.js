import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import Link from "next/Link";
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
                        Emergency: {data?.emargengy_no}
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
                      <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-6">
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
                      {/* <div className="hospital-cta-benner my-3">
                        <Image
                          src="/user_assets/img/doctorbanner.jpg"
                          alt="Hospital CTA Banner Image"
                          height="200px"
                          width="1000px"
                        />
                      </div> */}
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
                                    Total - <span className="count">20</span>
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
                                    <span className="count">15</span>
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
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="profile-widget me-3">
                          <div className="doc-img">
                            <Link href="#">
                              <a>
                                <Image
                                  height={280}
                                  width={320}
                                  className="img-fluid"
                                  alt="User Image"
                                  src={
                                    items?.image?.url ||
                                    "/assets/images/alternate/alt-user.png"
                                  }
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="pro-content">
                            <h3 className="title">
                              <Link href="#">
                                <a>
                                  Dr. {items?.firstName} {items?.lastName}
                                </a>
                              </Link>
                              <i className="fas fa-check-circle verified"></i>
                            </h3>
                            <p className="speciality">
                              50 years experience, Consultant Rehabilation
                            </p>

                            <ul className="available-info">
                              <li>
                                <i className="fas fa-certificate "></i>
                                MBBS
                              </li>
                              <li>
                                <Image
                                  height="20"
                                  width="20"
                                  src="/assets/images/alternate/alt-specialty.png"
                                  alt=""
                                />
                                BVDJHVDHJVDHDS
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt text-primary"></i>
                                ₹200 - ₹500
                                <i
                                  className="fas fa-info-circle"
                                  data-bs-toggle="tooltip"
                                  title="Lorem Ipsum"
                                ></i>
                              </li>
                            </ul>
                            <div className="row row-sm">
                              <div className="col-12">
                                <Link href="#">
                                  <a className="btn book-btn">View Profile</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.656727869912!2d88.07755181541287!3d22.06272295705107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0c7d1cdc935%3A0xdc5e28eac9b1b75b!2sWebel%20IT%20Park!5e0!3m2!1sen!2sin!4v1648626968245!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default HospitalId;
