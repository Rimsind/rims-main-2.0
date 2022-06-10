import Image from "next/image";
import React from "react";
export const SubjectiveReport = React.forwardRef((props, ref) => {
  const { appointments, specialty, bloodGroup } = props;

  // const {
  //   employmentStatus,
  //   familyHistory,
  //   functionalStatus,
  //   generalInformation,
  //   medicalHistory,
  //   past_medication_history,
  //   past_surgical_history,
  //   socialHistory,
  //   vitalSigns,
  // } = props.appointment.patient;

  return (
    <div ref={ref}>
      <div className="clini-exam">
        <div className="container clini-exam-body">
          <header
            className="clini-exam-header"
            style={{ borderBottom: "5px solid" }}
          >
            <div className="row align-items-center mt-3">
              <div className="col-2">
                <div className="left-content">
                  <Image
                    height="80"
                    width="100"
                    src="/assets/images/logo-dark.png"
                    style={{ height: "8rem" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="middle-content">
                  <span
                    className="fs-5 fw-bold clini-exam-logo-name lh-1"
                    style={{ color: "#680634" }}
                  >
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <div className="right-content">
                  <span>
                    <i
                      className="fas fa-map-pin clini-exam-right-icon me-2 lh-lg"
                      style={{ color: "#680634" }}
                    ></i>
                    Webel IT Park, City Centre, Haldia, WB, INDIA. Pin - 721657
                  </span>
                  <br />
                  <span>
                    <i className="fas fa-phone clini-exam-right-icon me-2 lh-lg"></i>
                    +91-90384-43073
                  </span>
                  <br />
                  <span>
                    <i className="fas fa-envelope-open-text clini-exam-right-icon me-2 lh-lg"></i>
                    demo@email.com
                  </span>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <div className="profile_details mb-3">
              <div className="profile_heading">
                <p
                  className="fs-3 fw-bold text-center"
                  style={{ color: "#720330" }}
                >
                  Patient Medical History
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <div
                    className="clini-exam-left-content text-light"
                    style={{
                      background: "linear-gradient(45deg, #116aa1, #720330)",
                      padding: "1rem",
                    }}
                  >
                    <div className="patient_image mb-2">
                      <Image
                        height={450}
                        width={450}
                        alt=""
                        className="clini-exam-img"
                        style={{ padding: "1rem" }}
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
                          </p>{" "}
                          <p>Age : {appointments?.patient?.age}</p>
                          <p>Blood Group : {bloodGroup?.name}</p>
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
                      <div className="patient_intro mb-2">
                        <p className="fs-5 fw-bold border-bottom border-white">
                          Revisit Details
                        </p>
                        <div className="patient_details_inner">
                          <p>
                            Date: {appointments?.eprescription?.followUp_date}
                          </p>
                          <p>
                            Type: {appointments?.eprescription?.followUp_type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="right_content">
                    <div className="right_content_inner">
                      <p
                        className="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        General Information
                      </p>
                      <div
                        className="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div className="row">
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">
                                  Race / Ethnicity :
                                </p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.generalInformation
                                      ?.race
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">Language :</p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {" "}
                                  {
                                    appointments?.patient?.generalInformation
                                      ?.language
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 main_column">
                            <div className="row">
                              <div className="col-6 inner_column">
                                <p className="fs-6 fw-bold">
                                  Highest Level of Education :
                                </p>
                              </div>
                              <div className="col-6 inner_column">
                                <p className="fs-6">
                                  {" "}
                                  {
                                    appointments?.patient?.generalInformation
                                      ?.education
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 main_column">
                            <div className="row">
                              <div className="col-6 inner_column">
                                <p className="fs-6 fw-bold">
                                  Hand Foot Dominance :
                                </p>
                              </div>
                              <div className="col-6 inner_column">
                                <p className="fs-6">
                                  {" "}
                                  {
                                    appointments?.patient?.generalInformation
                                      ?.physical_dominance
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right_content_inner">
                      <p
                        className="fs-5"
                        style={{
                          background:
                            "linear-gradient(45deg, #6f0734, transparent)",
                          padding: "1rem",
                          color: "white",
                          borderRadius: "30px 4px 4px 30px",
                        }}
                      >
                        Social History & Living Environment
                      </p>
                      <div
                        className="patient_details_inner"
                        style={{ marginLeft: "2rem" }}
                      >
                        <div className="row">
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">
                                  Whrere Do You Live :
                                </p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.socialHistory
                                      ?.live_where
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">
                                  With Whom Do You Live :
                                </p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.socialHistory
                                      ?.live_with
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">
                                  Does Your Home Have :
                                </p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.socialHistory
                                      ?.home_haves
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 main_column">
                            <div className="row">
                              <div className="col-8 inner_column">
                                <p className="fs-6 fw-bold">Do You Use :</p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.socialHistory
                                      ?.do_uses
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 main_column">
                            <div className="row">
                              <div className="col-4 inner_column">
                                <p className="fs-6 fw-bold">How Many Steps ?</p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  No. Steps Outside the Home:
                                  <span className="fw-bold ms-2">
                                    {
                                      appointments?.patient?.socialHistory
                                        ?.homeStepsOut
                                    }
                                  </span>
                                </p>
                              </div>
                              <div className="col-4 inner_column">
                                <p className="fs-6">
                                  No. Steps Inside the Home:
                                  <span className="fw-bold ms-2">
                                    {
                                      appointments?.patient?.socialHistory
                                        ?.homeStepsIn
                                    }
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 main_column">
                            <p
                              className="fs-5 fw-bold"
                              style={{ borderBottom: "1px solid" }}
                            >
                              Cultural / Religious :
                            </p>
                            <div className="row">
                              <div className="col-6 inner_column">
                                <p className="fs-6">
                                  Any cultural or religious beliefs or wishes
                                  that might affect care?
                                </p>
                              </div>
                              <div className="col-6 inner_column">
                                <p className="fs-6">
                                  {
                                    appointments?.patient?.socialHistory
                                      ?.culturalBelief
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <p
                              className="fs-5 fw-bold"
                              style={{ borderBottom: "1px solid" }}
                            >
                              Social / Health Habits :
                            </p>
                            <div className="row">
                              <div className="col-6 main_column">
                                <div className="row">
                                  <div className="col-8 inner_column">
                                    <p className="fs-6 fw-bold">
                                      Do You Smoke Tobacco?
                                    </p>
                                  </div>
                                  <div className="col-4 inner_column">
                                    <p className="fs-6">
                                      {
                                        appointments?.patient?.socialHistory
                                          ?.smokeTobacco
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 main_column">
                                <div className="row">
                                  <div className="col-8 inner_column">
                                    <p className="fs-6 fw-bold">
                                      Do You Drink Alcohol?
                                    </p>
                                  </div>
                                  <div className="col-4 inner_column">
                                    <p className="fs-6">
                                      {
                                        appointments?.patient?.socialHistory
                                          ?.drinkAlcohol
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 main_column">
                                <div className="row">
                                  <div className="col-8 inner_column">
                                    <p className="fs-6 fw-bold">Excercise?</p>
                                  </div>
                                  <div className="col-4 inner_column">
                                    <p className="fs-6">
                                      {
                                        appointments?.patient?.socialHistory
                                          ?.exercise
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6 main_column">
                                <div className="row">
                                  <div className="col-8 inner_column">
                                    <p className="fs-6 fw-bold">
                                      If Yes How Many Times Per Week?
                                    </p>
                                  </div>
                                  <div className="col-4 inner_column">
                                    <p className="fs-6">
                                      {
                                        appointments?.patient?.socialHistory
                                          ?.exerciseNoInWeek
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 main_column">
                                <div className="row">
                                  <div className="col-8 inner_column">
                                    <p className="fs-6 fw-bold">
                                      How Many Minutes Per Day?
                                    </p>
                                  </div>
                                  <div className="col-4 inner_column">
                                    <p className="fs-6">
                                      {
                                        appointments?.patient?.socialHistory
                                          ?.exerciseDurationDailyInMin
                                      }
                                    </p>
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
              </div>
              <div
                className="right_content_inner"
                style={{ marginTop: "60px", paddingTop: "70px" }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Past Medical History
                </p>
                <div
                  className="patient_details_inner"
                  style={{ marginLeft: "2rem" }}
                >
                  <div className="col-12 main_column">
                    <p
                      className="fs-5 fw-bold"
                      style={{ borderBottom: "1px solid" }}
                    >
                      Past Medical History - Please Check If Anyone In You Have
                      Or Had Any Or The Following :
                    </p>
                    <div className="row">
                      <div className="col-6 inner_column">
                        <p className="fs-6">
                          {appointments?.patient?.medicalHistory?.past_symptoms}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 main_column">
                    <p
                      className="fs-5 fw-bold"
                      style={{ borderBottom: "1px solid" }}
                    >
                      Past Medical History - For Women Only :
                    </p>
                    <div className="row">
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">
                              Pelvic Inflammatory Disease :
                            </p>
                          </div>
                          <div className="col-4 inner_column">
                            <p className="fs-6">
                              {" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen?.pelvicDisease
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">
                              Trouble With Period :
                            </p>
                          </div>
                          <div className="col-4 inner_column">
                            <p className="fs-6">
                              {" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen?.periodTrouble
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">
                              Complicated Pregnancies :
                            </p>
                          </div>
                          <div className="col-4 inner_column">
                            <p className="fs-6">
                              {" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen
                                  ?.complicatedPregnancy
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">Pregnant:</p>
                          </div>
                          <div className="col-4 inner_column">
                            <p className="fs-6">
                              {" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen?.isPregnant
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">Endometriosis :</p>
                          </div>
                          <div className="col-4 inner_column">
                            <p className="fs-6">
                              {" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen?.endometriosis
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-8 inner_column">
                            <p className="fs-6 fw-bold">
                              Any Other :{" "}
                              {
                                appointments?.patient?.medicalHistory
                                  ?.pastMedicalHistoryForWomen?.other
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 main_column">
                    <p
                      className="fs-5 fw-bold"
                      style={{ borderBottom: "1px solid" }}
                    >
                      Surgical History – Please List Any Surgeries You Had, And
                      If Known Include Dates:
                    </p>
                  </div>
                  <div className="col-12 main_column">
                    <p
                      className="fs-5 fw-bold"
                      style={{ borderBottom: "1px solid" }}
                    >
                      Diagnostic Test/Measures - Within The Past Year, Have You
                      Had Any Of The Following (Check All That Apply):
                    </p>
                    <p className="fs-6">False</p>
                  </div>
                  <div className="col-12 main_column">
                    <p
                      className="fs-5 fw-bold"
                      style={{ borderBottom: "1px solid" }}
                    >
                      Medications & Allergies – Please Check Or List All
                      Medications Or Allergies:
                    </p>
                    <div className="row">
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-6 inner_column">
                            <p className="fs-6 fw-bold">Non - Prescription :</p>
                          </div>
                          <div className="col-6 inner_column">
                            <p className="fs-6">False</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-6 inner_column">
                            <p className="fs-6 fw-bold">Prescription :</p>
                          </div>
                          <div className="col-6 inner_column"></div>
                        </div>
                      </div>
                      <div className="col-6 main_column">
                        <div className="row">
                          <div className="col-6 inner_column">
                            <p className="fs-6 fw-bold">Allergies :</p>
                          </div>
                          <div className="col-6 inner_column"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_content_inner">
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Employment Status
                </p>
                <div
                  className="patient_details_inner"
                  style={{ marginLeft: "2rem" }}
                >
                  <div className="row">
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Work Status :</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Work Full Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Occuption?</p>
                        </div>
                        <div className="col-4 inner_column"></div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">
                            Your Work Involves (Check All That Apply) :
                          </p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">False</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_content_inner">
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Functional Status
                </p>
                <div
                  className="patient_details_inner"
                  style={{ marginLeft: "2rem" }}
                >
                  <p className="fs-6 fw-bold">
                    Any Problem With Functional Mobility and Transfers
                  </p>
                  <div className="row">
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">
                            Bed Mobility (Moving in bed such as rolling,
                            scooting, getting in and out of bed)
                          </p>
                        </div>
                        <div className="col-4 inner_column">Current</div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">
                            Transfers (such as bed to chair, from bed to commode
                            / toilet)
                          </p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="fs-6 fw-bold">
                        Any Problem in Walking or Ambulation such as
                      </p>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">On Ramps</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">On Level Surfaces</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">On Stairs</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">On Uneven Surfaces</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="fs-6 fw-bold">
                        Any Problem in Self-Care Activities Such As
                      </p>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Bathing</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Dressing</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Toileting</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="fs-6 fw-bold">
                        Any Problem in Home Management Such As
                      </p>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Household Chores</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Shopping</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Driving / Transporting</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Care Of Dependents</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="fs-6 fw-bold">
                        Any Problem in Community And Work Activities Such As
                      </p>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Work</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">School</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Recreation</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Sport</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 main_column">
                      <div className="row">
                        <div className="col-8 inner_column">
                          <p className="fs-6 fw-bold">Play Activity</p>
                        </div>
                        <div className="col-4 inner_column">
                          <p className="fs-6">Current</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_content_inner">
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Family Medical History
                </p>
                <div
                  className="patient_details_inner"
                  style={{ marginLeft: "2rem" }}
                >
                  <div className="row">
                    <div className="col-12 main_column">
                      <table className="table table-striped">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">Relation</th>
                            <th scope="col">Age (If Living)</th>
                            <th scope="col">Age (If Death)</th>
                            <th scope="col">Cause of Death</th>
                            <th scope="col">Problems</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Grand Father</td>
                            <td>0</td>
                            <td>80</td>
                            <td>Old Age</td>
                            <td>Diabetes</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Grand Father</td>
                            <td>0</td>
                            <td>80</td>
                            <td>Old Age</td>
                            <td>Diabetes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="mb-1">
            <p
              className="text-center clini-exam-footer-content"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                color: "white",
                padding: "1rem 0",
              }}
            >
              Rims Ind a Unit Of Retar Mediserve Pvt. Ltd.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
});

SubjectiveReport.displayName = "Subjective Inforfation Report";
