import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const NursingHomeId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/nursing-homes/${id}`, fetcher);
  console.log(data);

  return (
    <>
      <main className="main">
        <BreadCrums
          title="Home / Nursing-Home Details"
          title1="Nursing-Home Details"
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
                                data?.profile_image?.url ||
                                "/assets/images/polyclinic.jpg"
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
                            {data?.city},{data?.state}
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
                              {data?.workingHours?.Start} to{" "}
                              {data?.workingHours?.end}
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {data?.street_address}, {data?.city},{data?.state}
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
                            Overview
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#doc_doctor"
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

                    <div className="tab-content pt-0">
                      <div
                        role="tabpanel"
                        id="doc_overview"
                        className="tab-pane fade active show"
                      >
                        <div className="row">
                          <div className="col-md-12 col-lg-9">
                            <div className="widget about-widget">
                              <h4 className="widget-title">About Me</h4>
                              <p>{data?.overview}</p>
                            </div>
                          </div>
                        </div>
                        <div className="nurshing-facilty">
                          <div className="row">
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec.png"
                                    alt=""
                                  />
                                  <h4>Regular Bed</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.totlaRegularBeds}
                                      <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a href="#" className="clin-count">
                                      {data?.availableRegularbeds}{" "}
                                      <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec-01.png"
                                    alt=""
                                  />
                                  <h4>ICU Bed</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.TotalIcuBeds} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a href="#" className="clin-count">
                                      {data?.availableIcuBeds}{" "}
                                      <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec-02.png"
                                    alt=""
                                  />
                                  <h4>Ambulance</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.no_of_ambulance} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a href="#" className="clin-count">
                                      {data?.availableAmbulance}{" "}
                                      <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec-04.png"
                                    alt=""
                                  />
                                  <h4>Icu Ambulance</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.no_of_icu_ambulance}{" "}
                                      <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a href="#" className="clin-count">
                                      {data?.availableIcuAmbulance}{" "}
                                      <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4"></div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec-04.png"
                                    alt=""
                                  />
                                  <h4>Burn Units</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.totalBurnUnits} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a href="#" className="clin-count">
                                      {data?.availableBurnUnits}{" "}
                                      <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    height="45"
                                    width="45"
                                    src="/assets/images/shapes/spec-04.png"
                                    alt=""
                                  />
                                  <h4>Doctors</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a href="#" className="doc-count">
                                      {data?.TotalDoctors} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end"></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        role="tabpanel"
                        id="doc_doctor"
                        className="tab-pane fade show"
                      >
                        <PolyclinicTimetableCard />
                      </div>

                      <div
                        role="tabpanel"
                        id="doc_locations"
                        className="tab-pane fade"
                      >
                        <div className="poly-location d-flex justify-content-between flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row py-4 px-3">
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
                                    {data?.street_address}, {data?.city},
                                    {data?.state}, {data?.country}, PIN -{" "}
                                    {data?.pincode}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="poly-map">
                            <iframe
                              src={data?.google_map}
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

export default NursingHomeId;
