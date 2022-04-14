import { BreadCrums } from "components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import {
  AllergyCard,
  PatientDemographics,
  VactionCard,
  NeuroExamination,
  OrthoExamination,
  RehabExamination,
  MedicineExamination,
  StatusChanger,
} from "components/DoctorComponents";
import HistoryOfPresentIllness from "components/DoctorComponents/CommonForms/HistoryOfPresentIllness";
import Assesment from "components/DoctorComponents/CommonForms/Assesment";
import Prescription from "components/DoctorComponents/CommonForms/Prescription";

import {
  GeneralInformation,
  EmploymentStatus,
  FamilyMadicalHistory,
  UploadMedicalRecord,
  SocialHistory,
  MedicalHistory,
  FunctionalStatus,
} from "components/forms";
import {
  CheifComplaints,
  VitalSigns,
} from "components/DoctorComponents/subjectiveForm";
import { useState } from "react";
const ClinicalExamination = () => {
  const { id } = useRouter().query;
  const { auth } = useAuth();
  const { data: appointment } = useSWR(
    `${apiUrl}/appointments/${id}`,
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

  const { data: doctor } = useSWR(
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

  const [subjectiveButton, setSubjectiveButton] = useState(
    "btn btn-primary text-center py-4 fs-5 fw-bold"
  );
  const [clinicalButton, setClinicalButton] = useState(
    "btn bg-light text-center border border-dark py-4 fs-5 fw-bold"
  );
  const [subjectiveCard, setSubjectiveCard] = useState("card-body d-block");
  const [clinicalCard, setClinicalCard] = useState("card-body d-none");

  const subjectiveEvent = (e) => {
    setSubjectiveButton("btn btn-primary text-center py-4 fs-5 fw-bold");
    setClinicalButton(
      "btn bg-light text-center border border-dark py-4 fs-5 fw-bold"
    );
    setSubjectiveCard("card-body d-block");
    setClinicalCard("card-body d-none");
  };

  const clinicalEvent = () => {
    setSubjectiveButton(
      "btn bg-light text-center border border-dark py-4 fs-5 fw-bold"
    );
    setClinicalButton("btn btn-primary text-center py-4 fs-5 fw-bold");
    setSubjectiveCard("card-body d-none");
    setClinicalCard("card-body d-block");
  };

  return (
    <>
      <div className="page-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="Clinical Examination"
        />
        <div
          className="page-wrapper-inner responsive-view"
          id="page-wrapper"
          style={{
            padding: "1.875rem 1.875rem 0",
          }}
        >
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-0 col-lg-0 col-xl-2 col-xxl-2"></div>
                <StatusChanger id={id} />
                <div className="col-12 col-md-6 col-sm-12 col-lg-6 col-xl-4 col-xxl-4">
                  <div className="patient-btn-group d-flex justify-content-end">
                    <div className="btn-group-item shadow-sm">
                      <Link href={`/reports/assesment-report?id=${id}`}>
                        <a className="btn btn-success">Download Assessments</a>
                      </Link>
                    </div>
                    <div className="btn-group-item ms-2 shadow-sm">
                      <Link href={`/reports/e-prescription?id=${id}`}>
                        <a className="btn btn-danger">Print E-Prescription</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-2">
                <PatientDemographics patientInfo={appointment?.patient} />

                <AllergyCard
                  medicalHistory={appointment?.patient?.medicalHistory}
                />

                <VactionCard
                  medicalHistory={appointment?.patient?.medicalHistory}
                />
              </div>
              <div className="col-md-12 col-lg-12 col-xl-10">
                <div className="card">
                  <div className="card-header">
                    <div className="custom-tab row align-items-center">
                      <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="d-grid gap-2">
                          <button
                            className={subjectiveButton}
                            onClick={subjectiveEvent}
                          >
                            Subjective Informtion
                          </button>
                        </div>
                      </div>
                      <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="d-grid gap-2">
                          <button
                            className={clinicalButton}
                            onClick={clinicalEvent}
                          >
                            Clinical Assesment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={clinicalCard}>
                    <div className="tabcontent" id="assesment">
                      <div className="card shadow-sm">
                        <div className="card flex-fill">
                          <div className="card-header">
                            <ul
                              role="tablist"
                              className="nav nav-tabs card-header-tabs"
                            >
                              <li className="nav-item">
                                <a
                                  href="#tab-11"
                                  data-bs-toggle="tab"
                                  className="nav-link active"
                                >
                                  History Of Present Illness
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#tab-12"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  Clinical Examination
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#tab-13"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  Assesment
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#tab-14"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  E- Prescription
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body">
                            <div className="tab-content pt-0">
                              <div
                                role="tabpanel"
                                id="tab-11"
                                className="tab-pane fade show active"
                              >
                                <HistoryOfPresentIllness appointmentId={id} />
                              </div>
                              <div
                                role="tabpanel"
                                id="tab-12"
                                className="tab-pane fade"
                              >
                                {doctor?.specialty?.name === "Neurologist" ? (
                                  <>
                                    <NeuroExamination appointmentId={id} />
                                  </>
                                ) : (
                                  <></>
                                )}
                                {doctor?.specialty?.name === "Orthopedic" ? (
                                  <>
                                    <OrthoExamination appointmentId={id} />
                                  </>
                                ) : (
                                  <></>
                                )}
                                {doctor?.specialty?.name ===
                                "Rehabilitation" ? (
                                  <>
                                    <RehabExamination appointmentId={id} />
                                  </>
                                ) : (
                                  <></>
                                )}
                                {doctor?.specialty?.name === "Medicine" ? (
                                  <>
                                    <MedicineExamination appointmentId={id} />
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                              <div
                                role="tabpanel"
                                id="tab-13"
                                className="tab-pane fade"
                              >
                                <Assesment appointmentId={id} />
                              </div>
                              <div
                                role="tabpanel"
                                id="tab-14"
                                className="tab-pane fade"
                              >
                                <Prescription appointmentId={id} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={subjectiveCard}>
                    <div className="tabcontent" id="subjective">
                      <div className="card-header border-bottom">
                        <ul
                          role="tablist"
                          className="nav nav-tabs card-header-tabs"
                        >
                          <li className="nav-item">
                            <a
                              href="#tab-8"
                              data-bs-toggle="tab"
                              className="nav-link active"
                            >
                              Chief Complaints
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-9"
                              data-bs-toggle="tab"
                              className="nav-link "
                            >
                              Vital Signs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-1"
                              data-bs-toggle="tab"
                              className="nav-link "
                            >
                              General Information
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-2"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Social Histroy & Living Environment
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-3"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Employment Status
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-4"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Medical History
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-5"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Functional Status
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-6"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Family Medical History
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#tab-7"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              Past Medical Records
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content pt-0">
                          <div
                            role="tabpanel"
                            id="tab-8"
                            className="tab-pane fade show active"
                          >
                            <CheifComplaints appointmentId={id} />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-9"
                            className="tab-pane fade"
                          >
                            <VitalSigns appointmentId={id} />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-1"
                            className="tab-pane fade  "
                          >
                            <GeneralInformation
                              patientId={appointment?.patient?.id}
                              generalInformation={
                                appointment?.patient?.generalInformation
                              }
                              updated_at={appointment?.updated_at}
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-2"
                            className="tab-pane fade"
                          >
                            <SocialHistory
                              patientId={appointment?.patient?.id}
                              socialHistory={
                                appointment?.patient?.socialHistory
                              }
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-3"
                            className="tab-pane fade"
                          >
                            <EmploymentStatus
                              patientId={appointment?.patient?.id}
                              employmentStatus={
                                appointment?.patient?.employmentStatus
                              }
                              updated_at={appointment?.updated_at}
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-4"
                            className="tab-pane fade"
                          >
                            <MedicalHistory
                              patientId={appointment?.patient?.id}
                              medicalHistory={
                                appointment?.patient?.medicalHistory
                              }
                              past_sugrical_history={
                                appointment?.patient?.past_sugrical_history
                              }
                              past_medication_history={
                                appointment?.patient?.past_medication_history
                              }
                              updated_at={appointment?.updated_at}
                              gender={appointment?.patient?.gender}
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-5"
                            className="tab-pane fade"
                          >
                            <FunctionalStatus
                              patientId={appointment?.patient?.id}
                              functionalStatus={
                                appointment?.patient?.functionalStatus
                              }
                              updated_at={appointment?.updated_at}
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-6"
                            className="tab-pane fade"
                          >
                            <FamilyMadicalHistory
                              patientId={appointment?.patient?.id}
                              familyHistory={
                                appointment?.patient?.familyHistory
                              }
                              updated_at={appointment?.updated_at}
                            />
                          </div>
                          <div
                            role="tabpanel"
                            id="tab-7"
                            className="tab-pane fade"
                          >
                            <UploadMedicalRecord
                              patientId={appointment?.patient?.id}
                              updated_at={appointment?.updated_at}
                              upload_medical_record={
                                appointment?.upload_medical_record
                              }
                            />
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
    </>
  );
};

export default ClinicalExamination;
