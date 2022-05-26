import { BreadCrums } from "components/common";
import { DoctorSidebar } from "components/DoctorComponents";
import { useAuth } from "context";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { withAuth } from "helpers/withAuth";
import { useState } from "react";
import Router from "next/router";
import { inputTime } from "pages/api/inputTime";
import { useForm } from "react-hook-form";

const DoctorTimeTableForm = () => {
  const { auth } = useAuth();

  const { data: doctor } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
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

  const [locationType, setLocationType] = useState("");
  const { data: location } = useSWR(`${apiUrl}/${locationType}`, fetcher);
  const [clinic, setClinic] = useState();

  if (locationType === "polyclinics") {
    var polyclinicId = clinic;
    var nursingHomeId = null;
    var hospitalId = null;
  } else if (locationType === "nursing-homes") {
    var polyclinicId = null;
    var nursingHomeId = clinic;
    var hospitalId = null;
  } else if (locationType === "hospitals") {
    var polyclinicId = null;
    var nursingHomeId = null;
    var hospitalId = clinic;
  }

  const [monStatus, setMonStatus] = useState(false);
  const [tueStatus, setTueStatus] = useState(false);
  const [wedStatus, setWedStatus] = useState(false);
  const [thuStatus, setThuStatus] = useState(false);
  const [friStatus, setFriStatus] = useState(false);
  const [satStatus, setSatStatus] = useState(false);
  const [sunStatus, setSunStatus] = useState(false);

  const { register, handleSubmit } = useForm();
  const submitEntry = async (data, event) => {
    event.preventDefault();
    const payload = {
      timeTable: [
        ...doctor?.timeTable,
        {
          polyclinic: parseInt(polyclinicId),
          nursing_home: parseInt(nursingHomeId),
          hospital: parseInt(hospitalId),
          fee: data.fee,
          routine: {
            monday: data.monday,
            monday_start_time: data.monday_start_time,
            monday_end_time: data.monday_end_time,
            tuesday: data.tuesday,
            tuesday_start_time: data.tuesday_start_time,
            tuesday_end_time: data.tuesday_end_time,
            wednesday: data.wednesday,
            wednesday_start_time: data.wednesday_start_time,
            wednesday_end_time: data.wednesday_end_time,
            thursday: data.thursday,
            thursday_start_time: data.thursday_start_time,
            thursday_end_time: data.thursday_end_time,
            friday: data.friday,
            friday_end_time: data.friday_end_time,
            friday_start_time: data.friday_start_time,
            saturday: data.saturday,
            saturday_start_time: data.saturday_start_time,
            saturday_end_time: data.saturday_end_time,
            sunday: data.sunday,
            sunday_start_time: data.sunday_start_time,
            sunday_end_time: data.sunday_end_time,
          },
        },
      ],
    };

    const res = await axios.put(
      `${apiUrl}/doctors/${auth.user?.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await res.data;
    alert("Success");
    return result, Router.push("/doctors/auth/time-table");
  };
  return (
    <>
      <section className="section-doc-tm-tbl-frm">
        <div className="main-wrapper">
          <BreadCrums
            title="Home / Doctor / Doctor-Time-Table-Form"
            title1="Doctor Time Table Form"
          />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <DoctorSidebar data={doctor} />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-header">
                      <span className="fs-6 fw-bold">
                        Add New Time Table Form
                      </span>
                    </div>
                    <form onSubmit={handleSubmit(submitEntry)}>
                      <div className="card-body">
                        <div className="row align-items-baseline border-bottom border-1 pb-3">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <div className="row align-items-baseline">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                <p className="fs-6">Select Location Type:</p>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="polyclinic"
                                    value="polyclinics"
                                    onChange={(e) =>
                                      setLocationType(e.target.value)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlhtmlFor="polyclinic"
                                  >
                                    Polyclinics
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="nursing-homes"
                                    value="nursing-homes"
                                    onChange={(e) =>
                                      setLocationType(e.target.value)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlhtmlFor="nursing-homes"
                                  >
                                    Nursing Homes
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="location"
                                    id="hospitals"
                                    value="hospitals"
                                    onChange={(e) =>
                                      setLocationType(e.target.value)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlhtmlFor="hospital"
                                  >
                                    Hospital
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setClinic(e.target.value)}
                            >
                              {locationType === "" && (
                                <option selected>
                                  PLease select a location type
                                </option>
                              )}
                              {locationType === "polyclinics" && (
                                <option selected>Select Polyclinic</option>
                              )}
                              {locationType === "nursing-homes" && (
                                <option selected>Select Nursing Home</option>
                              )}
                              {locationType === "hospitals" && (
                                <option selected>Select Hospital</option>
                              )}

                              {location?.map((items, index) => (
                                <option value={items?.id} key={index}>
                                  {items?.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Fees Ex: ₹500"
                              {...register("fee")}
                            />
                          </div>
                        </div>
                        <div className="row align-items-center mt-3">
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Monday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("monday")}
                                        onChange={(e) => setMonStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("monday")}
                                        onChange={(e) => setMonStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {!!monStatus === true ? (
                                <>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("monday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("monday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Tuesday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("tuesday")}
                                        onChange={(e) => setTueStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("tuesday")}
                                        onChange={(e) => setTueStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {!!tueStatus === true ? (
                                <>
                                  {" "}
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("tuesday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("tuesday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Wednesday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("wednesday")}
                                        onChange={(e) => setWedStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("wednesday")}
                                        onChange={(e) => setWedStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              {!!wedStatus === true ? (
                                <>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("wednesday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("wednesday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Thursday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("thursday")}
                                        onChange={(e) => setThuStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("thursday")}
                                        onChange={(e) => setThuStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              {!!thuStatus === true ? (
                                <>
                                  {" "}
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("thursday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("thursday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Friday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("friday")}
                                        onChange={(e) => setFriStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("friday")}
                                        onChange={(e) => setFriStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              {!!friStatus === true ? (
                                <>
                                  {" "}
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("friday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("friday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Saturday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("saturday")}
                                        onChange={(e) => setSatStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("saturday")}
                                        onChange={(e) => setSatStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              {!!satStatus === true ? (
                                <>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("saturday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("saturday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
                            <h6 className="fs-6 fw-bold">Sunday</h6>
                          </div>
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
                            <div className="row align-items-center">
                              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3">
                                <div className="row align-items-center">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={1}
                                        {...register("sunday")}
                                        onChange={(e) => setSunStatus(true)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Open
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value={0}
                                        {...register("sunday")}
                                        onChange={(e) => setSunStatus(false)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="inlineRadio1"
                                      >
                                        Closed
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {!!sunStatus === true ? (
                                <>
                                  {" "}
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">Start Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("sunday_start_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 text-center mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <i className="fas fa-minus"></i>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                                    <label className="mb-2">End Time</label>
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      {...register("sunday_end_time")}
                                    >
                                      {inputTime.map((items, index) => (
                                        <option key={index} value={items.value}>
                                          {items?.display}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-9 col-xxl-9 text-center">
                                    <h5 className="text-danger">
                                      Select (Open) to Enter Timmings
                                    </h5>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="submit-section text-end mt-5">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
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

export default withAuth(DoctorTimeTableForm);
