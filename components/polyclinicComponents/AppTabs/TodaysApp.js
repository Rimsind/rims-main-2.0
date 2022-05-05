import MyAppointments from "components/UserComponents/MyAppointments";
import { useAuth } from "context";
import { useState } from "react";
const TodaysApp = ({ appointments, data, appointmentsLength }) => {
  const { auth } = useAuth();

  if (auth?.user?.role?.id === 3) {
    var role = "doctors";
  }
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  if (auth?.user?.role?.id === 6) {
    var role = "hospitals";
  }
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
  console.log(currentDate);
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(currentDate);
  const [status, setStatus] = useState("");
  const resetState = () => {
    setDoctor("");
    setDate(currentDate);
    setStatus("");
  };
  return (
    <>
      <div
        className="card-filter rounded-pill p-4 mb-2"
        style={{ backgroundColor: "#372c7ee6" }}
      >
        <div className="row align-items-end p-2 rounded-1">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row align-items-center">
              <div className="col-4">
                {" "}
                <lable className="text-light">Filter By Doctor:</lable>
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
          <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
            <div className="row align-items-center">
              <div className="col-6">
                {" "}
                <lable className="text-light">Filter By status:</lable>
              </div>
              <div className="col-6">
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
                      <td colSpan={7} className="text-danger text-center">
                        No Appointments Found !!
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {appointments
                      ?.filter((items) => {
                        if (date === "" && status === "" && doctor === "") {
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
                          items?.doctor?.id.toString().includes(doctor) &&
                          status === "" &&
                          date === ""
                        ) {
                          return items;
                        } else if (
                          items?.doctor?.id.toString().includes(doctor) &&
                          items?.appointment_status
                            .toString()
                            .includes(status) &&
                          date === ""
                        ) {
                          return items;
                        } else if (
                          items?.doctor?.id.toString().includes(doctor) &&
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
                          items?.doctor?.id.toString().includes(doctor)
                        ) {
                          return items;
                        }
                      })
                      .map((items, index) => (
                        <MyAppointments
                          data={items}
                          key={index}
                          sl={index + 1}
                          path={role}
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
