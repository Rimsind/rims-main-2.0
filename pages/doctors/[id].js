import { BreadCrums, DoctorTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
import { useAuth } from "context";
const DoctorId = () => {
  const { id } = useRouter().query;
  const { auth } = useAuth();

  const { data } = useSWR(`${apiUrl}/doctors/${id}`, fetcher);

  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
        <div className="content">
          <div className="container">
            {data ? (
              <>
                <div className="card">
                  <div className="card-body">
                    <div className="doctor-widget">
                      <div className="doc-info-left">
                        <div className="doctor-img">
                          <Image
                            height="140"
                            width="140"
                            src={data?.image?.url || "/images/profile.png"}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </div>
                        <div className="doc-info-cont">
                          <h4 className="doc-name">
                            Dr. {data?.firstName} {data?.lastName}
                          </h4>
                          <p className="doc-speciality">
                            {data?.experienceInYrs} years experience, Consultant
                            {data?.specialty?.name}
                          </p>
                          <h5 className="doc-department">
                            <Image
                              height={20}
                              width={20}
                              src={data?.specialty?.image?.url}
                              alt=""
                            />{" "}
                            {data?.specialty?.name}
                          </h5>
                          <i className="far fa-envelope mb-3"></i> {data?.email}
                          <div className="clinic-services">
                            <span>
                              <i className="fab fa-skype"></i> Skype Id:{" "}
                              {data?.skype_id}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="doc-info-right">
                        <div className="clini-infos">
                          <ul>
                            <li>
                              <i className="fas fa-certificate"></i>{" "}
                              {data?.qualification}
                            </li>

                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {data?.address?.city}, {data?.address?.state}
                            </li>
                            {/* <li>
                          <i className="far fa-money-bill-alt"></i> ₹300 - ₹1000
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li> */}
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
                            href="#doc_locations"
                            data-bs-toggle="tab"
                          >
                            Locations
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#doc_overview"
                            data-bs-toggle="tab"
                          >
                            Overview
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div className="tab-content pt-0">
                      <div
                        role="tabpanel"
                        id="doc_locations"
                        className="tab-pane fade show active"
                      >
                        <div className="location-list">
                          {data?.timetable?.map((items, index) => (
                            <DoctorTimetableCard
                              schedule={items}
                              key={index}
                              doctor={id}
                              auth={auth}
                            />
                          ))}
                        </div>
                      </div>

                      <div
                        role="tabpanel"
                        id="doc_overview"
                        className="tab-pane fade"
                      >
                        <div className="row">
                          <div className="col-md-12 col-lg-9">
                            <div className="widget about-widget">
                              <h4 className="widget-title">About Me</h4>
                              <p>{data?.bio}</p>
                            </div>

                            <div className="widget education-widget">
                              <h4 className="widget-title">
                                Education & Awards
                              </h4>
                              <div className="experience-box">
                                <ul className="experience-list">
                                  {data?.educationAndAwards.map(
                                    (items, index) => (
                                      <li key={index}>
                                        <div className="experience-user">
                                          <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                          <div className="timeline-content">
                                            <a href="#/" className="name">
                                              {items?.degreeOrAward}
                                            </a>
                                            <div>{items?.institution}</div>
                                            <span className="time">
                                              {items?.receivingYear}
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
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

export default DoctorId;
