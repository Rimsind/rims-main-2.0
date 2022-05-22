import { BreadCrums } from "components/common/index";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import Link from "next/link";
const TestDetails = () => {
  const { clinicId, testId } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/diagnostic-centers/${clinicId}`, fetcher);

  const testInfo = data?.test_packages?.filter((items) => {
    if (items?.id.toString().includes(testId)) {
      return items;
    }
  });

  console.log(testInfo);

  return (
    <>
      <div className="main">
        <BreadCrums
          title="Home / Diagnostics / Diagnostics-Details"
          title1="Diagnostics Details"
        />
        {testInfo?.map((items, index) => (
          <section className="diag-details" key={index}>
            <div className="container">
              <div className="diag-details-inner py-4 px-4">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item me-3">
                    <a
                      className="nav-link active"
                      href="#solid-justified-tab1"
                      data-bs-toggle="tab"
                    >
                      Info for Patient
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a
                      className="nav-link"
                      href="#solid-justified-tab2"
                      data-bs-toggle="tab"
                    >
                      Test Included
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a
                      className="nav-link"
                      href="#solid-justified-tab3"
                      data-bs-toggle="tab"
                    >
                      Info for Doctor
                    </a>
                  </li>
                </ul>
                <div className="tab-content py-5 px-5">
                  <div
                    className="tab-pane show active"
                    id="solid-justified-tab1"
                  >
                    <div className="tab-content-test-title">
                      <h6
                        className="text-info pb-4"
                        style={{ fontSize: "20px" }}
                      >
                        {items?.name}
                      </h6>
                    </div>
                    <div className="tab-content-test-content">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <i
                                className="far fa-vial text-muted"
                                style={{ fontSize: "16px" }}
                              ></i>
                              <span
                                className="ms-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#000",
                                  fontWeight: "400",
                                }}
                              >
                                Test Type
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <h6
                                style={{ fontSize: "16px", fontWeight: "400" }}
                              >
                                {items?.test_type}
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <i
                                className="far fa-info-circle text-muted"
                                style={{ fontSize: "16px" }}
                              ></i>
                              <span
                                className="ms-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#000",
                                  fontWeight: "400",
                                }}
                              >
                                Pre-test Information
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <h6
                                style={{ fontSize: "16px", fontWeight: "400" }}
                              >
                                {items?.pretest_info}
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <i
                                className="far fa-ballot-check text-muted"
                                style={{ fontSize: "16px" }}
                              ></i>
                              <span
                                className="ms-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#000",
                                  fontWeight: "400",
                                }}
                              >
                                Report Delivery
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <h6
                                style={{ fontSize: "16px", fontWeight: "400" }}
                              >
                                {items?.report_delivery}
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <i
                                className="far fa-atom text-muted"
                                style={{ fontSize: "16px" }}
                              ></i>
                              <span
                                className="ms-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#000",
                                  fontWeight: "400",
                                }}
                              >
                                Components
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <h6
                                style={{ fontSize: "16px", fontWeight: "400" }}
                              >
                                -
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <i
                                className="far fa-money-bill-wave text-muted"
                                style={{ fontSize: "16px" }}
                              ></i>
                              <span
                                className="ms-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#000",
                                  fontWeight: "400",
                                }}
                              >
                                Price
                              </span>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <h6
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  fontFamily: "roboto",
                                }}
                              >
                                ₹ {items?.price}
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="add-to-cart-diag-btn">
                        <div className="row align-items-center">
                          <div className="col-3"></div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <div className="d-grid gap-2 text-center">
                              <button
                                className="btn book-btn"
                                style={{
                                  fontSize: "18px",
                                  background: "#73042b !important",
                                  borderColor: "#73042b !important",
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                          <div className="col-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="solid-justified-tab2">
                    {" "}
                    <ul>
                      {items?.test_includes?.map((data, index) => (
                        <li key={index}>
                          {" "}
                          <i className="far fa-check me-1 text-secondary"></i>
                          {data?.items}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tab-pane" id="solid-justified-tab3">
                    <div className="tab-content-test-title">
                      <h6 className="text-info" style={{ fontSize: "20px" }}>
                        Info for Doctor
                      </h6>
                    </div>
                    <p>{items?.info_for_doctor}</p>
                  </div>
                </div>
                <div className="back-to-list-diag-btn text-center py-4">
                  <Link href={`/diagnostics/test-list?id=${clinicId}`}>
                    <a className="btn btn-secondary">Back To List</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default TestDetails;
