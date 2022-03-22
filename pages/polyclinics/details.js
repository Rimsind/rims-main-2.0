import { BreadCrums, PolyclinicTimetableCard } from "components/common";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const PolyclinicId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/polyclinics/${id}`, fetcher);

  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Polyclinics Details"
          title1="Polyclinics Details"
        />
        <div className="content">
          <div className="container">
            {data ? (
              <>
                <div className="card">
                  <div className="card-body">
                    <div className="doctor-widget">
                      <div className="doc-info-left">
                        <div className="doctor-img poly-img">
                          <a href="doctor-profile.html">
                            <Image
                              height="130"
                              width="145"
                              src={
                                data?.image?.url ||
                                "/assets/images/alternate/alt-hospital.png"
                              }
                              className="img-fluid"
                              alt="User Image"
                            />
                          </a>
                        </div>
                        <div className="doc-info-cont">
                          <h4 className="doc-name">
                            <a href="doctor-profile.html">{data?.name}</a>
                          </h4>
                          <p className="doc-speciality">
                            {data?.city}, {data?.state}
                          </p>
                          <i className="far fa-envelope"></i> {data?.email}
                          <div className="clinic-details"></div>
                          <div className="clinic-services">
                            <span>Dental Fillings</span>
                            <span> Whitneing</span>
                            <span> Whitneing</span>
                          </div>
                        </div>
                      </div>
                      <div className="doc-info-right">
                        <div className="clini-infos">
                          <ul>
                            <li>
                              <i className="fas fa-mobile"></i> {data?.phone}
                            </li>
                            <li>
                              <i className="far fa-clock"></i>
                              10:00 A.M to 8:00 P.M
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {data?.street_address},{data?.city},{data?.state},
                              Pin -{data?.pincode}
                            </li>
                          </ul>
                        </div>
                        <div className="doctor-action">
                          <a href="#" className="btn btn-white fav-btn">
                            <i className="far fa-bookmark"></i>
                          </a>
                          <a href="chat.html" className="btn btn-white msg-btn">
                            <i className="far fa-comment-alt"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-white call-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#voice_call"
                          >
                            <i className="fas fa-phone"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-white call-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#video_call"
                          >
                            <i className="fas fa-video"></i>
                          </a>
                        </div>
                        <div className="clinic-booking"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card details_tab">
                  <div className="card-body pt-0">
                    <nav className="user-tabs mb-4">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#doc_overview"
                            data-bs-toggle="tab"
                          >
                            Doctors
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#doc_locations"
                            data-bs-toggle="tab"
                          >
                            Locations
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div className="tab-content pt-0 card">
                      <div
                        role="tabpanel"
                        id="doc_overview"
                        className="tab-pane fade show active"
                      >
                        {data?.doctors?.map((items, index) => (
                          <PolyclinicTimetableCard
                            schedule={items}
                            key={index}
                          />
                        ))}
                      </div>

                      <div
                        role="tabpanel"
                        id="doc_locations"
                        className="tab-pane fade"
                      >
                        <div className="poly-location d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row py-4 px-3">
                          <div className="poly-address">
                            <div className="contact-section poly-location">
                              <div className="contact-box">
                                <div className="infor-img">
                                  <div className="image-circle">
                                    <i className="fas fa-phone-alt"></i>
                                  </div>
                                </div>
                                <div className="infor-details">
                                  <label>Phone Number</label>
                                  <p>+91 {data?.phone}</p>
                                </div>
                              </div>
                              <div className="contact-box">
                                <div className="infor-img">
                                  <div className="image-circle bg-cus-primary">
                                    <i className="fas fa-envelope"></i>
                                  </div>
                                </div>
                                <div className="infor-details">
                                  <label>Email</label>
                                  <p>{data?.email}</p>
                                </div>
                              </div>
                              <div className="contact-box">
                                <div className="infor-img">
                                  <div className="image-circle">
                                    <i className="fas fa-map-marker-alt"></i>
                                  </div>
                                </div>
                                <div className="infor-details">
                                  <label>Location</label>
                                  <p>
                                    {data?.street_address},{data?.city},
                                    {data?.state},{data?.country}, Pin -
                                    {data?.pincode}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="poly-map mt-sm-4 mt-md-4 mt-lg-0 mt-xl-0 mt-xxl-0">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59162.79901960036!2d88.05869855798426!3d22.062026721715704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0cb35788045%3A0x58f6d5c69f0de04d!2sHaldia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1642855030171!5m2!1sen!2sin"
                              width="300"
                              height="300"
                              style={{ border: "0" }}
                              allowFullScreen=""
                              loading="lazy"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <DetailsPageLoader />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default PolyclinicId;
