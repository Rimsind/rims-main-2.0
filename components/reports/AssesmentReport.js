import Image from "next/image";
import React from "react";
export const AssesmentReport = React.forwardRef((props, ref) => {
  const { appointments, specialty, bloodGroup } = props;

  return (
    <div ref={ref}>
      <div className="clini-exam">
        <div className="container clini-exam-body">
          <header className="clini-exam-header">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="left-content">
                  <Image
                    height="100"
                    width="130"
                    src="/assets/images/logo-dark.png"
                    style={{ height: "8rem" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="middle-content">
                  <p className="fs-4 fw-bold clini-exam-logo-name">
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end">
                <div className="right-content">
                  <p>
                    <i className="fas fa-map-pin clini-exam-right-icon me-2"></i>
                    Haldia IT Park , City Centre , WB, INDIA (HO)
                  </p>
                  <p>
                    <i className="fas fa-phone clini-exam-right-icon me-2"></i>
                    +91-90384-43073
                  </p>
                  <p>
                    <i className="fas fa-envelope-open-text clini-exam-right-icon me-2"></i>
                    demo@email.com
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <div className="profile_details mb-3">
              <div className="profile_heading">
                <p className="fs-3 clini-exam-profile-heading-text fw-bold text-center">
                  Clinical Examination Report
                </p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="clini-exam-left-content text-light">
                    <div className="patient_image mb-2">
                      <Image
                        height={350}
                        width={450}
                        alt=""
                        className="clini-exam-img"
                        src={
                          appointments?.patient?.image?.url ||
                          "/assets/images/profile.png"
                        }
                      />
                    </div>
                    <div className="patient_left_content">
                      <div className="patient_intro mb-2">
                        <p className="fs-5 fw-bold border-bottom border-white">
                          Patient Details
                        </p>
                        <div className="patient_details_inner">
                          <p>
                            Name : {appointments?.patient?.first_name}{" "}
                            {appointments?.patient?.last_name}
                          </p>
                          <p>
                            Material Status :{" "}
                            {appointments?.patient?.marital_status}
                          </p>
                          <p>Blood Group : {bloodGroup?.name}</p>
                          <p>Date of Birth : {appointments?.patient?.dob}</p>
                          <p>Gender : {appointments?.patient?.gender}</p>
                        </div>
                      </div>

                      <div className="patient_intro mb-2">
                        <p className="fs-5 fw-bold border-bottom border-white">
                          Consulting With
                        </p>
                        <div className="patient_details_inner">
                          <p>
                            Dr. {appointments?.doctor?.firstName}{" "}
                            {appointments?.doctor?.lastName}
                          </p>
                          <p>
                            Qualification: {appointments?.doctor?.qualification}
                          </p>
                          <p>Specialization: {specialty?.name}</p>
                          <p>
                            Clinic Name:{" "}
                            {appointments?.polyclinic?.name ||
                              appointments?.nursing_home?.name ||
                              appointments?.hospital?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="right_content">
                    <div className="right_content_inner">
                      <p className="fs-5 clini-exam-right-content-inner-text">
                        Chief Complaints with Duration
                      </p>
                      <div className="clini-exam-patient-details-inner ms-2">
                        <div className="clini-exam-patient-details-inner ms-2">
                          <div className="row">
                            <div className="col-md-12 main_column mb-5">
                              <table className="table table-striped">
                                <thead className="table-dark">
                                  <tr>
                                    <th scope="col">Sl.</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Duration</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {appointments?.chiefComplaints.map(
                                    (items, index) => (
                                      <tr key={index}>
                                        <th scope="row">*</th>
                                        <td>{items?.description}</td>
                                        <td>{items?.duration}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                              <p className="fs-5 fw-bold border-bottom border-white mt-3">
                                Additional Chief Complaint
                              </p>
                              <div className="patient_details_inner">
                                {appointments?.general_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    General Problem:{" "}
                                    {appointments?.general_problems}
                                  </p>
                                )}
                                {appointments?.genetal_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Genital Problem :{" "}
                                    {appointments?.genetal_problems}
                                  </p>
                                )}
                                {appointments?.heart_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Heart Related Problems :{" "}
                                    {appointments?.heart_problems}
                                  </p>
                                )}
                                {appointments?.joint_related_problems ===
                                "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Joint Related Problems :{" "}
                                    {appointments?.joint_related_problems}
                                  </p>
                                )}
                                {appointments?.mental_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Mental Problems :{" "}
                                    {appointments?.mental_problems}
                                  </p>
                                )}
                                {appointments?.neuro_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Neurologic Problems :{" "}
                                    {appointments?.neuro_problems}
                                  </p>
                                )}
                                {appointments?.stomach_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Stomach & Abdominal Problems :{" "}
                                    {appointments?.stomach_problems}
                                  </p>
                                )}
                                {appointments?.blood_problems === "false" ? (
                                  <></>
                                ) : (
                                  <p>
                                    Stomach & Abdominal Problems :{" "}
                                    {appointments?.blood_problems}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_content_inner">
                      <p className="fs-5 clini-exam-right-content-inner">
                        Clinical Investigation
                      </p>
                      <div className="patient_details_inner p-2">
                        <div className="row">
                          <div className="col-md-12 main_column">
                            <p>
                              {appointments?.assesment?.clinicalInvestigation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_content_inner">
                      <p className="fs-5 clini-exam-right-content-inner">
                        Medical Diagnosis
                      </p>
                      <div className="patient_details_inner ms-2">
                        <div className="patient_details_inner ms-2">
                          <div className="row">
                            <div className="col-md-12 main_column mb-5">
                              <table className="table table-striped">
                                <thead className="table-dark">
                                  <tr>
                                    <th scope="col">Sl.</th>
                                    <th scope="col">ICD 10 Code diagnosis</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {appointments?.assesment?.diagnosis.map(
                                    (items, index) => (
                                      <tr key={index}>
                                        <th scope="row">#{index + 1}</th>
                                        <td>{items?.description}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_content_inner">
                      <p className="fs-5 clini-exam-right-content-inner">
                        Treatment Plan
                      </p>
                      <div className="patient_details_inner ms-2">
                        <div className="col-md-12 main_column">
                          <p>{appointments?.assesment?.treatmentPlan}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="mb-1">
            <p className="text-center clini-exam-footer-content">Thank You</p>
          </footer>
        </div>
      </div>
    </div>
  );
});

AssesmentReport.displayName = "Assesment Report";
