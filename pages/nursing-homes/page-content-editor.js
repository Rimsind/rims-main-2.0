import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { NursingSideBar } from "components/common";

const PageContentEditor = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/nursing-homes/${auth?.user?.profileId}`,
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
            <NursingSideBar data={data} status3="active" />

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
                <div className="card-header text-center">
                  <p className="fs-5 fw-bold">Nursing Homes Service & Tags</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-md-6">
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+ What We Do +"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="We Take Care For Humanity Not For Money"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <div className="poly-service">
                        <div className="row align-items-center">
                          <div className="poly-service-item">
                            <p className="fs-6 fw-bold">Add Service</p>
                          </div>
                          <div className="col-5 col-md-5">
                            <div className="poly-service-item">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                              />
                            </div>
                          </div>
                          <div className="col-5 col-md-5">
                            <div className="poly-service-item">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Service Name"
                              />
                            </div>
                          </div>
                          <div className="col-2 col-md-2">
                            <div className="poly-service-item">
                              <button className="btn btn-primary">Add</button>
                            </div>
                          </div>
                          <p className="fs-6 fst-italic mt-2">
                            Note: Choose image then enter service name and click
                            the add button
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header text-center">
                  <p className="fs-5 fw-bold">About Nursing Home</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="poly-item">
                        <div className="mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="+ Learn About Nursing Home"
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Learn About Us"
                          />
                        </div>
                        <div className="mb-2">
                          <p className="fs-6">Para One</p>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                            ></textarea>
                            <label>Accessibility matters especially...</label>
                          </div>
                        </div>
                        <div className="mb-2">
                          <p className="fs-6">Para Two</p>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                            ></textarea>
                            <label>Accessibility matters especially...</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-6 col-md-6 d-flex align-items-center flex-column justify-content-center"
                      style={{
                        background: "url(/user_assets/img/featured-bg.jpg)",
                        height: "310px",
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
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold">Service Details</p>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div
                      className="col-4 col-md-4 d-flex align-items-center flex-column justify-content-center"
                      style={{
                        background: "url(/user_assets/img/featured-bg.jpg)",
                        height: "310px",
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
                    <div className="col-8 col-md-8">
                      <div className="card-body">
                        <form>
                          <div className="row align-items-center mb-3">
                            <div className="col-md-2">
                              <div className="nursing-form-input">
                                <label className="fs-6 fw-bold">
                                  Regular Bed
                                </label>
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
                                <label className="fs-6 fw-bold">
                                  ICU Ambulance
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
                                <label className="fs-6 fw-bold">
                                  Burn Care Unit
                                </label>
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
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContentEditor;
