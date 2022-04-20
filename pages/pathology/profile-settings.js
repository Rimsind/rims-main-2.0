import PathologySideBar from "components/common/PathologySideBar";
import Image from "next/image";
import Link from "next/link";

const ProfileSettings = () => {
  return (
    <>
      <section className="patho-profile">
        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <PathologySideBar />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="patho-profile-pic">
                  <div className="row form-row">
                    <div className="col-12 col-md-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="form-group d-flex justify-content-between align-items-center upload-profile flex-column flex-lg-row flex-xl-row flex-xxl-row">
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
                                <input
                                  type="file"
                                  className="upload form-control"
                                />
                                <small className="form-text text-danger">
                                  Allowed JPG, JPEG or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>

                            <div className="upload-btn">
                              <div className="upload-btn-spin">
                                {/* <button className="btn btn-primary">
                                  <div className="d-flex align-items-center">
                                    <div
                                      className="spinner-border ms-auto me-3"
                                      role="status"
                                      aria-hidden="true"
                                    ></div>
                                    <strong>Uploading...</strong>
                                  </div>
                                </button> */}
                                <button className="btn btn-primary ps-5 pe-5 pt-2 pb-2">
                                  Upload
                                </button>
                              </div>
                              {/* <input
                      type="btn"
                      className="btn btn-primary"
                      value={loading ? "Uploading..." : "upload Image"}
                      disabled={loading}
                      onClick={uploadProfileImage}
                    /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patho-profile-details">
                  <div className="card">
                    <div className="card-header">
                      <p className="fs-5 fw-bold text-center">
                        Profile Details
                      </p>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="row align-items-center">
                              <div className="col-md-4">
                                <div className="nursing-form-input">
                                  <label>Pathology Name</label>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="nursing-form-input">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pathology Name"
                                    name="Pathology_name"
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
                                    disabled
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
                                    name="Pathology_phone"
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
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="eg: 10:00 A.M."
                                    name="Pathology_start_time"
                                  />
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
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="eg: 03:30 P.M."
                                    name="Pathology_end_time"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="save-btn-poly mt-4 text-end">
                          <input
                            type="submit"
                            className="btn btn-primary submit-btn ps-5 pe-5 pt-2 pb-2"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="patho-address-details">
                  <div className="card">
                    <div className="card-header">
                      <p className="fs-5 fw-bold text-center lh-1">Address</p>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-7">
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <label>Street Address</label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Street Address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="nursing-form-input">
                                  <label>City</label>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="nursing-form-input">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    name="city"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <div className="nursing-form-input">
                                  <label>State</label>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="nursing-form-input">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    name="state"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <div className="nursing-form-input">
                                  <label>Country</label>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="nursing-form-input">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Country"
                                    name="country"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="row align-items-center">
                              <div className="col-md-4">
                                <div className="nursing-form-input">
                                  <label>Pin Code</label>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="nursing-form-input">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Pin Code"
                                    name="pincode"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <div className="nursing-form-input">
                                  <label>Google Map Location</label>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="nursing-form-input">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter map url"
                                    name="google_map"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="save-btn-poly mt-4 text-end">
                          <input
                            type="submit"
                            className="btn btn-primary submit-btn ps-5 pe-5 pt-2 pb-2"
                          />
                        </div>
                      </form>
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

export default ProfileSettings;
