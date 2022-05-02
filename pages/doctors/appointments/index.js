import { AuthNav, BreadCrums } from "components/common";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { AppointmentList, DoctorSidebar } from "components/DoctorComponents";
import { useState } from "react";
import { withAuth } from "helpers/withAuth";
import TodaysApp from "components/DoctorComponents/AppointmentTabs/TodaysApp";
import AllApp from "components/DoctorComponents/AppointmentTabs/AllApp";

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
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
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
                      {appointments ? (
                        <>
                          <TodaysApp
                            appointments={appointments}
                            appointmentsLength={appointmentsLength}
                            data={data}
                          />
                        </>
                      ) : (
                        <UserPageLoader />
                      )}
                    </div>
                    <div className="tab-pane" id="bottom-tab2">
                      {appointments ? (
                        <>
                          <AllApp
                            appointments={appointments}
                            appointmentsLength={appointmentsLength}
                            data={data}
                          />
                        </>
                      ) : (
                        <UserPageLoader />
                      )}
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
