import { BreadCrums, PolyclinicTimetableCard } from "components/common/index";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { DetailsPageLoader } from "components/Loaders";

const DetailsNew = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/polyclinics/${id}`, fetcher);
  return (
    <section className="section-details">
      <BreadCrums title="Home / Doctor Details" title1="Doctor Details" />
      <div className="container-fluid">
        {data ? (
          <>
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
                            <Image
                              height="140"
                              width="140"
                              src={
                                data?.image?.url ||
                                "/assets/images/alternate/alt-hospital.png"
                              }
                              style={{
                                height: "15rem",
                                background: "#0b6ea5",
                                padding: "10px",
                              }}
                              className="img-fluid border border-1 rounded-circle bg-light"
                              alt="User Image"
                            />
                          </div>
                        </div>
                        <div className="doc-lft-innr-dtls mt-5">
                          <div className="doc-lft-innr-titl">
                            <h6>
                              <span className="fs-5 fw-bold text-info">
                                {data?.name}
                              </span>
                            </h6>
                          </div>
                          <div className="doc-lft-innr-sb-titl">
                            <h6 className="fs-6 text-muted fst-italic">
                              {data?.city}, {data?.state}
                            </h6>
                            <h6 className="fs-6 text-muted mt-4">
                              <span className="text-info">
                                <i className="fas fa-clock"></i>
                              </span>
                              <span className="text-secondary ms-2">
                                {data?.workingHours?.Start} to{" "}
                                {data?.workingHours?.end}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h6 className="fs-6 fw-bold">Features</h6>
                    </div>
                    <div className="card-body">
                      <div className="doc-left-innr-qal">
                        <div className="clinic-services">
                          {data?.features?.map((items, index) => (
                            <span className="me-1 mb-1 ms-1" key={index}>
                              {items?.feature_name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h6 className="fs-6 fw-bold">Contact Us</h6>
                    </div>
                    <div className="card-body">
                      <div className="doc-left-innr-qal">
                        <span
                          className="text-info"
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            fontStyle: "italic",
                          }}
                        >
                          Address
                        </span>
                        <h6 className="fs-6 text-secondary">
                          {data?.street_address},{data?.city},{data?.state}, Pin
                          -{data?.pincode}
                        </h6>
                        <span
                          className="text-info"
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            fontStyle: "italic",
                          }}
                        >
                          Email ID
                        </span>
                        <h6 className="fs-6 text-secondary">{data?.email}</h6>
                        <span
                          className="text-info"
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            fontStyle: "italic",
                          }}
                        >
                          Phone No.
                        </span>
                        <h6 className="fs-6 text-secondary">{data?.phone}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="doc-left-innr-qal">
                        <iframe
                          src={data?.google_map}
                          width="260"
                          height="200"
                          style={{ border: "0" }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10">
                  <div className="row align-items-start">
                    {data?.doctors?.map((items, index) => (
                      <PolyclinicTimetableCard data={items} key={index} />
                    ))}
                  </div>

                  <div className="user-main-pagination mb-4">
                    <div className="list-pagination">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10"></div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                          <div className="row">
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button type="button" class="btn btn-primary">
                                Prev
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary disabled"
                              >
                                1
                              </button>
                              <button type="button" class="btn btn-primary">
                                Next
                              </button>
                            </div>
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
    </section>
  );
};

export default DetailsNew;
