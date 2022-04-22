import { BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import MyAppointments from "components/UserComponents/MyAppointments";
import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";
import { useState } from "react";
import { PolyclinicSideBar } from "components/common";
const Index = () => {
  const { auth } = useAuth();
  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?polyclinic=${auth.user?.profileId}`,
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
  console.log(appointments);
  const appointmentsLength = appointments?.length;

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
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const resetState = () => {
    setDoctor("");
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
              <PolyclinicSideBar data={data} status7="active" />
              {appointments ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div
                    className="card-filter rounded-pill p-4 mb-2"
                    style={{ backgroundColor: "#372c7ee6" }}
                  >
                    <div className="row align-items-end p-2 rounded-1">
                      <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="row align-items-center">
                          <div className="col-4">
                            {" "}
                            <lable className="text-light">
                              Filter By Doctor:
                            </lable>
                          </div>
                          <div className="col-8">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={doctor}
                              onChange={(e) => setDoctor(e.target.value)}
                            >
                              <option selected>Select Doctor</option>
                              {data?.doctors?.map((items, index) => (
                                <option value={items?.id} key={index}>
                                  {items?.firstName} {items?.lastName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
                        <div className="row align-items-center">
                          <div className="col-5">
                            {" "}
                            <lable className="text-light">
                              Filter By status:
                            </lable>
                          </div>
                          <div className="col-7">
                            {" "}
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
                          <div className="col-5">
                            <lable className="text-light">
                              Filter By Date:
                            </lable>
                          </div>
                          <div className="col-7">
                            <input
                              type="date"
                              className="form-control"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-2 col-xxl-2 text-end">
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
                              <th>Sl No.</th>
                              <th>App Id</th>
                              <th>Doctor</th>
                              <th>Appt Date</th>

                              <th>Amount</th>
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
                                    if (
                                      date === "" &&
                                      status === "" &&
                                      doctor === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      status === "" &&
                                      doctor === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      date === "" &&
                                      doctor === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.doctor?.id
                                        .toString()
                                        .includes(doctor) &&
                                      status === "" &&
                                      date === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.doctor?.id
                                        .toString()
                                        .includes(doctor) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      date === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.doctor?.id
                                        .toString()
                                        .includes(doctor) &&
                                      items?.date.includes(date) &&
                                      status === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      doctor === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(date) &&
                                      items?.appointment_status
                                        .toString()
                                        .includes(status) &&
                                      items?.doctor?.id
                                        .toString()
                                        .includes(doctor)
                                    ) {
                                      return items;
                                    }
                                  })
                                  .map((items, index) => (
                                    <MyAppointments
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
