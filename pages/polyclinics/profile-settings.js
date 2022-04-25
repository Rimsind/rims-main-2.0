import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
import { ProfilePicture } from "components/forms";
import ProfileDetails from "components/polyclinicComponents/profileDetails";
import AddressDetails from "components/polyclinicComponents/addressDetails";
import { withAuth } from "helpers/withAuth";
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

            <div className="col-md-12 col-lg-12 col-xl-9 col-xxl-9">
              <ProfilePicture data={data} />
              <ProfileDetails data={data} />
              <section className="poly-other-info">
                <div className="card">
                  <div className="card-header">
                    <p className="fs-5 fw-bold text-center">Other Details</p>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row align-items-center mb-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                              <label>Membership Type</label>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Membership Type</option>
                                <option value="1">Free</option>
                                <option value="2">Standard</option>
                                <option value="3">Premium</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                              <label>Contact Person Name</label>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                              <label>Working Hours Start</label>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                              <label>Working Hours End</label>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                              <input type="time" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="save-btn-poly mt-4 text-end">
                      <button
                        className="btn btn-primary"
                        // onClick={submitFeatures}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="poly-features">
                <div className="card">
                  <div className="card-header">
                    <p className="fs-5 fw-bold text-center lh-1">Features</p>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-baseline">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="features-add-sec mb-3">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <p className="fs-6 fw-bold">Add Features</p>
                            </div>
                            <div className="col-4">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                // onChange={(e) => setFeatures(e.target.value)}
                              >
                                <option>Select Features</option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Patology">Patology</option>
                                <option value="Ambulance">Ambulance</option>
                                <option value="Radiology">Radiology</option>
                              </select>
                            </div>
                            <div className="col-4">
                              <div className="features-add-btn text-start">
                                <button
                                  className="btn btn-secondary"
                                  // onClick={addFeatures}
                                >
                                  Add Features
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="features-pill-item mt-4">
                          <div className="row align-items-center">
                            <div className="col">
                              <p
                                className="badge fs-6 fw-light py-2 px-4"
                                style={{ backgroundColor: "#0001fbb8" }}
                              >
                                <a href="#">
                                  <i className="fal fa-times me-2 text-light"></i>
                                </a>
                                Features 1
                              </p>
                            </div>
                            {/* {allFeatures?.map((items, index) => (
                              <div className="col" key={index}>
                                <p
                                  className="badge fs-6 fw-light py-2 px-4"
                                  style={{ backgroundColor: "#0001fbb8" }}
                                >
                                  <a href="#">
                                    <i className="fal fa-times me-2 text-light"></i>
                                  </a>
                                  {items?.name}
                                </p>
                              </div>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="save-btn-poly mt-4 text-end">
                      <button
                        className="btn btn-primary"
                        // onClick={submitFeatures}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <AddressDetails data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProfileSettings);
