import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
import { ProfilePicture } from "components/forms";
const ProfileSettings = () => {
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
      {" "}
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <PolyclinicSideBar data={data} status1="active" />

            <div className="col-md-7 col-lg-8 col-xl-9">
              <ProfilePicture data={data} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
