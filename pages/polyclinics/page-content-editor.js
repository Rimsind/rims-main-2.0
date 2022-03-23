import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Slide } from "react-toastify";
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

  const [features, setFeatures] = useState();
  const [allFeatures, setAllFeatures] = useState([]);

  const addFeatures = () => {
    setAllFeatures([
      ...allFeatures,
      {
        name: features,
      },
    ]);
  };

  const submitFeatures = async () => {
    const payload = {
      features: {
        name: allFeatures,
      },
    };
  };

  const { register, handleSubmit } = useForm();
  const submit_nursing_content = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        totalRegularBeds: data.totalRegularBeds,
        availableRegularbeds: data.availableRegularbeds,
        totalIcuBeds: data.totalIcuBeds,
        availableIcuBeds: data.availableIcuBeds,
        totalAmbulance: data.totalAmbulance,
        availableAmbulance: data.availableAmbulance,
        totalIcuAmbulance: data.totalIcuAmbulance,
        availableIcuAmbulance: data.availableIcuAmbulance,
        totalOT: data.totalOT,
        availableOT: data.availableOT,
        totalBurnUnits: data.totalBurnUnits,
        availableBurnUnits: data.availableBurnUnits,
      };
      const res = await axios.put(
        `${apiUrl}/polyclinics/${auth?.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      toast.success("Profile Updated Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };
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
                  <form onSubmit={handleSubmit(submit_nursing_content)}>
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
                                name="totalRegularBeds"
                                {...register("totalRegularBeds")}
                                defaultValue={
                                  !!data?.totalRegularBeds
                                    ? data.totalRegularBeds
                                    : ""
                                }
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
                                name="availableRegularbeds"
                                {...register("availableRegularbeds")}
                                defaultValue={
                                  !!data?.availableRegularbeds
                                    ? data.availableRegularbeds
                                    : ""
                                }
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
                                name="totalIcuBeds"
                                {...register("totalIcuBeds")}
                                defaultValue={
                                  !!data?.totalIcuBeds ? data.totalIcuBeds : ""
                                }
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
                                name="availableIcuBeds"
                                {...register("availableIcuBeds")}
                                defaultValue={
                                  !!data?.availableIcuBeds
                                    ? data.availableIcuBeds
                                    : ""
                                }
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
                                name="totalAmbulance"
                                {...register("totalAmbulance")}
                                defaultValue={
                                  !!data?.totalAmbulance
                                    ? data.totalAmbulance
                                    : ""
                                }
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
                                name="availableAmbulance"
                                {...register("availableAmbulance")}
                                defaultValue={
                                  !!data?.availableAmbulance
                                    ? data.availableAmbulance
                                    : ""
                                }
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
                                name="totalIcuAmbulance"
                                {...register("totalIcuAmbulance")}
                                defaultValue={
                                  !!data?.totalIcuAmbulance
                                    ? data.totalIcuAmbulance
                                    : ""
                                }
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
                                name="availableIcuAmbulance"
                                {...register("availableIcuAmbulance")}
                                defaultValue={
                                  !!data?.availableIcuAmbulance
                                    ? data.availableIcuAmbulance
                                    : ""
                                }
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
                                name="totalOT"
                                {...register("totalOT")}
                                defaultValue={
                                  !!data?.totalOT ? data.totalOT : ""
                                }
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
                                name="availableOT"
                                {...register("availableOT")}
                                defaultValue={
                                  !!data?.availableOT ? data.availableOT : ""
                                }
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
                                name="totalBurnUnits"
                                {...register("totalBurnUnits")}
                                defaultValue={
                                  !!data?.totalBurnUnits
                                    ? data.totalBurnUnits
                                    : ""
                                }
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
                                name="availableBurnUnits"
                                {...register("availableBurnUnits")}
                                defaultValue={
                                  !!data?.availableBurnUnits
                                    ? data.availableBurnUnits
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="save-btn-poly mt-4 text-end">
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
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
                  <div className="row align-items-end">
                    <div className="col-6">
                      <div className="features-add-sec mb-3">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <p className="fs-6 fw-bold">Add Features</p>
                          </div>
                          <div className="col-4">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setFeatures(e.target.value)}
                            >
                              <option selected>Select Features</option>
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
                                onClick={addFeatures}
                              >
                                Add Features
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="features-pill-item mt-4">
                        <div className="row align-items-center">
                          {allFeatures?.map((items, index) => (
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
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="save-btn-poly mt-4 text-end">
                    <button
                      className="btn btn-primary"
                      onClick={submitFeatures}
                    >
                      Save Changes
                    </button>
                  </div>
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
