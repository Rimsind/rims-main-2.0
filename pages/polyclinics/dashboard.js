import Image from "next/image";
const Dashboard = () => {
  return (
    <>
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 sticky-top">
              <div className="profile-sidebar sticky-top">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <Image
                        height="145"
                        width="145"
                        src="/assets/images/profile.png"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake"></i> 24 Jul 1983,
                          38 years
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="patient-dashboard.html">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="appoinments.html">
                          <i className="fas fa-bookmark"></i>
                          <span>My Appointments</span>
                        </a>
                      </li>
                      <li>
                        <a href="medicine-order.html">
                          <i className="fas fa-list-alt"></i>
                          <span>My Medicine Orders</span>
                          <small className="unread-msg">7</small>
                        </a>
                      </li>
                      <li>
                        <a href="update-profile.html">
                          <i className="fas fa-user-cog"></i>
                          <span>View / Update Profiles</span>
                        </a>
                      </li>
                      <li>
                        <a href="medical-info.html">
                          <i className="fas fa-user-cog"></i>
                          <span>Medical Information</span>
                        </a>
                      </li>

                      <li>
                        <a href="change-password.html">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="advance-setting.html">
                          <i className="fas fa-user-cog"></i>
                          <span>Advance Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="patient-dashboard.html">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="form-group d-flex justify-content-between align-items-center upload-profile">
                    <div className="change-avatar">
                      <div className="profile-img">
                        <Image
                          height="100"
                          width="100"
                          src={"/assets/images/profile.png"}
                          alt="User Image"
                        />
                      </div>
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
                        <small className="form-text text-muted">
                          Allowed JPG, GIF or PNG. Max size of 2MB
                        </small>
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
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center">Polyclinic Details</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Polyclinic Name</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Polyclinic Name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Email Id</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email Id"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Phone</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="eg: 987456321"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Opening Time</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="nursing-form-input">
                              <label>Closing Time</label>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="nursing-form-input">
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Address</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <label>Street Address</label>
                          </div>
                          <div className="col-md-9">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                placeholder="Enter address"
                                rows="5"
                              ></textarea>
                              <label>Enter here</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>Landmark</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Landmark"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>City</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>State</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>Country</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>Pin Code</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Pin Code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <label>Google Map Location</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="nursing-form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter map url"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-3">
                      <div className="col-md-2">
                        <label>Description</label>
                      </div>
                      <div className="col-md-10">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Enter address"
                            rows="5"
                          ></textarea>
                          <label>Enter here</label>
                        </div>
                      </div>
                    </div>
                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="card">
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
              </div> */}
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Doctors</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="fs-6 fw-bold">Add Doctors</label>
                        </div>
                        <div className="col-md-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Doctors</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
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
                                  for="inlineCheckbox1"
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
                                  for="inlineCheckbox1"
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
                                  for="inlineCheckbox1"
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
                                  for="inlineCheckbox1"
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
                                  for="inlineCheckbox1"
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
                                  for="inlineCheckbox1"
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
                          <label for="floatingTextarea2">Paragraph</label>
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

export default Dashboard;
