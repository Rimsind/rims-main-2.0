import { BreadCrums } from "components/common/index";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";
const Index = () => {
  const { auth } = useAuth();
  // console.log(typeof window);
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
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card heart-rate"
                        style={{ backgroundColor: "#ff000054" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-1.png"
                              alt=""
                            />
                          </div>
                          <h5>Heart Rate</h5>
                          <h6>
                            {data?.vitalSigns?.heartRate} <sub>bpm</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card body-temp"
                        style={{ backgroundColor: "#006bff63" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-2.png"
                              alt=""
                            />
                          </div>
                          <h5>Body Temperature</h5>
                          <h6>
                            {data?.vitalSigns?.temperature}
                            <sup>°</sup> <sub>C</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card glucose-lvl "
                        style={{ backgroundColor: "#e74e8473" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-3.png"
                              alt=""
                            />
                          </div>
                          <h5>Glucose Level</h5>
                          <h6>
                            {data?.vitalSigns?.glucose} <sub>mg/dl</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card blood-presr"
                        style={{ backgroundColor: "#75ff7087" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-4.png"
                              alt=""
                            />
                          </div>
                          <h5>Blood Pressure</h5>
                          <h6>
                            {data?.vitalSigns?.bloodPressure} <sub>mmHg</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card bmi"
                        style={{ backgroundColor: "#fff7d9" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-6.png"
                              alt=""
                            />
                          </div>
                          <h5>BMI</h5>
                          <h6>{data?.vitalSigns?.bmi}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card oxygen-lvl"
                        style={{ backgroundColor: "#80ffd4" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-8.png"
                              alt=""
                            />
                          </div>
                          <h5>Oxygen Level</h5>
                          <h6>{data?.vitalSigns?.oxygen}%</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card dimension"
                        style={{ backgroundColor: "#fff599" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-5.png"
                              alt=""
                            />
                          </div>
                          <h5>Dimensions</h5>
                          <h6>
                            {data?.vitalSigns?.height} <sub>Cm</sub> -{" "}
                            {data?.vitalSigns?.weight} <sub>Kg</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                      <div
                        className="card resp-rate"
                        style={{ backgroundColor: "#83ffff75" }}
                      >
                        <div className="card-body text-center">
                          <div className="mb-3">
                            <Image
                              height="55"
                              width="55"
                              src="/user_assets/img/specialities/pic-13.png"
                              alt=""
                            />
                          </div>
                          <h5>Respiratory rate</h5>
                          <h6>
                            {data?.vitalSigns?.respiration} <sub>BPM</sub>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row"></div> */}
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
