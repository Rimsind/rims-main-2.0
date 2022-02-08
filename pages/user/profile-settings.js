import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";

const ProfileSettings = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Profile-Settings"
          title1="Profile-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status4="active" />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div>
                  <form>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="form-group d-flex justify-content-between align-items-center">
                              <div className="change-avatar">
                                <div className="profile-img">
                                  <Image
                                    height="100"
                                    width="100"
                                    src="/assets/images/profile.png"
                                    alt="User Image"
                                  />
                                </div>
                                <div className="upload-img">
                                  <div className="change-photo-btn">
                                    <span>
                                      <i className="fa fa-upload"></i> Upload
                                      Photo
                                    </span>
                                    <input type="file" className="upload" />
                                  </div>
                                  <small className="form-text text-muted">
                                    Allowed JPG, GIF or PNG. Max size of 2MB
                                  </small>
                                </div>
                              </div>

                              <div className="upload-btn">
                                <button type="btn" className="btn btn-primary">
                                  Upload
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row form-row">
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Bappa"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Kamila"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Date of Birth</label>
                              <div className="cal-icon">
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="24-07-1983"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Gender</label>
                              <select className="form-select form-control">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Martial Status</label>
                              <select className="form-select form-control">
                                <option>Married</option>
                                <option>Unmarried</option>
                                <option>Divorce</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Blood Group</label>
                              <select className="form-select form-control">
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
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Email ID</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="richard@example.com"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="form-group">
                              <label>Mobile</label>
                              <input
                                type="text"
                                placeholder="+1 202-555-0125"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="submit-section text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-btn"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row form-row">
                          <div className="col-12">
                            <div className="form-group">
                              <label>Address</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="806 Twin Willow Lane"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>City</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Old Forge"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>State</label>
                              <select className="form-select form-control">
                                <option>Mumbai</option>
                                <option>Delhi</option>
                                <option>West Bengal</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Zip Code</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="13420"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Country</label>
                              <select className="form-select form-control">
                                <option>India</option>
                                <option>China</option>
                                <option>Pakistan</option>
                              </select>
                            </div>
                          </div>
                          <div className="submit-section text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-btn"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
