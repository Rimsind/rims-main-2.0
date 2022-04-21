import { AuthNav, BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { AppointmentList, DoctorSidebar } from "components/DoctorComponents";
import { useState } from "react";
import { withAuth } from "helpers/withAuth";

const Index = () => {
  const { auth } = useAuth();
  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?doctor=${auth.user?.profileId}&&_sort=id:asc`,
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

  const appointmentsLength = appointments?.length;
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

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }

  const currentDate = year + "-" + newMonth + "-" + newDay;

  const [date, setDate] = useState(currentDate);
  const [clinic, setClinic] = useState("");
  const [status, setStatus] = useState("");

  const resetState = (e) => {
    setDate(currentDate);
    setStatus("");
    setClinic("");
  };

  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <DoctorSidebar status2="active" data={data} />
              {appointments ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div
                    className="card-filter rounded-pill p-4 mb-2"
                    style={{ backgroundColor: "#372c7ee6" }}
                  >
                    <div className="row align-items-end p-2 rounded-1">
                      <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By Polyclinic:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={clinic}
                              onChange={(e) => setClinic(e.target.value)}
                            >
                              <option selected>Select Polyclinic</option>
                              {data?.timetable?.map((items, index) => (
                                <option
                                  value={items?.polyclinic?.name}
                                  key={index}
                                >
                                  {items?.polyclinic?.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By status:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={status}
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option selected>Select status</option>
                              <option value="false">Pending</option>
                              <option value="true">Completed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                            <lable className="text-light">
                              Filter By Date:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                            <input
                              type="date"
                              className="form-control"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-2 col-xxl-2 text-center text-md-end text-lg-end text-xl-end text-xxl-end">
                        <button className="btn btn-light" onClick={resetState}>
                          <i className="far fa-redo-alt me-2"></i>Reset
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th colSpan={7} className="text-info">
                                Appointment List For: {date}
                              </th>
                            </tr>
                            <tr>
                              <th>Sl No.</th>
                              <th>#App-Id</th>
                              <th> Patient Name</th>

                              <th>Age</th>
                              <th>Apointment Time</th>
                              <th>Fee</th>
                              <th>Status</th>
                              <th colSpan="2"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {appointmentsLength === 0 ? (
                              <>
                                <tr>
                                  <td
                                    colSpan={6}
                                    className="text-danger text-center"
                                  >
                                    No Appointments Found !!
                                  </td>
                                </tr>
                              </>
                            ) : (
                              <>
                                {/* {appointments?.map((items, index) => (
                                  <AppointmentList data={items} key={index} />
                                ))} */}

                                {appointments
                                  ?.filter((items) => {
                                    if (
                                      date === "" &&
                                      clinic === "" &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      clinic === "" &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.polyclinic?.name.includes(
                                        clinic
                                      ) &&
                                      date === "" &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      date === "" &&
                                      clinic === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      items?.polyclinic?.name.includes(
                                        clinic
                                      ) &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      clinic === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.polyclinic?.name.includes(
                                        clinic
                                      ) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      date === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      items?.polyclinic?.name.includes(
                                        clinic
                                      ) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status)
                                    ) {
                                      return items;
                                    }
                                  })
                                  .map((items, index) => (
                                    <AppointmentList
                                      data={items}
                                      key={index}
                                      sl={index + 1}
                                    />
                                  ))}
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <UserPageLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Index);
