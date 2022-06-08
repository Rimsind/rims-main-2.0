import { fetcher, apiUrl } from "config/api";
import { useAuth } from "context";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSWR from "swr";
import { inputTime } from "pages/api/inputTime";
import axios from "axios";

const TimeTableAccordian = ({ data, collaps, heading, indexValue }) => {
  const schedule = data;
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

  if (!!schedule?.polyclinic) {
    var polyclinicId = schedule?.polyclinic?.id;
    var nursingHomeId = null;
    var hospitalId = null;
  } else if (!!schedule.nursing_home) {
    var polyclinicId = null;
    var nursingHomeId = schedule?.nursing_home?.id;
    var hospitalId = null;
  } else if (!!schedule?.hospital?.id) {
    var polyclinicId = null;
    var nursingHomeId = null;
    var hospitalId = schedule?.polyclinic?.id;
  }

  const { timeTable } = doctor;
  const [allRoutine, setAllRoutine] = useState(timeTable.concat([]));

  const { register, handleSubmit } = useForm();
  const submitEntry = async (data, event) => {
    event.preventDefault();
    const payload = {
      timeTable: [
        {
          polyclinic: polyclinicId,
          nursing_home: nursingHomeId,
          hospital: hospitalId,
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

    updateArray(indexValue, payload);
  };

  const updateArray = async (indexValue, payload) => {
    const id = indexValue;
    const filterData = allRoutine.filter((items, index) => {
      return id !== index;
    });
    const newPayload = {
      timeTable: filterData.concat(payload.timeTable),
    };

    const res = await axios.put(
      `${apiUrl}/doctors/${auth.user?.profileId}`,
      newPayload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await res.data;
    alert("Success");
    return result;
  };

  const deleteRoutine = async () => {
    const id = indexValue;

    const filterData = allRoutine.filter((items, index) => {
      return id !== index;
    });
    const newPayload = {
      timeTable: filterData,
    };

    const res = await axios.put(
      `${apiUrl}/doctors/${auth.user?.profileId}`,
      newPayload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await res.data;
    alert("Success");
    return result;
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitEntry)}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={heading}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collaps}`}
              aria-expanded="false"
              aria-controls={`${collaps}`}
            >
              {schedule?.polyclinic?.name ||
                schedule?.nursing_home?.name ||
                schedule?.hospital?.name}
            </button>
          </h2>
          <div
            id={`${collaps}`}
            className="accordion-collapse collapse"
            aria-labelledby={heading}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="card-body">
                <div className="row align-items-baseline border-bottom border-1 pb-3">
                  <div className="col-12 col-sm-12 col-md-9 col-lg-12 col-xl-9 col-xxl-9 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                    <h1>
                      {schedule?.polyclinic?.name ||
                        schedule?.nursing_home?.name ||
                        schedule?.hospital?.name}
                    </h1>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fees Ex: ₹500"
                      defaultValue={!!schedule.fee ? schedule.fee : ""}
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
                                defaultChecked={
                                  !!data && schedule.routine.monday === true
                                }
                                {...register("monday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.monday === false
                                }
                                {...register("monday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("monday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.monday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.monday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.monday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.monday_end_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? schedule.routine.monday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.monday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.tuesday === true
                                }
                                {...register("tuesday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.tuesday === false
                                }
                                {...register("tuesday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("tuesday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.tuesday_start_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? schedule.routine.tuesday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.tuesday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.tuesday_end_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? schedule.routine.tuesday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.tuesday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.wednesday === true
                                }
                                {...register("wednesday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.wednesday === false
                                }
                                {...register("wednesday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("wednesday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.wednesday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data
                                ? schedule.routine.wednesday_start_time
                                : ""
                            }
                          >
                            {!!data
                              ? schedule.routine.wednesday_start_time
                              : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.wednesday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.wednesday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.wednesday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.thursday === true
                                }
                                {...register("thursday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.thursday === false
                                }
                                {...register("thursday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("thursday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.thursday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.thursday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.thursday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.thursday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.thursday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.thursday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.wednesday === true
                                }
                                {...register("friday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.friday === false
                                }
                                {...register("friday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("friday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.friday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.friday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.friday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.friday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.friday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.friday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.saturday === true
                                }
                                {...register("saturday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.saturday === false
                                }
                                {...register("saturday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("saturday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.saturday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.saturday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.saturday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.saturday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.saturday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.saturday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
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
                                defaultChecked={
                                  !!data && schedule.routine.sunday === true
                                }
                                {...register("sunday")}
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
                                defaultChecked={
                                  !!data && schedule.routine.sunday === false
                                }
                                {...register("sunday")}
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
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                        <label className="mb-2">Start Time</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("sunday_start_time")}
                          defaultValue={
                            !!data ? schedule.routine.sunday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.sunday_start_time : ""
                            }
                          >
                            {!!data ? schedule.routine.sunday_start_time : ""}
                          </option>
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
                          defaultValue={
                            !!data ? schedule.routine.sunday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? schedule.routine.sunday_end_time : ""
                            }
                          >
                            {!!data ? schedule.routine.sunday_end_time : ""}
                          </option>
                          {inputTime.map((items, index) => (
                            <option key={index} value={items.value}>
                              {items?.display}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section text-end mt-5">
                  <span
                    className="btn btn-danger submit-btn"
                    onClick={deleteRoutine}
                  >
                    Delete
                  </span>
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TimeTableAccordian;
