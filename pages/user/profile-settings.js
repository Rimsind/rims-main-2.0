import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";

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
              <UserNav status4="active" />

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
