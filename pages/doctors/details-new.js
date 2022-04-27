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
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
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
                          <Image
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
                          />
                        </div>
                      </div>
                      <div className="doc-lft-innr-dtls mt-5">
                        <div className="doc-lft-innr-titl">
                          <h6>
                            <span className="fs-3 fw-bold text-info">
                              Dr. Samir Barman
                            </span>
                            <span className="fs-5 ms-2 text-muted">
                              Consultant, Medicine
                            </span>
                          </h6>
                        </div>
                        <div className="doc-lft-innr-sb-titl">
                          <h6 className="fs-6 text-muted fst-italic">
                            Co-Director at Mayro Clinic Graduate School
                          </h6>
                        </div>
                        <div className="doc-left-innr-qal mt-4">
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              City Center, Haldia
                            </span>
                          </h6>
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i class="fas fa-user-tag"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              Medicine
                            </span>
                          </h6>
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i class="fas fa-badge"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              MBBS, MD
                            </span>
                          </h6>
                          <h6 className="fs-6 text-muted">
                            <span className="text-info">
                              <i class="fas fa-suitcase"></i>
                            </span>
                            <span className="text-secondary ms-2">
                              25 Yrs Experience
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
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h6 className="fs-6 fw-bold">Educations & Awards</h6>
                  </div>
                  <div className="card-body">
                    <div className="edu-awrd">
                      <h6 className="fs-6 text-muted">
                        <span className="text-info">
                          <i class="fas fa-suitcase"></i>
                        </span>
                        <span className="text-secondary ms-2">
                          25 Yrs Experience
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="">
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
