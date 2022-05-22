import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import { useRouter } from "next/router";
import { TestCard } from "components/common";
const Index = () => {
  const { id } = useRouter().query;
  const { data } = useSWR(`${apiUrl}/diagnostic-centers/${id}`, fetcher);
  return (
    <>
      <div className="section-test-list">
        <div className="container-fluid">
          <div className="content">
            <div className="row align-items-start">
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 sticky-lg-top sticky-xl-top sticky-xxl-top">
                <div className="left-test-list-title">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="fs-6 fw-bold">CONDITIONS</h6>
                    </div>
                    <div className="card-body">
                      <ul className=" list-unstyled">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Heart
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Infertility
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Kidney
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Liver
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Lungs
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              Thyroid
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                <div className="test-list-right-title">
                  <h6
                    style={{
                      fontSize: "25px",
                      fontFamily: "ubuntu",
                      fontWeight: "500",
                    }}
                  >
                    BOOK A LAB TEST IN WEST BENGAL
                  </h6>
                </div>
                <div className="test-list-right-sub-title">
                  <h6 className="fs-6 text-info">Online Test Booking</h6>
                </div>
                <div className="right-test-list">
                  <div className="row align-items-center">
                    {data?.test_packages?.map((items, index) => (
                      <div
                        className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                        key={index}
                      >
                        <TestCard data={items} clinicId={id} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-main-pagination mb-4">
            <div className="list-pagination">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-10"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-2">
                  <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary">
                          Prev
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary disabled"
                        >
                          1
                        </button>
                        <button type="button" className="btn btn-primary">
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
  );
};

export default Index;
