import AuthLayout from "components/layout/AuthLayout";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import Image from "next/image";
const OrthoClinicalExam = () => {
  // const { id } = useRouter().query;

  // const { auth } = useAuth();

  // const { data: appointments } = useSWR(
  //   `${apiUrl}/appointments/${id}`,
  //   async (url) => {
  //     const res = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     });
  //     const result = res.data;
  //     return result;
  //   }
  // );

  return (
    <>
      <div className="prescription">
        <div className="container prescription-body">
          <div className="pres-topbar-ribbon py-1 px-1">
            <div className="row align-items-end">
              <div className="col-md-1">
                <div className="left-content">
                  <Image
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    width={500}
                    height={350}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="middle-content">
                  <p className="fs-6 fw-bold text-light">
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right-content">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-map-marker-alt text-light me-2"></i>
                        Haldia City Centre , WB
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-phone text-light me-2"></i>
                        +91-90384-43073
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i className="fas fa-envelope-open-text text-light me-2"></i>
                        demo@email.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="py-1 px-2 presc-header">
            <div className="row align-items-center m-auto">
              <div className="col-md-4">
                <div className="header-inner-item text-start">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. Samir Barman
                  </p>
                  <p className="fs-6 fw-bold lh-1">MBBS</p>
                  <p className="fs-6 lh-1">30</p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">Mob: 8101719935</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="doctor-symbol text-center">
                  <Image
                    src="/assets/images/doctor-symbol.png"
                    alt="Doctor Symbol"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-inner-item text-end">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Mediland Nursing Home
                  </p>
                  <p className="fs-6 lh-1">HPL Link Road 34JQ+FJ8, Haldia</p>
                  <p className="fs-6 lh-1">West Bengal, India, PIN: 721602</p>
                  <p className="fs-6 lh-1">Email : rimsind21@gmail.com</p>
                  <p className="fs-6 lh-1">Mobile No: 8101719935</p>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <p className="presc-title fs-3 fw-bold text-center">
              Orthopedic Clinical Examination
            </p>
            <div className="presc-main_outer_bg">
              <div className="profile_details mb-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      className="presc-img-profile"
                      alt=""
                      src={
                        // appointments?.patient?.image?.url ||
                        "/assets/images/profile.png"
                      }
                    />
                  </div>
                  <div className="col-md-8">
                    <p className="fs-5 fw-bold text-light border-bottom border-light">
                      Patient Details
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p className="fs-6 fw-bold text-light lh-1 text-light">
                              Name :
                              <span className="fs-6 fw-light ms-2">
                                Prasenjit Kamila
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Material Status :
                              <span className="fs-6 fw-light ms-2">
                                Married
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Blood Group :
                              <span className="fs-6 fw-light ms-2">
                                B Positive(+)
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Age :
                              <span className="fs-6 fw-light ms-2">25</span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Gender :
                              <span className="fs-6 fw-light ms-2">Male</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p className="fs-6 fw-bold text-light lh-1">
                              Mobile :
                              <span className="fs-6 fw-light ms-2">
                                8101719935
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Email :
                              <span className="fs-6 fw-light ms-2">
                                rimsind21@gmail.com
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              City :
                              <span className="fs-6 fw-light ms-2">
                                Township
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Country :
                              <span className="fs-6 fw-light ms-2">India</span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              State :
                              <span className="fs-6 fw-light ms-2">
                                West Bengal
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th
                          className="text-center bg-info text-light"
                          colSpan="3"
                        >
                          Clinical Examination
                        </th>
                      </tr>
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Categories</th>
                        <th scope="col">Test</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                      </tr>
                      <tr className="text-center">
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="assessment-content mt-4">
                  <div className="assessment-title">
                    <p className="fs-5 fw-bold">Assessment :</p>
                  </div>
                  <div className="assessment-info">
                    <p className="fs-6">Hello This is Assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="presc-footer">
            <div className="row align-items-center pt-3 px-3">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="banner-logo text-center mb-2">
                  <Image
                    height="50"
                    width="75"
                    src="/assets/images/logo-white.png"
                    alt=""
                  />
                </div>
                <p className="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Technology
                </p>
                <p className="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default OrthoClinicalExam;

// OrthoClinicalExam.getLayout = (OrthoClinicalExam) => (
//   <AuthLayout>{OrthoClinicalExam}</AuthLayout>
// );
