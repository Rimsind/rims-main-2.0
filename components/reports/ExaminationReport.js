import Image from "next/image";
import React from "react";
import {
  OrthoExamination,
  MedicineExamination,
  RehabExamination,
  NeuroExamination,
} from "components/reports";
export const ExaminationReport = React.forwardRef((props, ref) => {
  const { appointments, specialty, bloodGroup } = props;

  return (
    <div ref={ref}>
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
                    Clinical Examination Report
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
                    Dr. {appointments?.doctor?.firstName}{" "}
                    {appointments?.doctor?.lastName}
                  </p>
                  <p className="fs-6 fw-bold lh-1">
                    {appointments?.doctor?.qualification}
                  </p>
                  <p className="fs-6 lh-1">{specialty?.name}</p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">
                    Mob: {appointments?.doctor?.phone}
                  </p>
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
                    {appointments?.polyclinic?.name}
                  </p>
                  <p className="fs-6 lh-1">
                    {appointments?.polyclinic?.street_address},{" "}
                    {appointments?.polyclinic?.city}
                  </p>
                  <p className="fs-6 lh-1">
                    {appointments?.polyclinic?.state},{" "}
                    {appointments?.polyclinic?.country}, PIN:{" "}
                    {appointments?.polyclinic?.pincode}
                  </p>
                  <p className="fs-6 lh-1">
                    Email : {appointments?.polyclinic?.email}
                  </p>
                  <p className="fs-6 lh-1">
                    Mobile No: {appointments?.polyclinic?.phone}
                  </p>
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
                        appointments?.patient?.image?.url ||
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
                                {appointments?.patient?.first_name}{" "}
                                {appointments?.patient?.last_name}
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
                                {bloodGroup?.name}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Age :
                              <span className="fs-6 fw-light ms-2">
                                {appointments?.patient?.age}
                              </span>
                            </p>
                            <p className="fs-6 fw-bold text-light lh-1">
                              Gender :
                              <span className="fs-6 fw-light ms-2">
                                {appointments?.patient?.gender}
                              </span>
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
            {specialty?.name === "Neurologist" ? (
              <>
                <NeuroExamination data={appointments?.neurology} />
              </>
            ) : (
              <></>
            )}
            {specialty?.name === "Orthopedic" ? (
              <>
                <OrthoExamination data={appointments?.orthopedic} />
              </>
            ) : (
              <></>
            )}
            {specialty?.name === "Rehabilitation" ? (
              <>
                <RehabExamination data={appointments?.rehab} />
              </>
            ) : (
              <></>
            )}
            {specialty?.name === "Medicine" ? (
              <>
                <MedicineExamination data={appointments?.medicine} />
              </>
            ) : (
              <></>
            )}
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
    </div>
  );
});
