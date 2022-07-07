import { useState } from "react";
import { AppointmentList } from "components/DoctorComponents";
const TodaysApp = ({ appointments, data, appointmentsLength }) => {
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
      <div
        className="card-filter rounded-pill p-4 mb-2"
        style={{ backgroundColor: "#372c7ee6" }}
      >
        <div className="row align-items-end p-2 rounded-1">
          <div className="col-12 col-md-12 col-lg-6 col-xl-5 col-xxl-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-5 col-xl-6 col-xxl-5 mb-1">
                <lable className="text-light">Filter By Clinic:</lable>
              </div>
              <div className="col-12 col-md-12 col-lg-7 col-xl-6 col-xxl-7 mb-1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                >
                  <option selected value="">
                    View All
                  </option>
                  {data?.timeTable?.map((items, index) => (
                    <option
                      value={
                        items?.polyclinic?.name ||
                        items?.nursing_home?.name ||
                        items?.hospital?.name
                      }
                      key={index}
                    >
                      {items?.polyclinic?.name ||
                        items?.nursing_home?.name ||
                        items?.hospital?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-5 col-xxl-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 mb-1">
                <lable className="text-light">Filter By status:</lable>
              </div>
              <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mb-1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option selected value="">
                    View All
                  </option>
                  <option value="false">Pending</option>
                  <option value="true">Completed</option>
                </select>
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
                      <td colSpan={6} className="text-danger text-center">
                        No Appointments Found !!
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {appointments
                      ?.filter((items) => {
                        if (date === "" && clinic === "" && status === "") {
                          return items;
                        } else if (
                          items?.date?.includes(date) &&
                          clinic === "" &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.polyclinic?.name?.includes(clinic) &&
                          date === "" &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.nursinh_home?.name.includes(clinic) &&
                          date === "" &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.hospital?.name?.includes(clinic) &&
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
                          items?.polyclinic?.name.includes(clinic) &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.date?.includes(date) &&
                          items?.nursing_home?.name.includes(clinic) &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.date?.includes(date) &&
                          items?.hospital?.name.includes(clinic) &&
                          status === ""
                        ) {
                          return items;
                        } else if (
                          items?.date?.includes(date) &&
                          items?.appointment_status
                            .toString()
                            .includes(status) &&
                          clinic === ""
                        ) {
                          return items;
                        } else if (
                          items?.polyclinic?.name?.includes(clinic) &&
                          items?.appointment_status
                            .toString()
                            .includes(status) &&
                          date === ""
                        ) {
                          return items;
                        } else if (
                          items?.nursing_home?.name?.includes(clinic) &&
                          items?.appointment_status
                            .toString()
                            .includes(status) &&
                          date === ""
                        ) {
                          return items;
                        } else if (
                          items?.hospital?.name?.includes(clinic) &&
                          items?.appointment_status
                            .toString()
                            .includes(status) &&
                          date === ""
                        ) {
                          return items;
                        } else if (
                          items?.date?.includes(date) &&
                          items?.polyclinic?.name.includes(clinic) &&
                          items?.appointment_status.toString().includes(status)
                        ) {
                          return items;
                        } else if (
                          items?.date.includes(date) &&
                          items?.nursing_home?.name.includes(clinic) &&
                          items?.appointment_status.toString().includes(status)
                        ) {
                          return items;
                        } else if (
                          items?.date.includes(date) &&
                          items?.hospital?.name.includes(clinic) &&
                          items?.appointment_status.toString().includes(status)
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
    </>
  );
};

export default TodaysApp;
