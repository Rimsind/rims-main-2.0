import { BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";

import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";

import { HospitalSideBar } from "components/common";
import AllApps from "components/polyclinicComponents/AppTabs/AllApps";
import TodaysApp from "components/polyclinicComponents/AppTabs/TodaysApp";
const Index = () => {
  const { auth } = useAuth();
  const { data: appointments } = useSWR(
    `${apiUrl}/appointments?hospital=${auth.user?.profileId}`,
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

  const { data } = useSWR(
    `${apiUrl}/hospitals/${auth?.user?.profileId}`,
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
              <HospitalSideBar data={data} status7="active" />
              {appointments ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div className="diag-details-inner">
                    <ul className="nav nav-tabs nav-tabs-solid">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#bottom-tab1"
                          data-bs-toggle="tab"
                        >
                          Today&apos;s Appointments
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#bottom-tab2"
                          data-bs-toggle="tab"
                        >
                          All Appointments
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="bottom-tab1">
                        <TodaysApp
                          appointments={appointments}
                          appointmentsLength={appointmentsLength}
                          data={data}
                        />
                      </div>
                      <div className="tab-pane" id="bottom-tab2">
                        <AllApps
                          appointments={appointments}
                          appointmentsLength={appointmentsLength}
                          data={data}
                        />
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
