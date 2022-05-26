import { fetcher, apiUrl } from "config/api";
import useSWR from "swr";

const TimeTableAccordian = ({ data, collaps, heading }) => {
  console.log(data);
  const { data: hospitals } = useSWR(`${apiUrl}/hospitals`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
  const { data: nursingHomes } = useSWR(`${apiUrl}/nursing-homes`, fetcher);
  return (
    <>
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
            {/* <div className="row align-items-center">
              <div className="col-3">
                <label>Polyclinic:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={!!data?.polyclinic ? data?.polyclinic?.id : ""}
                >
                  <option
                    value={!!data?.polyclinic ? data?.polyclinic?.id : ""}
                  >
                    {!!data?.polyclinic ? data?.polyclinic?.name : "-"}
                  </option>
                  {polyclinics?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                {" "}
                <label>Nursing Home:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={
                    !!data?.nursing_home ? data?.nursing_home?.id : ""
                  }
                >
                  <option
                    value={!!data?.nursing_home ? data?.nursing_home?.id : ""}
                  >
                    {!!data?.nursing_home ? data?.nursing_home?.name : "-"}
                  </option>
                  {nursingHomes?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                {" "}
                <label>Hospital:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={!!data?.hospital ? data?.hospital?.id : ""}
                >
                  <option value={!!data?.hospital ? data?.hospital?.id : ""}>
                    {!!data?.hospital ? data?.hospital?.name : "-"}
                  </option>
                  {hospitals?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                <label>Fee (₹):</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Fees Ex: ₹300"
                  defaultValue={!!data ? data?.fee : ""}
                />
              </div>
            </div>
            <div className="accrd-table mt-5">
              <table className="table table-bordered border-dark">
                <tbody>
                  {data?.slots?.map((items, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="date"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={!!items?.date ? items?.date : ""}
                          />
                          <label htmlFor="floatingInput">Date</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={
                              !!items?.time_from ? items?.time_from : ""
                            }
                          />
                          <label htmlFor="floatingInput">Start Time</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={
                              !!items?.time_to ? items?.time_to : ""
                            }
                          />
                          <label htmlFor="floatingInput">End Time</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Seat"
                            defaultValue={!!items?.seats ? items?.seats : ""}
                          />
                          <label htmlFor="floatingInput">Seat</label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="accrd-acrd-btn">
              <div className="mt-3 text-end">
                <button className="btn bg-danger-light me-2">
                  <i className="fad fa-trash-alt me-2"></i>
                  Delete
                </button>
              </div>
            </div> */}
            <div className="accrd-inner-body">
              <div className="row align-items-baseline border-bottom border-1 pb-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 col-xxl-8 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                  <div className="row align-items-baseline">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                      <Image
                        className="border border-2 border-primary rounded"
                        height={50}
                        width={50}
                        src={
                          data?.polyclinic?.image?.url ||
                          data?.hospital?.image?.url ||
                          data?.nursing_home?.image?.url
                        }
                        alt="Polyclinic Image"
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                      <h4 className="doc-name fs-5">
                        <a href="doctor-profile.html">
                          {data?.polyclinic?.name ||
                            data?.hursing_home?.name ||
                            data?.hospital?.name}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fees Ex: ₹500"
                    onChange={(e) => setFee(e.target.value)}
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                              value="option1"
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
                              value="option1"
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
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
                      >
                        <option></option>
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:00</option>
                        <option>05:30</option>
                        <option>06:00</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:00</option>
                        <option>08:30</option>
                        <option>09:00</option>
                        <option>09:30</option>
                        <option>10:00</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>11:30</option>
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        <option>15:30</option>
                        <option>16:00</option>
                        <option>16:30</option>
                        <option>17:00</option>
                        <option>17:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                        <option>23:00</option>
                        <option>23:30</option>
                        <option>24:00</option>
                        <option>24:30</option>
                      </select>
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

export default TimeTableAccordian;
