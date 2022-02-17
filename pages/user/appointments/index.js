import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import MyAppointments from "components/UserComponents/MyAppointments";
import { UserPageLoader } from "components/Loaders";

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
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Doctor</th>
                              <th>Appt Date</th>

                              <th>Amount</th>
                              <th>Follow Up</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {appointments?.map((items, index) => (
                              <MyAppointments data={items} key={index} />
                            ))}
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
