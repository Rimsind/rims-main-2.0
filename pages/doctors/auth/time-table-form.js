import { BreadCrums } from "components/common";
import { DoctorSidebar } from "components/DoctorComponents";
import Link from "next/link";
import { useAuth } from "context";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { withAuth } from "helpers/withAuth";
import { useState } from "react";
import { set } from "react-hook-form";
import Router from "next/router";

const DoctorTimeTableForm = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
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
  const [fee, setFee] = useState();
  const [date, setDate] = useState();
  const [timeFrom, setTimeFrom] = useState();
  const [timeTo, setTimeTo] = useState();
  const [seat, setSeat] = useState();
  const [allData, setAllData] = useState([]);
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
  const addEntry = () => {
    setAllData([
      ...allData,
      {
        date: date,
        startr_time: timeFrom,
        end_time: timeTo,
        seats: seat,
      },
    ]);
    setDate("");
    setTimeFrom("");
    setTimeTo("");
    setSeat("");
  };

  const submitEntry = async () => {
    const payload = {
      booking_schedule: [
        ...data?.booking_schedule,
        {
          polyclinic: parseInt(polyclinicId),
          nursing_home: parseInt(nursingHomeId),
          hospital: parseInt(hospitalId),
          fee: fee,
          slots: allData,
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
                <DoctorSidebar data={data} />

                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-header">
                      <span className="fs-6 fw-bold">
                        Add New Time Table Form
                      </span>
                    </div>
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
                                  htmlFor="polyclinic"
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
                                  htmlFor="nursing-homes"
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
                                  htmlFor="hospital"
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

                      <div className="submit-section text-end mt-5">
                        <button
                          onClick={submitEntry}
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
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

export default withAuth(DoctorTimeTableForm);
