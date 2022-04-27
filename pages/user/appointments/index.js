import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import MyAppointments from "components/UserComponents/MyAppointments";
import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";
import { useState } from "react";
const Index = () => {
  const { auth } = useAuth();

  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?patient=${auth.user?.profileId}`,
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

  const { data: patient } = useSWR(
    `${apiUrl}/patients/${auth.user?.profileId}`,
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

  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const resetState = () => {
    setDate("");
    setStatus("");
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
              <UserNav status2="active" patient={patient} />
              {appointments ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div
                    className="card-filter rounded-pill p-4 mb-2"
                    style={{ backgroundColor: "#372c7ee6" }}
                  >
                    <div className="row align-items-end p-2 rounded-1">
                      <div className="col-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-1">
                            <lable className="text-light">
                              Filter By status:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mb-1">
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
                      <div className="col-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
                        <div className="row align-items-center">
                          <div className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-1">
                            <lable className="text-light">
                              Filter By Date:
                            </lable>
                          </div>
                          <div className="col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mb-1">
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
                          <i className="far fa-redo-alt me-2"></i>
                          Reset
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
                              <th>SL No.</th>
                              <th>App Id</th>
                              <th>Doctor</th>
                              <th>Appt Date</th>

                              <th>Fee</th>
                              <th>Follow Up</th>
                              <th>Status</th>
                              <th></th>
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
                                {appointments
                                  ?.filter((items) => {
                                    if (date === "" && status === "") {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      date === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      items?.date.includes(date)
                                    ) {
                                      return items;
                                    }
                                  })
                                  .map((items, index) => (
                                    <MyAppointments
                                      data={items}
                                      key={index}
                                      sl={index + 1}
                                      path="user"
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
