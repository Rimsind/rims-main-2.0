import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const NursingHomeId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/nursing-homes/${id}`, fetcher);

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
                            {data?.city},{data?.state}
                          </p>
                          <i className="far fa-envelope"></i> {data?.email}
                          <div className="clinic-details"></div>
                          <div className="clinic-services">
                            {data?.features?.map((items, index) => (
                              <span key={index}>{items?.feature_name}</span>
                            ))}
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
                              {data?.workingHours?.start_time} to{" "}
                              {data?.workingHours?.end_time}
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {data?.street_address}, {data?.city},{data?.state}
                            </li>
                          </ul>
                        </div>
                        <div className="doctor-action">
                          <a className="btn btn-white fav-btn disabled">
                            <i className="far fa-bookmark"></i>
                          </a>
                          <a
                            href="chat.html"
                            className="btn btn-white msg-btn disabled"
                          >
                            <i className="far fa-comment-alt"></i>
                          </a>
                          <a
                            className="btn btn-white call-btn disabled"
                            data-bs-toggle="modal"
                            data-bs-target="#voice_call"
                          >
                            <i className="fas fa-phone"></i>
                          </a>
                          <a
                            className="btn btn-white call-btn disabled"
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
                                    src="/assets/images/Regular-Bed.png"
                                    height="50px"
                                    width="50px"
                                    alt="Regular Bed"
                                  />
                                  <h4>Regular Bed</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalRegularBeds}
                                      <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
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
                                    src="/assets/images/ICU-Bed.png"
                                    height="50px"
                                    width="50px"
                                    alt="ICU Bed"
                                  />
                                  <h4>ICU Bed</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalIcuBeds} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
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
                                    src="/assets/images/Ambulance.png"
                                    height="50px"
                                    width="50px"
                                    alt="Ambulance"
                                  />
                                  <h4>Ambulance</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalAmbulance} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
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
                                    src="/assets/images/Icu-Ambulance.png"
                                    height="50px"
                                    width="50px"
                                    alt="Icu Ambulance"
                                  />
                                  <h4>Icu Ambulance</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalIcuAmbulance}{" "}
                                      <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
                                      {data?.availableIcuAmbulance}{" "}
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
                                    src="/assets/images/OT.png"
                                    height="50px"
                                    width="50px"
                                    alt="Doctors"
                                  />
                                  <h4>Operation Theater</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalOT} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
                                      {data?.availableOT} <span>Available</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                              <div className="special-box text-center">
                                <div className="special-body">
                                  <Image
                                    src="/assets/images/Burn-Units.png"
                                    height="50px"
                                    width="50px"
                                    alt="Burn Units"
                                  />
                                  <h4>Burn Care Units</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-start">
                                    <a className="doc-count">
                                      {data?.totalBurnUnits} <span>Total</span>
                                    </a>
                                  </div>
                                  <div className="col-6 text-end">
                                    <a className="clin-count">
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
                                    src="/assets/images/Doctors.png"
                                    height="50px"
                                    width="50px"
                                    alt="Doctors"
                                  />
                                  <h4>Doctors & Nurse</h4>
                                </div>
                                <div className="row row-sm special-footer">
                                  <div className="col-6 text-center">
                                    <a className="doc-count">
                                      {data?.totalDoctors} <span>Total</span>
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
                        <div className="row align-items-start">
                          {data?.doctors?.map((items, index) => (
                            <PolyclinicTimetableCard data={items} key={index} />
                          ))}
                        </div>
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
