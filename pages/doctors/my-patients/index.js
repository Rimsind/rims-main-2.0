import { BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import {
  AppointmentList,
  DoctorSidebar,
  PatientList,
} from "components/DoctorComponents";
import { withAuth } from "helpers/withAuth";
const Index = () => {
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
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Patients"
          title1="My Patients"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <DoctorSidebar status5="active" data={data} />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>#Id</th>
                            <th> Patient Name</th>
                            <th>Age</th>

                            <th>Apointment Time</th>

                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <PatientList />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Index);
