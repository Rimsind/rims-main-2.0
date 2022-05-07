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
          <div
            className="pres-topbar-ribbon py-1 px-1 mt-2 "
            style={{ backgroundColor: "#15558d" }}
          >
            <div className="row align-items-center">
              <div className="col-3">
                <div className="left-content text-end pt-2">
                  <Image
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    width={40}
                    height={30}
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="middle-content text-start">
                  <span className="fs-5 fw-bold text-light lh-1">
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <header
            className=" px-2 presc-header"
            style={{ borderBottom: "5px solid" }}
          >
            <div className="row align-items-center m-auto py-1">
              <div className="col-4">
                <div className="header-inner-item text-start">
                  <p className="fs-5 fw-bold fst-italic lh-1">
                    Dr. {appointments?.doctor?.firstName}{" "}
                    {appointments?.doctor?.lastName}
                  </p>
                  <p className="fs-6 fw-bold lh-1">
                    {appointments?.doctor?.qualification}
                  </p>
                  <span className="fs-6 lh-1">{specialty?.name}</span>
                  <br />
                  <span className="fs-6 lh-1">
                    Reg. No.-{appointments?.doctor?.registration_no}
                  </span>
                  <br />
                  <span className="fs-6 lh-1">
                    Mob: {appointments?.doctor?.phone}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className="doctor-symbol text-center">
                  <Image
                    src="/assets/images/doctor-symbol.png"
                    alt="Doctor Symbol"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="header-inner-item text-end">
                  <p className="fs-5 fw-bold fst-italic lh-1">
                    {appointments?.polyclinic?.name ||
                      appointments?.nursing_home?.name ||
                      appointments?.hospital?.name}
                  </p>
                  <p className="fs-6 lh-1">
                    {appointments?.polyclinic?.street_address ||
                      appointments?.nursing_home?.street_address ||
                      appointments?.hospital?.street_address}
                    ,
                    {appointments?.polyclinic?.city ||
                      appointments?.nursing_home?.city ||
                      appointments?.hospital?.city}
                  </p>
                  <span className="fs-6 lh-1">
                    {appointments?.polyclinic?.city ||
                      appointments?.nursing_home?.city ||
                      appointments?.hospital?.city}
                    ,
                    {appointments?.polyclinic?.country ||
                      appointments?.nursing_home?.country ||
                      appointments?.hospital?.country}
                    , PIN:
                    {appointments?.polyclinic?.pincode ||
                      appointments?.nursing_home?.pincode ||
                      appointments?.hospital?.pincode}
                  </span>
                  <br />
                  <span className="fs-6 lh-1">
                    {appointments?.polyclinic?.email ||
                      appointments?.nursing_home?.email ||
                      appointments?.hospital?.email}
                  </span>
                  <br />
                  <span className="fs-6 lh-1">
                    Mobile No:{" "}
                    {appointments?.polyclinic?.phone ||
                      appointments?.nursing_home?.phone ||
                      appointments?.hospital?.phone}
                  </span>
                </div>
              </div>
            </div>
          </header>
          <main className="main mt-3">
            <p
              className="presc-title fs-5 fw-bold text-center"
              style={{ color: " #720330" }}
            >
              Clinical Examination Report
            </p>
            <div
              className="presc-main_outer_bg"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                position: "relative",
                padding: "1rem",
              }}
            >
              <div className="profile_details mb-3">
                <div className="row align-items-center">
                  <div className="col-4">
                    <div
                      className="presc-img-profile text-center"
                      style={{
                        height: "15.1rem",
                        background: "#0b6ea5",
                        padding: "10px",
                        position: "absolute",
                        marginTop: "-118px",
                        marginLeft: "2px",
                        boxShadow: "1px 8px 12px 0px #00000038",
                        borderRadius: "100%",
                      }}
                    >
                      <Image
                        className="rounded-circle"
                        width={220}
                        height={220}
                        alt=""
                        src={
                          appointments?.patient?.image?.url ||
                          "/assets/images/profile.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="fs-5 fw-bold text-light border-bottom border-light">
                      Patient Details
                    </p>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p className="fs-6 fw-bold text-light lh-1 text-light lh-1">
                              Name :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.first_name}{" "}
                                {appointments?.patient?.last_name}
                              </span>
                            </p>
                            {/* <p className="fs-6 fw-bold text-light lh-1">
                              Material Status :
                              <span className="fs-6 fw-light ms-1">
                                {appointments?.patient?.marital_status}
                              </span>
                            </p> */}
                            <p>
                              <span className="fs-6 fw-bold text-light lh-1 me-5">
                                Blood Group :
                                <span className="fs-6 fw-light ms-1">
                                  {bloodGroup?.name}
                                </span>
                              </span>
                              <span className="fs-6 fw-bold text-light lh-1 me-5">
                                Age :
                                <span className="fs-6 fw-light ms-1">
                                  {appointments?.patient?.age}
                                </span>
                              </span>
                              <span className="fs-6 fw-bold text-light lh-1">
                                Gender :
                                <span className="fs-6 fw-light ms-1">
                                  {appointments?.patient?.gender}
                                </span>
                              </span>
                            </p>

                            <p>
                              <span className="fs-6 fw-bold text-light me-5">
                                Re-visit Date :
                                <span className="fs-6 fw-light ms-1">
                                  {appointments?.eprescription?.followUp_date}
                                </span>
                              </span>
                              <span className="fs-6 fw-bold text-light">
                                Re-visit Type :
                                <span className="fs-6 fw-light ms-1">
                                  {appointments?.eprescription?.followUp_type}
                                </span>
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
          <footer
            className="presc-footer mt-5"
            style={{ background: "linear-gradient(45deg, #116aa1, #720330)" }}
          >
            <div className="row align-items-center pt-3 px-3">
              <div className="col-3">
                <p className="text-light">
                  <i className="fas fa-map-marker-alt text-light me-2"></i>
                  Webel IT Park, <br />
                  City Center, Haldia,
                  <br /> WB, India. <br />
                  Pin - 721657
                </p>
              </div>
              <div className="col-6">
                <div className="banner-logo text-center mb-2">
                  <Image
                    height="50"
                    width="75"
                    src="/assets/images/logo-white.png"
                    alt=""
                  />
                </div>
                <p className="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Ind a Unit Of Retar Mediserve Pvt. Ltd.
                </p>
                <p className="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div className="col-3">
                <p className="text-light">
                  <i className="fas fa-envelope text-light me-2"></i>
                  info@rimsind.com
                </p>
                <p className="text-light">
                  <i className="fas fa-mobile text-light me-2"></i>
                  +91 859 739 4414
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
});

ExaminationReport.displayName = "Examination Report";
