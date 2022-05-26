import { BreadCrums, DoctorTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";
const DoctorId = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/doctors/${id}`, fetcher);

  return (
    <>
      <section className="section section-details">
        <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
        {data ? (
          <div className="container-fluid">
            <div className="content">
              <div className="row align-items-start">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                              (data?.gender === null && (
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
                          </div>
                        </div>
                        <div className="doc-lft-innr-dtls mt-5">
                          <div className="row align-items-start">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
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
                                    {data?.address?.city},{" "}
                                    {data?.address?.state}
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
                                    <i className="fas fa-suitcase"></i>
                                  </span>
                                  <span className="text-secondary ms-2">
                                    {data?.experienceInYrs} years experience,
                                    Consultant
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mt-3 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
                              <h6 className="fs-5 fw-bold mb-3 border-bottom border-1 pb-2">
                                About Me
                              </h6>
                              <div className="about-me-doctor-para">
                                <p>{data?.bio}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="fs-5 fw-bold mb-3 border-bottom border-1 pb-2">
                        Education & Awards
                      </h6>
                      <div className="edu-awrd">
                        <div className="experience-box">
                          <div className="row align-items-center">
                            {data?.educationAndAwards?.map((items, index) => (
                              <div
                                className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
                                key={index}
                              >
                                <div className="edu-inner-item bg-primary-light p-3 my-2">
                                  <h6 className="fs-6 fw-bold">
                                    {items?.degreeOrAward}
                                  </h6>
                                  <h6>{items?.institution}</h6>
                                  <h6>
                                    <span className="me-2">
                                      Recieving Year-
                                    </span>
                                    {items?.receivingYear}
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div>
                    <section className="doctor-location">
                      <div className="doc-time-tab-table table-responsive table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl">
                        <table className="table table-bordered border-secondary align-middle">
                          <thead
                            style={{
                              backgroundColor: "#2f71ab",
                              color: "#fff",
                            }}
                          >
                            <tr>
                              <th>Clinics</th>
                              <th className="text-center">Monday</th>
                              <th className="text-center">Tuesday</th>
                              <th className="text-center">Wednesday</th>
                              <th className="text-center">Thursday</th>
                              <th className="text-center">Friday</th>
                              <th className="text-center">Saturday</th>
                              <th className="text-center">Sunday</th>
                              <th className="text-center">Details</th>
                            </tr>
                          </thead>
                          {data?.timeTable?.map((items, index) => (
                            <DoctorTimetableCard
                              data={items}
                              key={index}
                              doctorId={id}
                              indexValue={index + 1}
                            />
                          ))}{" "}
                        </table>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <DetailsPageLoader />
          </>
        )}
      </section>
    </>
  );
};

export default DoctorId;
