import { fetcher, apiUrl } from "config/api";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { inputTime } from "pages/api/inputTime";

const TimeTableAccordian = ({ data, collaps, heading }) => {
  const { register, handleSubmit } = useForm();
  const submitEntry = () => {};
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
              {data?.polyclinic?.name ||
                data?.nursing_home?.name ||
                data?.hospital?.name}
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
                      {data?.polyclinic?.name ||
                        data?.nursing_home?.name ||
                        data?.hospital?.name}
                    </h1>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-6 col-xl-3 col-xxl-3 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fees Ex: ₹500"
                      defaultValue={!!data.fee ? data.fee : ""}
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
                                  !!data && data.routine.monday === true
                                }
                                {...register("monday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.monday === false
                                }
                                {...register("monday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.monday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.monday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.monday_start_time : ""}
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
                            !!data ? data.routine.monday_end_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? data.routine.monday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.monday_end_time : ""}
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
                                  !!data && data.routine.tuesday === true
                                }
                                {...register("tuesday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.tuesday === false
                                }
                                {...register("tuesday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.tuesday_start_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? data.routine.tuesday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.tuesday_start_time : ""}
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
                            !!data ? data.routine.tuesday_end_time : ""
                          }
                        >
                          {" "}
                          <option
                            defaultValue={
                              !!data ? data.routine.tuesday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.tuesday_end_time : ""}
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
                                  !!data && data.routine.wednesday === true
                                }
                                {...register("wednesday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.wednesday === false
                                }
                                {...register("wednesday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.wednesday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.wednesday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.wednesday_start_time : ""}
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
                            !!data ? data.routine.wednesday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.wednesday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.wednesday_end_time : ""}
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
                                  !!data && data.routine.thursday === true
                                }
                                {...register("thursday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.thursday === false
                                }
                                {...register("thursday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.thursday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.thursday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.thursday_start_time : ""}
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
                            !!data ? data.routine.thursday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.thursday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.thursday_end_time : ""}
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
                                  !!data && data.routine.wednesday === true
                                }
                                {...register("friday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.friday === false
                                }
                                {...register("friday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.friday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.friday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.friday_start_time : ""}
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
                            !!data ? data.routine.friday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.friday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.friday_end_time : ""}
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
                                  !!data && data.routine.saturday === true
                                }
                                {...register("saturday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.saturday === false
                                }
                                {...register("saturday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.saturday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.saturday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.saturday_start_time : ""}
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
                            !!data ? data.routine.saturday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.saturday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.saturday_end_time : ""}
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
                                  !!data && data.routine.sunday === true
                                }
                                {...register("sunday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                                  !!data && data.routine.sunday === false
                                }
                                {...register("sunday")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                            !!data ? data.routine.sunday_start_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.sunday_start_time : ""
                            }
                          >
                            {!!data ? data.routine.sunday_start_time : ""}
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
                            !!data ? data.routine.sunday_end_time : ""
                          }
                        >
                          <option
                            defaultValue={
                              !!data ? data.routine.sunday_end_time : ""
                            }
                          >
                            {!!data ? data.routine.sunday_end_time : ""}
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
