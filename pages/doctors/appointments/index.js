import { AuthNav, BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { AppointmentList, DoctorSidebar } from "components/DoctorComponents";
import { useState } from "react";
const Index = () => {
  const { auth } = useAuth();
  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?doctor=${auth.user?.profileId}`,
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

  const [filterDate, setFilterDate] = useState("");
  const [filterPolyclinic, setFilterPolyclinic] = useState("");
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
                  <div className="card card-table mb-0">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) =>
                              setFilterPolyclinic(e.target.value)
                            }
                          >
                            <option selected>Search By Polyclinic</option>
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
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                          <input
                            type="date"
                            className="form-control"
                            onChange={(e) => setFilterDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>#Id</th>
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
                                      filterDate === "" &&
                                      filterPolyclinic === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.date.includes(filterDate) &&
                                      filterPolyclinic === ""
                                    ) {
                                      return items;
                                    } else if (
                                      items?.polyclinic?.name.includes(
                                        filterPolyclinic
                                      ) &&
                                      filterDate === ""
                                    ) {
                                      return items;
                                    }
                                  })
                                  .map((items, index) => (
                                    <AppointmentList data={items} key={index} />
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

export default Index;
