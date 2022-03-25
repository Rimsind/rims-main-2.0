import { AuthNav, BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { AppointmentList, DoctorSidebar } from "components/DoctorComponents";
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
                          >
                            <option selected>Search By Polyclinic</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                          <input type="date" className="form-control" />
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
                                {appointments?.map((items, index) => (
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
