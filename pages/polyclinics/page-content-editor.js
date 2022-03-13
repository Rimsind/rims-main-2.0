import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";

const PageContentEditor = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/polyclinics/${auth?.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  return (
    <>
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <PolyclinicSideBar data={data} status1="active" />

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Overview</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">Regular Bed</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Bed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Bed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">ICU Bed</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Bed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Bed</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Bed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">
                            Regular Ambulance
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Ambulance"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Ambulance"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">ICU Ambulance</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Ambulance"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Ambulance</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Ambulance"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">
                            Operation Theater
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total OT</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total OT"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available OT</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available OT"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <div className="nursing-form-input">
                          <label className="fs-6 fw-bold">Burn Care Unit</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Total Unit</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Total Unit"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Available Unit</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Available Unit"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Features</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                      <label className="form-check-label">
                        Dental Fillings
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                      <label className="form-check-label">Whitneing</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="option1"
                      />
                      <label className="form-check-label">Whitneing</label>
                    </div>
                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
              <p className="fs-5 fw-bold">Premium Page</p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="form-group upload-profile d-flex justify-content-center"
                    style={{
                      background: "url(/user_assets/img/featured-bg.jpg)",
                      height: "200px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-8 col-md-8">
                        <div className="change-avatar">
                          <div className="upload-img">
                            <div className="change-photo-btn">
                              <span>
                                <i className="fa fa-upload"></i> Upload Photo
                              </span>
                              <input
                                type="file"
                                className="upload"
                                // onChange={(e) =>
                                //   setProfileImage(e.target.files[0])
                                // }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 col-md-4">
                        <div className="upload-btn">
                          <input
                            type="btn"
                            className="btn btn-primary"
                            value="Upload"
                            // value={loading ? "Uploading..." : "upload"}
                            // disabled={loading}
                            // onClick={uploadProfileImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body poly-section2 justify-content-center align-items-center">
                  <div className="row">
                    <div className="col-6 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Short Information"
                      />
                    </div>
                    <div className="col-6 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Short Paragraph"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body poly-section3">
                  <div className="row">
                    <div
                      className="col-md-6"
                      style={{
                        backgroundColor: "#0779bb",
                        color: "#fafcfe",
                        padding: "50px 50px",
                      }}
                    >
                      <div className="poly-item">
                        <p className="fs-6 fw-bold">Who We Are</p>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="EASY TO USE COMPLETE MEDICAL SOLUTION."
                          />
                        </div>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                          ></textarea>
                          <label>Accessibility matters especially...</label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      style={{
                        backgroundColor: "#0a8cd7",
                        color: "#fafcfe",
                        padding: "50px 50px",
                      }}
                    >
                      <div className="poly-item">
                        <p className="fs-6 fw-bold">Visiting Hours</p>
                        <div className="visiting-hours">
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Monday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Tuesday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Wednesday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Thursday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Friday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-2 col-md-2">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Saturday
                                </label>
                              </div>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                            <div className="col-2 col-md-2">
                              <p className="fs-6 fw-bold text-center">To</p>
                            </div>
                            <div className="col-4 col-md-4">
                              <div className="form-check form-check-inline">
                                <input type="time" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-md-6">
                      <div className="about-heading mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Thank you for visiting Polyclinic!"
                        />
                      </div>
                      <div className="about-sub-heading mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="WE ARE A CLINIC THAT HAS BEEN IN BUSINESS FOR 15 YEARS PROVIDING TOP LOCAL MEDICAL CARE."
                        />
                      </div>
                      <div className="about-para">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label htmlFor="floatingTextarea2">Paragraph</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <div className="row">
                        <div
                          className="col-5 col-md-5 d-flex align-items-center flex-column justify-content-center"
                          style={{
                            background: "url(/user_assets/img/featured-bg.jpg)",
                            height: "250px",
                          }}
                        >
                          <div className="change-avatar">
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  className="upload"
                                  // onChange={(e) =>
                                  //   setProfileImage(e.target.files[0])
                                  // }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="upload-btn">
                            <input
                              type="btn"
                              className="btn btn-primary"
                              value="Upload"
                              // value={loading ? "Uploading..." : "upload"}
                              // disabled={loading}
                              // onClick={uploadProfileImage}
                            />
                          </div>
                        </div>
                        <div className="col-2 col-md-2"></div>
                        <div
                          className="col-5 col-md-5 d-flex align-items-center flex-column justify-content-center"
                          style={{
                            background: "url(/user_assets/img/featured-bg.jpg)",
                            height: "250px",
                          }}
                        >
                          <div className="change-avatar">
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  className="upload"
                                  // onChange={(e) =>
                                  //   setProfileImage(e.target.files[0])
                                  // }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="upload-btn">
                            <input
                              type="btn"
                              className="btn btn-primary"
                              value="Upload"
                              // value={loading ? "Uploading..." : "upload"}
                              // disabled={loading}
                              // onClick={uploadProfileImage}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header text-center">
                  <p className="fs-5 fw-bold">Add Polyclinic Services</p>
                </div>
                <div className="card-body">
                  <div className="poly-service">
                    <div className="row align-items-center mt-4">
                      <div className="col-3 col-md-3">
                        <div className="poly-service-item">
                          <p className="fs-6 fw-bold">Add Service</p>
                        </div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="poly-service-item">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Service Name"
                          />
                        </div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="poly-service-item">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Service Details"
                          />
                        </div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="poly-service-item">
                          <button className="btn btn-primary">Add</button>
                        </div>
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

export default PageContentEditor;
