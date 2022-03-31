import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
const Dashboard = () => {
  const { auth } = useAuth();

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

  return (
    <>
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <PolyclinicSideBar data={data} status1="active" />
            <div className="col-md-12 col-lg-8 col-xl-9 col-xxl-9">
              <div className="dashboard-welcome-text">
                <p className="fs-4 fw-bold">Welcome Haldia Polyclinic👋</p>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-bed"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>Regular Bed</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total Bed
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available Bed
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-bed"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>ICU Bed</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total Bed
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available Bed
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-ambulance"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>Regular Ambulance</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total Ambulance
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available Ambulance
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-ambulance"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>ICU Ambulance</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total Ambulance
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available Ambulance
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-person-booth"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>Operation Theater</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total OT
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available OT
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 patient-dashboard-top">
                  <div className="dashboard-card">
                    <div className="row align-items-end">
                      <div className="col-3">
                        <div className="dashboard-card-icon">
                          <i className="fas fa-burn"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="dashboard-card-main-title">
                          <p>Burn Care Unit</p>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center dashboard-lower-content">
                      <div className="col-6 text-start border-end border-2">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Total Unit
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-danger">2,050</p>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <div className="dashboard-card-title">
                          <p className="fs-6 fw-bold text-secondary fst-italic">
                            Available Unit
                          </p>
                        </div>
                        <div className="dashboard-card-inner-number">
                          <p className="fs-6 text-info">2,050</p>
                        </div>
                      </div>
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

export default Dashboard;
