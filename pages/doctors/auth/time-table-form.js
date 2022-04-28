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
        time_from: timeFrom,
        time_to: timeTo,
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
    console.log(payload);

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
                      <div className="row border-bottom border-1 pt-3 pb-3 mt-2">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                              <div className=" mb-3">
                                <label>Date</label>
                                <input
                                  type="Date"
                                  className="form-control"
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                              <div className=" mb-3">
                                <label>Time Start</label>
                                <input
                                  type="test"
                                  className="form-control"
                                  placeholder="Enter Time (eg. 09:00 AM) "
                                  value={timeFrom}
                                  onChange={(e) => setTimeFrom(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                              <div className=" mb-3">
                                <label>Time End</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="floatingTimeEnd"
                                  placeholder="Enter Time (eg. 09:00 PM) "
                                  value={timeTo}
                                  onChange={(e) => setTimeTo(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                              <div className="mb-3">
                                <label>Seat</label>
                                <input
                                  type="Number"
                                  className="form-control"
                                  placeholder="100"
                                  value={seat}
                                  onChange={(e) => setSeat(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 mb-2 mb-sm-2 mb-md-2 mb-lg-0 mb-xl-0 mb-xxl-0 text-end">
                          <button
                            className="btn btn-primary fs-6 px-5 py-3 shadow-sm"
                            onClick={addEntry}
                          >
                            <i className="fas fa-plus me-2"></i>Add
                          </button>
                        </div>
                      </div>

                      <div className="form-table my-3">
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time Start</th>
                                <th scope="col">Time End</th>
                                <th scope="col">Seat</th>
                              </tr>
                            </thead>
                            <tbody>
                              {allData?.map((items, index) => (
                                <tr key={index}>
                                  <td>#{index + 1}</td>
                                  <td>{items?.date}</td>
                                  <td>{items?.time_from}</td>
                                  <td>{items?.time_to}</td>
                                  <td>{items?.seats}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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
