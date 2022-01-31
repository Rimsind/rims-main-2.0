import { BreadCrums } from "components/common";

const ProfileSettings = () => {
  return (
    <>
      <div class="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Profile-Settings"
          title1="Profile-Settings"
        />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 col-lg-4 col-xl-3 sticky-top">
                <div class="profile-sidebar sticky-top">
                  <div class="widget-profile pro-widget-content">
                    <div class="profile-info-widget">
                      <a href="#" class="booking-doc-img">
                        <img
                          src="/user_assets/img/doctors/doctor-thumb-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div class="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div class="patient-details">
                          <h5>
                            <i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38
                            years
                          </h5>
                          <h5 class="mb-0">
                            <i class="fas fa-map-marker-alt"></i> Newyork, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dashboard-widget">
                    <nav class="dashboard-menu">
                      <ul>
                        <li>
                          <a href="patient-dashboard.html">
                            <i class="fas fa-columns"></i>
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="appoinments.html">
                            <i class="fas fa-bookmark"></i>
                            <span>My Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="medicine-order.html">
                            <i class="fas fa-list-alt"></i>
                            <span>My Medicine Orders</span>
                            <small class="unread-msg">7</small>
                          </a>
                        </li>
                        <li class="active">
                          <a href="update-profile.html">
                            <i class="fas fa-user-cog"></i>
                            <span>View / Update Profiles</span>
                          </a>
                        </li>
                        <li>
                          <a href="medical-info.html">
                            <i class="fas fa-user-cog"></i>
                            <span>Medical Information</span>
                          </a>
                        </li>

                        <li>
                          <a href="change-password.html">
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="advance-setting.html">
                            <i class="fas fa-user-cog"></i>
                            <span>Advance Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="patient-dashboard.html">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="card">
                  <div class="card-body">
                    <form>
                      <div class="row form-row">
                        <div class="col-12 col-md-12">
                          <div class="form-group">
                            <div class="change-avatar">
                              <div class="profile-img">
                                <img
                                  src="/user_assets/img/patients/patient.jpg"
                                  alt="User Image"
                                />
                              </div>
                              <div class="upload-img">
                                <div class="change-photo-btn">
                                  <span>
                                    <i class="fa fa-upload"></i> Upload Photo
                                  </span>
                                  <input type="file" class="upload" />
                                </div>
                                <small class="form-text text-muted">
                                  Allowed JPG, GIF or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Bappa"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Kamila"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Date of Birth</label>
                            <div class="cal-icon">
                              <input
                                type="date"
                                class="form-control"
                                placeholder="24-07-1983"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Gender</label>
                            <select class="form-select form-control">
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Martial Status</label>
                            <select class="form-select form-control">
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Blood Group</label>
                            <select class="form-select form-control">
                              <option>A-</option>
                              <option>A+</option>
                              <option>B-</option>
                              <option>B+</option>
                              <option>AB-</option>
                              <option>AB+</option>
                              <option>O-</option>
                              <option>O+</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Email ID</label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="richard@example.com"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="form-group">
                            <label>Mobile</label>
                            <input
                              type="text"
                              placeholder="+1 202-555-0125"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="806 Twin Willow Lane"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Old Forge"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>State</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Newyork"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>Zip Code</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="13420"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="United States"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="submit-section">
                        <button
                          type="submit"
                          class="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
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

export default ProfileSettings;
