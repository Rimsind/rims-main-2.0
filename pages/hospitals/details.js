import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const HospitalId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/nursing-homes/${id}`, fetcher);
  console.log(data);

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Hospital Details" title1="Hospital Details" />
        {data ? (
          <>
            {
              <>
                <div className="hospital_details_nav sticky-top">
                  <div className="bg-dark text-light">
                    <ul className="list-unstyled d-flex justify-content-center align-items-center pt-4 pb-4 mb-0">
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#aboutUs">
                          About Us
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#whyChooseUs">
                          Why Choose Us
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#whatWeOffer">
                          What We Offer
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#doctor">
                          Doctors
                        </a>
                      </li>
                      <li className="me-2 border-end border-light pe-2">
                        <a className="fs-6 text-light" href="#gallery">
                          Gallery
                        </a>
                      </li>
                      <li className="me-2">
                        <a className="fs-6 text-light" href="#visit">
                          Visit Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="hospital-details-main text"
                  id="aboutUs"
                  style={{
                    background: "url(/user_assets/img/slider/slider-4.jpg)",
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p className="hospital-details-main-name border-bottom border-3 border-warning">
                    Haldia International Super-Specialist Hospital
                  </p>
                  <div className="hospital-details-main-sub-heading">
                    <p className="me-5 text-light fs-5 bg-custom-info px-2 py-3">
                      Email ID: info.haldiahospital@rims.com
                    </p>
                    <p className=" text-light fs-5 bg-custom-info px-2 py-3 ">
                      Phone No: 987-456-321
                    </p>
                  </div>
                  <div className="hospital-details-main-sub-heading">
                    <p className="me-5 text-light fs-5 bg-custom-info px-2 py-3 ">
                      Opening Time: 10:00 A.M
                    </p>
                    <p className=" text-light fs-5 bg-custom-info px-2 py-3 ">
                      Closing Time: 10:00 P.M
                    </p>
                  </div>
                  <div className="hospital-details-main-content">
                    <p className="hospital-details-sub-name bg-custom-info px-2 py-2">
                      24x7 Ready for Help
                    </p>
                  </div>
                </div>
                <div className="hospital-about my-4" id="whyChooseUs">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="why_choose_heading bg-custom-info pt-4 pb-2 ps-3 pe-3">
                          <p className="lh-1">
                            <span className="first_choose_text">
                              Why Choose Us
                            </span>
                            <span className="second_choose_text">
                              Lorem Ipsum Dolor Blabla
                            </span>
                          </p>
                        </div>
                        <div className="why_choose_para mt-3 ms-2">
                          <p className="fs-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis quis dignissim sapien. Nunc quam tellus,
                            rhoncus nec orci ac, auctor bibendum lacus.
                            <br />
                            <br />
                            Nunc quam tellus, rhoncus nec orci ac, auctor
                            bibendum lacus. Nunc quam tellus, rhoncus nec orci
                            ac, auctor bibendum lacus. Nunc quam tellus, rhoncus
                            nec orci ac, auctor bibendum lacus. Nunc quam
                            tellus, rhoncus nec orci ac, auctor bibendum lacus.
                          </p>
                          <p className="fs-5 fw-bold border-bottom border-2">
                            Our Advantage
                          </p>
                          <ul className="d-flex justify-content-between list-unstyled">
                            <li>
                              <i className="fad fa-briefcase-medical me-2"></i>
                              Pharmacy
                            </li>
                            <li>
                              <i className="fad fa-briefcase-medical me-2"></i>
                              Pathology
                            </li>
                            <li>
                              <i className="fad fa-briefcase-medical me-2"></i>
                              Radiology
                            </li>
                            <li>
                              <i className="fad fa-briefcase-medical me-2"></i>
                              Pharmacy
                            </li>
                            <li>
                              <i className="fad fa-briefcase-medical me-2"></i>
                              Pathology
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <Image
                          alt="Hospital About Image"
                          src="/user_assets/img/about-new-content.png"
                          width="700px"
                          height="500px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hospital-facilities" id="whatWeOffer">
                  <div className="container">
                    <div className="hospital-facilities-heading pt-3 pb-1 px-3 rounded mb-3">
                      <p className="fs-4 fw-bold ">What We Offer</p>
                    </div>
                    <div className="hospital-facilities-content">
                      <div className="row align-items-start">
                        <div className="col-6">
                          <div className="hospital-facilities-left-content">
                            <Image
                              src="/user_assets/img/img-01.jpg"
                              alt="Hospital Facilities Image"
                              height="500px"
                              width="700px"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="hospital-facilities-right-center">
                            <div className="row align-items-center">
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">
                                      Regular Bed
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">ICU Bed</p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">
                                      Regular Ambulance
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">
                                      ICU Ambulance
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">
                                      Operation Theater
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div
                                  className="hospital-details-item"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "138px",
                                    marginBottom: "20px",
                                    background:
                                      "url(/user_assets/img/blog-1.jpg)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                >
                                  <div className="main_heading">
                                    <p className="main_heading-para">
                                      Burn Care Unit
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <p className="total_para me-3 text-success">
                                        Total -{" "}
                                        <span className="text-dark total_para_count">
                                          20
                                        </span>
                                      </p>
                                      <p className="avlble_para text-danger">
                                        Available -{" "}
                                        <span className="text-dark total_para_count">
                                          15
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
                <div className="hospital-doctors" id="doctor">
                  <div className="container">
                    <div className="hospital-doctors-heading pt-3 pb-1 px-3 rounded mb-3">
                      <p className=" fs-4 fw-bold">Our Respective Doctors</p>
                    </div>
                    <div className="hospital-doctors-content">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <div className="doctors-content-item">
                            <div className="doctors-content-image text-center">
                              <Image
                                className="rounded-circle"
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="200px"
                              />
                            </div>
                            <div className="doctors-content-name">
                              <p className="fs-5 text-center">
                                Prasenjit Kamila
                              </p>
                            </div>
                            <div className="doctors-content-specl">
                              <p className="fs-6 text-info fw-bold text-center lh-1">
                                Medicine
                              </p>
                            </div>
                            <div className="doctor-content-btn text-center">
                              <button className="btn btn-custom-clr">
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="doctors-content-item">
                            <div className="doctors-content-image text-center">
                              <Image
                                className="rounded-circle"
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="200px"
                              />
                            </div>
                            <div className="doctors-content-name">
                              <p className="fs-5 text-center">
                                Prasenjit Kamila
                              </p>
                            </div>
                            <div className="doctors-content-specl">
                              <p className="fs-6 text-info fw-bold text-center lh-1">
                                Medicine
                              </p>
                            </div>
                            <div className="doctor-content-btn text-center">
                              <button className="btn btn-custom-clr">
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="doctors-content-item">
                            <div className="doctors-content-image text-center">
                              <Image
                                className="rounded-circle"
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="200px"
                              />
                            </div>
                            <div className="doctors-content-name">
                              <p className="fs-5 text-center">
                                Prasenjit Kamila
                              </p>
                            </div>
                            <div className="doctors-content-specl">
                              <p className="fs-6 text-info fw-bold text-center lh-1">
                                Medicine
                              </p>
                            </div>
                            <div className="doctor-content-btn text-center">
                              <button className="btn btn-custom-clr">
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="doctors-content-item">
                            <div className="doctors-content-image text-center">
                              <Image
                                className="rounded-circle"
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="200px"
                              />
                            </div>
                            <div className="doctors-content-name">
                              <p className="fs-5 text-center">
                                Prasenjit Kamila
                              </p>
                            </div>
                            <div className="doctors-content-specl">
                              <p className="fs-6 text-info fw-bold text-center lh-1">
                                Medicine
                              </p>
                            </div>
                            <div className="doctor-content-btn text-center">
                              <button className="btn btn-custom-clr">
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hospital-cta-benner my-4">
                  <Image
                    src="/user_assets/img/doctorbanner.jpg"
                    alt="Hospital CTA Banner Image"
                    height="400px"
                    width="1900px"
                  />
                </div>
                <div className="hospital-gallery" id="gallery">
                  <div className="container">
                    <div className="hospital-gallery-heading pt-3 pb-1 px-3 rounded mb-3">
                      <p className=" fs-4 fw-bold">Gallery</p>
                    </div>
                    <div className="hospital-gallery-content">
                      <div className="row align-items-center">
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-3 mb-3">
                          <div className="gallery-content-item">
                            <div className="gallery-content-image text-center">
                              <Image
                                className=""
                                src="/user_assets/img/img-01.jpg"
                                alt="Hospital Facilities Image"
                                height="200px"
                                width="300px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hospital-con-info" id="visit">
                  <div className="container">
                    <div className="hospital-contact-heading mb-3 text-center">
                      <p className=" fs-4 fw-bold">Address & Location</p>
                    </div>
                    <div className="row align-items-start">
                      <div className="col-4">
                        <p className="hospital-name">
                          Haldia International Chor Hospital
                        </p>
                        <p className="hospital-email">
                          Email ID:
                          <span className="hospital-con-info-span">
                            info.haldiachorhospital@rims.com
                          </span>
                        </p>
                        <p className="hospital-phone">
                          Phone No:{" "}
                          <span className="hospital-con-info-span">
                            987-456-321
                          </span>
                        </p>
                        <p className="hospital-open">
                          Opening Time:{" "}
                          <span className="hospital-con-info-span">
                            10:00 A.M.
                          </span>
                        </p>
                        <p className="hospital-close">
                          Closing Time:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="hospital-street">
                          Street Address:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                        <p className="hospital-landmark">
                          Landmark:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                        <p className="hospital-city">
                          City:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                        <p className="hospital-state">
                          State:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                        <p className="hospital-country">
                          Country:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="hospital-pincode">
                          Pincode:{" "}
                          <span className="hospital-con-info-span">
                            10:00 P.M.
                          </span>
                        </p>
                        <p className="hospital-desc">
                          Description:{" "}
                          <span className="hospital-con-info-span">
                            Nunc quam tellus, rhoncus nec orci ac, auctor
                            bibendum lacus. Nunc quam tellus, rhoncus nec orci
                            ac, auctor bibendum lacus. Nunc quam tellus, rhoncus
                            nec orci ac, auctor bibendum lacus. Nunc quam
                            tellus, rhoncus nec orci ac, auctor bibendum lacus.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-map d-flex">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.716346058072!2d-95.5565430855612!3d29.872453233633234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cfe4516785ed%3A0x774974592a609121!2s54%20Northwest%20Fwy%20%23558%2C%20Houston%2C%20TX%2077040%2C%20USA!5e0!3m2!1sen!2sin!4v1631855334452!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </>
            }
          </>
        ) : (
          <>
            <DetailsPageLoader />
          </>
        )}
      </main>
    </>
  );
};

export default HospitalId;
