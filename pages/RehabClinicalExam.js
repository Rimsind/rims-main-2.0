import AuthLayout from "components/layout/AuthLayout";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import Image from "next/image";
const RehabClinicalExam = () => {
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
              Rehabilation Clinical Examination
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
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Aerobic Capacity With Functional Mobility Skill Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark pb-3">
                  <div className="col-4 border-end border-dark">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Aerobic Capacity During Bed Mobility (Modified Borg RPE
                        Scale)
                      </p>
                      <p className="fs-6">0-Nothing at all</p>
                    </div>
                  </div>
                  <div className="col-4 border-end border-dark">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Aerobic Capacity During Transfer Task (Modified Borg RPE
                        Scale)
                      </p>
                      <p className="fs-6">0-Nothing at all</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Aerobic Capacity During Ambulation Task (Modified Borg
                        RPE Scale)
                      </p>
                      <p className="fs-6">0-Nothing at all</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-5">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Aerobic Capacity During Standarized Test Includes
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">6 Mint Walk Test</p>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">at RPE</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">2 - Light</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <p className="fs-6 fw-bold">
                    Cardiovascular And Pulmonary Signs And Symptoms Related To
                    Increase Oxygen Demand
                  </p>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Blood Pressure</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Breath & voice sounds</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Heart Rate</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Cyanosis</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Centra Cyanosis</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Rhythm</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Gas Exchange</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Sounds</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Respiratory Pattern</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Apnea</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Angina</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Yes</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Respiratory Rate</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello This is Text</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Claudication</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Yes</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Respiratory Rhythm</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Oximetry (%)</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello Text</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for bed
                          mobility task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for
                          transfer task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for
                          ambulation task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end border-bottom border-2 mb-3">
                      <div className="col-6">
                        <p>Patients will demonstrate during standarized</p>
                      </div>
                      <div className="col-2">3 Mint Walk Test</div>
                      <div className="col-2 fw-bold text-center">at RPE</div>
                      <div className="col-2">0 - Nothing At All</div>
                    </div>
                    <p>This is Text Area Section</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for bed
                          mobility task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for
                          transfer task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end">
                      <div className="col-6">
                        <p>
                          Patients will demonstrate aerobic capacity for
                          ambulation task to
                        </p>
                      </div>
                      <div className="col-6">0 - Nothing At All</div>
                    </div>
                    <div className="row text-end border-bottom border-2 mb-3">
                      <div className="col-6">
                        <p>Patients will demonstrate during standarized</p>
                      </div>
                      <div className="col-2">3 Mint Walk Test</div>
                      <div className="col-2 fw-bold text-center">at RPE</div>
                      <div className="col-2">0 - Nothing At All</div>
                    </div>
                    <p>This is Text Area Section</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <div className="row border-bottom border-2 mb-3">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          Aerobic capacity retraining for
                        </p>
                      </div>
                      <div className="col-2">Bed Mobility Task</div>
                      <div className="col-2">Transfer Task</div>
                      <div className="col-2">ADL Task</div>
                    </div>
                    <p>This is Text Area Section</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Anthropometric Assessment
                </p>
                <p className="fs-6 fw-bold">
                  Body Composition Assessment Includes
                </p>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Body Mass Index</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Height (CM)</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Weight (KG)</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">BMI</p>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <p className="fs-6 fw-bold">Body Dimension Includes</p>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Girth Measurement</p>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello Text Area</p>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Length Measurement</p>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Hello Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Edema Measurement Includes</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Girth</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Palpation</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Scales</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Volume</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Circulatory Assessment Includes Arterial / Venous / Lymphatic
                  System
                </p>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Physiological Response To Position Change
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area Section</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Peripheral Venous, Arterial And Lymphatic Circulation
                        Assessment, Skincolour And Nail Changes.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area Section</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Presence Of Bruits, Abnormal Heart Sounds, Rate Or
                        Rhytm,Vital Signs At Rest
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area Section</p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Arousal, Attention And Cognitive Assessment
                </p>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Attention</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Focussed</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Sustained</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Selective</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Alternating</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Orientation</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Ability To Recognise Time, Person, Place
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Consciousness</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Motivation To Participate
                          </p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Communication</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Problem Solving</p>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Preparation</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Production</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Judgement</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3"></div>
                      <div className="col-3"></div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Short term Memory</p>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">Mini Mental Test</p>
                  </div>
                  <div className="col-6">
                    <p className="fs-6">Normal</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Cranial And Peripheral Nerve Assessment
                </p>
                <p className="fs-6 fw-bold">Cranial Nerve Examination</p>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Olfactory</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Optic</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Occulomotor</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Trochlear</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Trigeminal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Abducens</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Facial Nerve</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Vestibulocohlear</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Glossophoryngeal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Vagus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Accessory</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Hypoglossal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Peripheral Nerve Examination</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Reflex And Sensory Assessment
                </p>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Deep Tendon Reflex And Supercial Reflex Examination
                    </p>
                  </div>
                  <div className="col-6">
                    <p>This is text area</p>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Samatosensory Assessment</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Discriminative Touch</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Touch Awareness</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Touch Localization</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Touch Pressure Threshold
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Two Point Discrimination
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Plain</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Sharp</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Dull</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Proprioception</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Vibration</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Joint Position</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Joint Motion</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Stereognosis</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Temperature</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Hot</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Cold</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Normal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Postural Assessment
                </p>
                <p className="fs-6 fw-bold">Segmental Alignment</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Feet</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Knee</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Pelvis</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Lowback</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Upperback</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Thorax</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Spine</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Abdomen</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Shoulder</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Head</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hammer toes</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Hallux valgus</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Low ant arch</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Ant foot varus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Gait Assessment
                </p>
                <div className="rehab-table border-bottom border-2 border-dark pb-3">
                  <table className="table table-bordered border-dark">
                    <tr className="text-center">
                      <th></th>
                      <th>Ankle</th>
                      <th>Knee</th>
                      <th>Hip</th>
                      <th>Trunk</th>
                    </tr>
                    <tr className="text-center">
                      <td rowSpan="3">Heel Strike To Foot Flat</td>
                      <td>
                        <p>Foot Slap</p>
                      </td>
                      <td>
                        <p>Knee Hyperextension</p>
                      </td>
                      <td>
                        <p>Excessive Flexion</p>
                      </td>
                      <td>
                        <p>Lateral Trunk Lean</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Toes First</p>
                      </td>
                      <td></td>
                      <td>
                        <p>Limited Flexion</p>
                      </td>
                      <td>
                        <p>Backward Trunk Lean</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Foot Flat</p>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <p>Forward Trunk Lean</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td rowSpan="5">Foot Flat To Mid Stance</td>
                      <td>
                        <p>Excessive Positional</p>
                      </td>
                      <td>
                        <p>Knee Hyper Extension</p>
                      </td>
                      <td>
                        <p>Limited Hip Extension</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Palnter Flexion</p>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <p>Internal Rotation</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Heel Lift in Mid Stance</p>
                      </td>
                      <td></td>

                      <td>
                        <p>External Rotation</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Excessive Dorsiflexion</p>
                      </td>
                      <td></td>

                      <td>
                        <p>Abduction</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Toe Clawing</p>
                      </td>
                      <td></td>

                      <td>
                        <p>Adduction</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td rowSpan="3">Heel Off To Toe Off</td>
                      <td>
                        <p>No Roll Off</p>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Insufficient Transfer of Excessive Knee Flexion</p>
                      </td>
                      <td></td>

                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Weight From Lateral Heel to Medial Forefoot</p>
                      </td>
                      <td></td>

                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td rowSpan="3">Acceleration To Mid Swing</td>
                      <td>
                        <p>Toe Drag Excessive Knee Flexion</p>
                      </td>
                      <td></td>
                      <td>
                        <p>Circumduction</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Varus</p>
                      </td>
                      <td>
                        <p>Limited Knee Flexion</p>
                      </td>
                      <td>
                        <p>Hip Hiking</p>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="text-center">
                      <td></td>
                      <td>
                        <p>Limited Knee Flexion</p>
                      </td>
                      <td>
                        <p>Excessive Hip Flexion</p>
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Postural Control Or Balance Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      1. Functional Performance Test And Measures
                    </p>
                  </div>
                  <div className="col-6">
                    <p>Score</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">A. Get up and go test</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">B. Functional reach test</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">C. Tinetti,s Test</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">D. Berg Balance Test</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">2. Motor Strategy Level Test</p>
                  </div>
                  <div className="col-6">
                    <p>Score</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">A. Alignment In Sitting And Standing</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">
                      B. Movement Strategy in Sitting and Standing
                    </p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      3. Sensory Strategy Level Assessment
                    </p>
                  </div>
                  <div className="col-6">
                    <p>Score</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">
                      Clinical Test for Sensory Interaction in Balance(CTSIB)
                    </p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      4. Factors Impacted On Normal Postural Control Includes
                    </p>
                  </div>
                  <div className="col-6">
                    <p>Score</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">Cognitive Impairment</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">Musculoskeletal Impairmentt</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">Neuromuscular Impairment</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <p className="fs-6">Perceptual Impairment</p>
                  </div>
                  <div className="col-6">
                    <p>Text Area</p>
                  </div>
                </div>
                <div className="row align-items-start border-bottom border-2 border-dark mt-3 pb-3">
                  <div className="col-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-dark">
                        <tr className="text-center">
                          <th colSpan="3">Sitting</th>
                        </tr>
                        <tr className="text-center">
                          <td>Small Movement</td>
                          <td>
                            <p className="fs-6">Normal</p>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Large Movement</td>
                          <td>
                            <p className="fs-6">Normal</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-dark">
                        <tr className="text-center">
                          <th colSpan="3">Standing</th>
                        </tr>
                        <tr className="text-center">
                          <td>Ankle Strategy</td>
                          <td>
                            <p className="fs-6">Normal</p>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Hip Strategy</td>
                          <td>
                            <p className="fs-6">Normal</p>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <td>Stepping Strategy</td>
                          <td>
                            <p className="fs-6">Normal</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Motor Function Assessment Includes Motor Control And Motor
                  Learning
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">Muscle Tone</p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Normal</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Abnormal Muscle Tone Assessment By Modified Ashworth
                      Scale(MAS)
                    </p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">0= NO increasenin muscle tone</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">
                            4= Affected parts rigid in flexion or extension.
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">
                            1=Slight increase in muscle tone ,manifested by a
                            slight catch and release or by minimal resistance at
                            the end of the range of motion when the affected
                            parts is moved in flexion and extension.
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">
                            1+= Slight increase in muscle tone, manifested by a
                            catch followed by minimal resistance throughout the
                            remainder (less than half) of the range of
                            motion(ROM).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Coordination Test</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Finger to nose</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Tapping hands</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Finger to therapist finger</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Tapping foot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Involuntory Movement Assessment
                    </p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Dystonia</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Termor</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">
                            Choreiform And Antheoid Movement
                          </p>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Manual Muscle Strength And Range Of Motion Assessment
                </p>
                <div className="rehab-table border-bottom border-2 border-dark pb-3">
                  <table className="table table-bordered border-dark">
                    <tr className="text-center">
                      <th></th>
                      <th></th>
                      <th>WNL Value</th>
                      <th>WFL Value</th>

                      <th>Range Of Motion Score</th>
                      <th>Strength</th>
                    </tr>

                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="5"
                        style={{ width: "70px" }}
                      >
                        HIP
                      </td>

                      <td>
                        <p>Flexion / Flexors</p>
                      </td>
                      <td>0-120</td>
                      <td>0-120</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Extension / Extensors</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Abduction / Abductors</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>External Rotation / External Rotators</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>Internal Rotation / Internal Rotators</p>
                      </td>
                      <td>0-30</td>
                      <td>0-30</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="3"
                        style={{ width: "70px" }}
                      >
                        KNEE
                      </td>

                      <td>
                        <p>Flexion</p>
                      </td>
                      <td>0-145</td>
                      <td>0-145</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>Extension </p>
                      </td>
                      <td>145-0</td>
                      <td>145-0</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>STRAIGHT LEG RAISE</p>
                      </td>
                      <td>0-90</td>
                      <td>0-90</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="4"
                        style={{ width: "70px" }}
                      >
                        ANKLE
                      </td>

                      <td>
                        <p>DORSIFLEXION/FLEXORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>PLANTERFLEXION/FLEXORS</p>
                      </td>
                      <td>0-50</td>
                      <td>0-50</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>INVERSION/INVERTORS</p>
                      </td>
                      <td>0-15</td>
                      <td>0-15</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>EVERSION/EVERTORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="6"
                        style={{ width: "70px" }}
                      >
                        CERVICAL
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>40-70</td>
                      <td>40-70</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>60-80</td>
                      <td>60-80</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="7"
                        style={{ width: "70px" }}
                      >
                        THORACIC
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>20-30</td>
                      <td>20-30</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>25-35</td>
                      <td>25-35</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>KYPOSIS POSTURE</p>
                      </td>
                      <td>30-40</td>
                      <td>30-40</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td
                        className="fs-5 fw-bold"
                        rowSpan="11"
                        style={{ width: "70px" }}
                      >
                        LUMBAR
                      </td>

                      <td>
                        <p> SACRAL INCLINATION ANGLE</p>
                      </td>
                      <td>15-30</td>
                      <td>15-30</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>STANDING LORDOSIS</p>
                      </td>
                      <td>25-40</td>
                      <td>25-40</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>
                        <p>STANDING HIP FLEXION</p>
                      </td>
                      <td>45-65</td>
                      <td>45-65</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>FLEXION (AMA method)</p>
                      </td>
                      <td>40-75</td>
                      <td>40-75</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>EXTENSION (AMA method)</p>
                      </td>
                      <td>20-35</td>
                      <td>20-35</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>FLEXION (curve angle method)</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>EXTENSION (curve angle method)</p>
                      </td>
                      <td>60-75</td>
                      <td>60-75</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>0</p>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Pain Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Onset of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Gradual</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Location of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Description Of Pain</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Vascular</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Throbbing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pounding</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pulsing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Beating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Description Of Pain</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Neurogenic</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Throbbing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pounding</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pulsing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Beating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Description Of Pain</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Musculoskeletal</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Aching</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pounding</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pulsing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Beating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold">Description Of Pain</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Emotional</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Throbbing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pounding</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pulsing</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Beating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Type of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Radiating</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Severity of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Visual Analog Scale</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Frequency of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Day Time</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Duration Of Pain (In Hrs)</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Aggravating Factor Of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Releiving Factor of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Liquor</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Heat</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pressure</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Cold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Relieving Of Pain With Medication (Include Type Of
                      Medication,Dosage And Hours Of Releive)
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Pattern Of Joint Involvement</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Liquor</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Heat</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pressure</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Cold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Joint Irritability</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Liquor</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Progress Of Pain</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Liquor</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Worse Problem (Loss Of Function)
                    </p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Liquor</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Related Signs And Symprtoms</p>
                  </div>
                  <div className="col-9">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Liquor</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Heat</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Pressure</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Cold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Environmental Barrier Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Environmental Barrier</p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">0 No Barrier</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Facilitators Assessment</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">0 No Facilitator</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Individual Attitudes Of Immediate Family Members
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Individual Attitudes Of Friends
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Individual Attitudes Of Personal Care Providers And
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">Personal Assistants</p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Individual Attitudes Of Health Professionals
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">Societal Attitudes</p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-6">
                    <p className="fs-6 fw-bold">
                      Social Norms, Practices And Ideologies
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3 mt-3">
                  Home And Work Barrier Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Throbbing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pounding</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pulsing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Beating</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Throbbing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pounding</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pulsing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Beating</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Throbbing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pounding</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pulsing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Beating</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Throbbing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pounding</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Pulsing</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Beating</p>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Orthotic And Prosthetic Assessment
                </p>
                <p className="fs-6 fw-bold pb-3 mt-3">Orthotic Assessment</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Type of Device</p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Alignment And Fitting of Orthosis
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Patinet ability and care of the device
                    </p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Level of safety of the devices
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Movement analysis with and without device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Functional effect and benefits of use of the device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold pb-3 mt-3 text-center">
                  Prosthesis Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Type of Prosthesis</p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Alignment And Fitting of Orthosis
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Patinet ability and care of the device
                    </p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Level of safety of the devices
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Movement analysis with and without device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Functional effect and benefits of use of the device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold pb-3 mt-3 text-center">
                  Adaptive Equipment Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Type of Device</p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Alignment And Fitting of Orthosis
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="fs-6 fw-bold">
                      Patinet ability and care of the device
                    </p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Level of safety of the devices
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Movement analysis with and without device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Functional effect and benefits of use of the device
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold pb-3 mt-3 text-center">
                  Wheel Chair Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-12 text-center">
                    <p className="fs-6 pb-3 mt-3">Manual</p>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">A: Shoulder Width</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">B: Chest Width</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          C: Chect Depth (Front-Back)
                        </p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">D1: Hip Width</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          D2: Degree of Hip Flexion
                        </p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">E: Between Knees</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">F: Top to Head</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">G: Occiput</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">H: Top To Shoulder</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          I: Acromium Process(Tip to Shoulder)
                        </p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          J: Infeior Angie of Scapula
                        </p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">K: Elbow</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">L: Liac Crest</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">
                          M: Sacrum to Popliteal Fossa
                        </p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">N: Knee to Heel</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">O: Foot Length</p>
                      </div>
                      <div className="col-6">
                        <p>Text Area</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Joint Integrety And Mobility Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Apprehension Test</p>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Compression And Distraction Test
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Drawer Test</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Glide Test</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Impingement Test</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Palpation</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">Shear Test</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Valgus And Varus Stress Test
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Negative</p>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Manual Muscle Strength And Range Of Motion Assessment
                </p>
                <div className="rehab-table border-bottom border-2 border-dark pb-3">
                  <table className="table table-bordered">
                    <tr className="text-center">
                      <th></th>
                      <th></th>
                      <th>WNL</th>
                      <th>NA</th>
                    </tr>

                    <tr className="text-center">
                      <td>CHEST WALL AND RELATED STRUCTURES</td>

                      <td>
                        <p>Text Area</p>
                      </td>
                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>PHONATION</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>PULMONARY RELATED SYMPTOMS</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>PULMONARY VITAL SIGNS</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>THORACOABDOMINAL VENTILATORY PATTERNS</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>PRESENCE AND LEVEL OF CYANOSIS</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>Ability to clear and protect airways</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>Gas exchange and oxygen level/transport</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>pulmonary function and ventilatory mechanism</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>BREATH AND VOICE SOUNDS</td>

                      <td>
                        <p>Text Area</p>
                      </td>

                      <td>
                        <p>WNL</p>
                      </td>
                      <td>
                        <p>NA</p>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 p-3">
                <p className="fs-6 fw-bold text-center border-bottom border-2 border-dark pb-3">
                  Wound Assessment
                </p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">Location</p>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Type of Ulcer</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">Stage</p>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Thickness of Non-Pressure Ulce
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Size</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Depth</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Tunneling</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Undermining</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Necrotic Tissue (%)</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Slough (%)</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Granulation Tissue (%)</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">
                            Epitheliazation in Process
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold pb-3 mt-3 text-center">Exudate</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">Amount</p>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6 fw-bold">Color</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <p className="fs-6 fw-bold">Odor</p>
                      </div>
                      <div className="col-6">
                        <div className="items-rehab-clinic">
                          <p className="fs-6">Text Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-6 fw-bold pb-3 mt-3 text-center">Pain</p>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-4">
                    <p className="fs-6">In Wound</p>
                  </div>
                  <div className="col-4">
                    <div className="items-rehab-clinic">
                      <p className="fs-6 fw-bold">
                        Describe surrounding tissue
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Text Area</p>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Signs Of Infection</p>
                  </div>
                  <div className="col-9">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Erythema</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center border-bottom border-2 border-dark mt-3">
                  <div className="col-5">
                    <p className="fs-6 fw-bold">
                      Presence Of Pressure Recucing / Relieving Devices
                    </p>
                  </div>
                  <div className="col-7">
                    <div className="items-rehab-clinic">
                      <p className="fs-6">Wheelchair</p>
                    </div>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Describe device in place</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Positioning Concerns</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Dressing to be used</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Barriers to Progress</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>

                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Identified Problems</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Short Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Long Term Goals</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
                  </div>
                </div>
                <div className="row border-bottom border-2 border-dark mt-3">
                  <div className="col-3">
                    <p className="fs-6 fw-bold">Treatment Plan</p>
                  </div>
                  <div className="col-9">
                    <p>This is Text Area</p>
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

export default RehabClinicalExam;

// RehabClinicalExam.getLayout = (RehabClinicalExam) => (
//   <AuthLayout>{RehabClinicalExam}</AuthLayout>
// );
