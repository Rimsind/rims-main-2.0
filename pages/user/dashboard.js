import { BreadCrums } from "components/common/index";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { UserPageLoader } from "components/Loaders";

const Dashboard = () => {
  const { auth } = useAuth();
  const { data } = useSWR(
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
        <BreadCrums title="Home / Dashboard" title1="Dashboard" />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status1="active" patient={data} />
              {data ? (
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                  <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  24.9 <span className="fs-6">BMI</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Body Mass Index</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/bmi.png"
                                height={50}
                                width={50}
                                alt="BMI"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  78 <span className="fs-6">BPM</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Heart Rate</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/heart-rate.png"
                                height={50}
                                width={50}
                                alt="Heart Rate"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  97.5 <span className="fs-6">°C</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Body Temperature</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/temperature.png"
                                height={50}
                                width={50}
                                alt="Body Temperature"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  120/80 <span className="fs-6">mmHg</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Blood Pressure</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/blood-pressure.png"
                                height={50}
                                width={50}
                                alt="Blood Pressure"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  12 - 16 <span className="fs-6">BPM</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Respiratory Rate</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/respiratory.png"
                                height={50}
                                width={50}
                                alt="Respiratory Rate"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  96 % <span className="fs-6"></span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Oxygen Level</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/oxygen-level.png"
                                height={50}
                                width={50}
                                alt="Oxygen Level"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  60 <span className="fs-6">AVG</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Dimensions</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/dimension.png"
                                height={50}
                                width={50}
                                alt="Oxygen Level"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-4">
                      <div className="inner-item">
                        <div className="row align-items-center g-0">
                          <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="col-inner-items-new">
                              <div className="col-inner-items-inner-top-item">
                                <h6 className="fs-4">
                                  120 <span className="fs-6">mg/dL</span>
                                </h6>
                              </div>
                              <div className="col-inner-items-inner-item">
                                <h6 className="fs-6">Glucose Level</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-inner-item-new-circle">
                              <Image
                                src="/assets/images/user-dash/glucose-level.png"
                                height={50}
                                width={50}
                                alt="Glucose Level"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-dashboard-banner my-3">
                    <Image
                      src="/assets/images/user-dashboard-banner3.png"
                      height={450}
                      width={1920}
                      alt="User Dashboard Banner"
                    />
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

export default Dashboard;
