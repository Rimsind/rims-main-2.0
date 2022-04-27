import Image from "next/image";
import { BreadCrums, DoctorTimetableCard } from "components/common/index";

import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
const DetailsNew = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/doctors/${id}`, fetcher);
  return (
    <>
      <section className="section section-details">
        <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
        <div className="container-fluid">
          <div className="content">
            <div className="row align-items-start">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                <div className="card">
                  <div className="card-body">
                    <div className="doctor-left-profile">
                      <div
                        className="doctor-left-profile-inner"
                        style={{
                          background: "url(/user_assets/img/bg-doc-bnnr.jpg)",
                          position: "relative",
                          padding: "4rem",
                        }}
                      >
                        <div
                          className="doc-lft-prof"
                          style={{
                            position: "absolute",
                            marginTop: "-50px",
                            marginLeft: "-40px",
                          }}
                        >
                          {data?.gender === "Male" && (
                            <Image
                              height="140"
                              width="140"
                              src={
                                data?.image?.url ||
                                "/assets/images/alternate/doctor-male.png"
                              }
                              style={{
                                height: "15rem",
                                background: "#0b6ea5",
                                padding: "10px",
                              }}
                              className="img-fluid border border-1 rounded-circle"
                              alt="User Image"
                            />
                          )}
                          {data?.gender === "Female" && (
                            <Image
                              height="140"
                              width="140"
                              src={
                                data?.image?.url ||
                                "/assets/images/alternate/doctor-female.png"
                              }
                              style={{
                                height: "15rem",
                                background: "#0b6ea5",
                                padding: "10px",
                              }}
                              className="img-fluid border border-1 rounded-circle"
                              alt="User Image"
                            />
                          )}
                          {data?.gender === "" ||
                            (data.gender === null && (
                              <Image
                                height="140"
                                width="140"
                                src={
                                  data?.image?.url ||
                                  "/assets/images/alternate/alt-user.png"
                                }
                                style={{
                                  height: "15rem",
                                  background: "#0b6ea5",
                                  padding: "10px",
                                }}
                                className="img-fluid border border-1 rounded-circle"
                                alt="User Image"
                              />
                            ))}
                          {/* <Image
                            height="140"
                            width="140"
                            src="/assets/images/alternate/doctor-male.png"
                            className="img-fluid border border-1 rounded-circle bg-light"
                            alt="User Image"
                            style={{
                              height: "15rem",
                              background: "#0b6ea5",
                              padding: "10px",
                            }}
                          /> */}
                        </div>
                      </div>
                      <div className="doc-lft-innr-dtls mt-5">
                        <div className="doc-lft-innr-titl">
                          <h6>
                            <span className="fs-5 fw-bold text-info">
                              Dr. {data?.firstName} {data?.lastName}
                            </span>
                          </h6>
                        </div>
                        <div className="doc-lft-innr-sb-titl">
                          <h6 className="fs-6 text-muted fst-italic">
                            {data?.specialty?.name}
                          </h6>
                        </div>
                        <div className="doc-left-innr-qal mt-4">
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              {data?.address?.city}, {data?.address?.state}
                            </span>
                          </h6>
                          <h6 className="doc-department text-secondary fs-6">
                            <Image
                              height={20}
                              width={20}
                              src={
                                data?.specialty?.image?.url ||
                                "/images/profile.png"
                              }
                              alt=""
                            />{" "}
                            {data?.specialty?.name}
                          </h6>
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i className="fas fa-certificate"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              {data?.qualification}
                            </span>
                          </h6>
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i class="fas fa-suitcase"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              {data?.experienceInYrs} years experience,
                              Consultant
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h6 className="fs-6 fw-bold">About Me</h6>
                  </div>
                  <div className="card-body">
                    <p>{data?.bio}</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h6 className="fs-6 fw-bold">Educations & Awards</h6>
                  </div>
                  <div className="card-body">
                    <div className="edu-awrd">
                      <div className="experience-box">
                        <ul className="experience-list">
                          {data?.educationAndAwards?.map((items, index) => (
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
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10">
                <div className="card">
                  <div className="card-body">
                    <div>
                      {data?.booking_schedule?.map((items, index) => (
                        <DoctorTimetableCard
                          data={items}
                          key={index}
                          doctorId={id}
                        />
                      ))}
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

export default DetailsNew;
