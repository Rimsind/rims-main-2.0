import { BreadCrums, VerifyCard } from "components/common";
import Image from "next/image";
const ChiefComplaints = () => {
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Complaints" title1="Complaints" />

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <VerifyCard />
                <div className="card shadow-sm">
                  <div className="prbl-header">
                    <p className="fs-6 fw-bold">Explain Your Problem</p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="expln-prbl p-3">
                        <textarea
                          className="form-control mb-3"
                          rows="2"
                          cols="8"
                        ></textarea>
                        <div className="row">
                          <div className="col-md">
                            <input
                              type="text"
                              className="form-control mb-3"
                              placeholder="Duration"
                            />
                          </div>
                          <div className="col-md">
                            <div className="btn-search">
                              <button
                                type="button"
                                className="btn btn-primary w-100"
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="table-desc p-3">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th className="text-center" colSpan="2">
                                Complain Description
                              </th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="table-action">
                                <i className="far fa-times-circle"></i>
                              </td>
                              <td>Mental Problem</td>
                              <td>5 months</td>
                            </tr>
                            <tr>
                              <td className="table-action">
                                <i className="far fa-times-circle"></i>
                              </td>
                              <td>Mental Problem</td>
                              <td>5 months</td>
                            </tr>
                            <tr>
                              <td className="table-action">
                                <i className="far fa-times-circle"></i>
                              </td>
                              <td>Mental Problem</td>
                              <td>5 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card accrd-section shadow-sm">
                  <div className="accrd-header">
                    <p className="fs-6 fw-bold">Advance Option</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="100"
                                        width="100"
                                        src="/assets/images/accordian/general-problem.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      General Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Fiver
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Chills
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="150"
                                        width="150"
                                        src="/assets/images/accordian/rheumatology.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Rehumetologic
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Joint Swelling
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Muscle Pain
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="100"
                                        width="100"
                                        src="/assets/images/accordian/neurological.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Neurologic Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Headaches
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Pain spreading from one place to another
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="100"
                                        width="100"
                                        src="/assets/images/accordian/heart-problem.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Heart Related Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Chest Pain
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Fast Heart Beat
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="accordion" id="accordionRight">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="50"
                                        width="50"
                                        src="/assets/images/accordian/blood.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Blood Related Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#accordionRight"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Skin Color Change
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Nail Bed Change
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="50"
                                        width="50"
                                        src="/assets/images/accordian/stomach.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Stomach & Abdominal Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#accordionRight"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Abdominal Pain
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Vomiting
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="150"
                                        width="150"
                                        src="/assets/images/accordian/mental-problem.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Mental Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseSeven"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSeven"
                              data-bs-parent="#accordionRight"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    High Strees Level
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Sleeping Problems
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                              >
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div className="accrd-img">
                                      <Image
                                        height="100"
                                        width="100"
                                        src="/assets/images/accordian/genetial.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <p className="fs-6 fw-normal">
                                      Genetial Problems
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="collapseEight"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingEight"
                              data-bs-parent="#accordionRight"
                            >
                              <div className="accordion-body">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Changein urine color
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    Testicular pain or swelling
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-next text-end">
                  <a href="checkout.html" className="btn btn-primary">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChiefComplaints;
