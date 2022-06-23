import { BreadCrums } from "components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import axios from "axios";
import { EprescriptionReport } from "components/reports/Eprescription";
import { AssesmentReport } from "components/reports/AssesmentReport";
import { ExaminationReport } from "components/reports/ExaminationReport";
import { SubjectiveReport } from "components/reports/SubjectiveReport";
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
import EPrescription from "components/DoctorComponents/CommonForms/ePrescription";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { withAuth } from "helpers/withAuth";

const ClinicalExaminations = () => {
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
    },
    { refreshInterval: 1000 }
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
  const { data: bloodGroup } = useSWR(
    `${apiUrl}/blood-groups/${appointment?.patient?.blood_group}`,
    fetcher
  );

  const prescriptionRef = useRef();
  const printPrescription = useReactToPrint({
    content: () => prescriptionRef.current,
  });
  const assesmentRef = useRef();
  const printAssesment = useReactToPrint({
    content: () => assesmentRef.current,
  });
  const examinationRef = useRef();
  const printExamination = useReactToPrint({
    content: () => examinationRef.current,
  });
  const subjectiveRef = useRef();
  const printSubjective = useReactToPrint({
    content: () => subjectiveRef.current,
  });

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
                  <div className="dropdown text-end">
                    <button
                      className="btn btn-danger dropdown-toggle py-2"
                      style={{ paddingLeft: "60px", paddingRight: "60px" }}
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Download Reports
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="border-bottom border-1">
                        <button
                          className="btn list-group-item list-group-item-action"
                          onClick={printPrescription}
                        >
                          Download E-Prescription
                        </button>
                      </li>
                      <li className="border-bottom border-1">
                        <button
                          className="btn list-group-item list-group-item-action"
                          onClick={printAssesment}
                        >
                          Download Assessments
                        </button>
                      </li>
                      <li className="border-bottom border-1">
                        <button
                          className="btn list-group-item list-group-item-action"
                          onClick={printExamination}
                        >
                          Download Clinical Examinations
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn list-group-item list-group-item-action"
                          onClick={printSubjective}
                        >
                          Download Subjective Information
                        </button>
                      </li>
                    </ul>
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
                      <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6 appt-tab-btn">
                        <Link
                          href={`/doctors/appointments/subjective-details?id=${id}`}
                          passHref
                        >
                          <div
                            className="tablinks diag-inner-content bg-light pt-4 pb-1 text-center border border-dark "
                            id="defaultOpen"
                          >
                            <p className="fs-5 fw-bold text-dark">
                              Subjective Informtion
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6 appt-tab-btn">
                        <div className="tablinks diag-inner-content bg-primary pt-4 pb-1 text-center active">
                          <p className="fs-5 fw-bold text-light">
                            Clinical Assesment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tabcontent" id="assesment">
                      <div className="card shadow-sm">
                        <div className="flex-fill">
                          <div className="card-header">
                            <ul
                              role="tablist"
                              className="nav nav-tabs nav-tabs-bottom border-bottom-0"
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
                                <HistoryOfPresentIllness
                                  appointmentId={id}
                                  appointment={appointment}
                                />
                              </div>
                              <div
                                role="tabpanel"
                                id="tab-12"
                                className="tab-pane fade"
                              >
                                {doctor?.specialty?.name === "Neurologist" && (
                                  <>
                                    <NeuroExamination
                                      appointmentId={id}
                                      appointment={appointment}
                                    />
                                  </>
                                )}
                                {doctor?.specialty?.name === "Orthopedic" && (
                                  <>
                                    <OrthoExamination
                                      appointmentId={id}
                                      appointment={appointment}
                                    />
                                  </>
                                )}
                                {doctor?.specialty?.name ===
                                  "Rehabilitation" && (
                                  <>
                                    <RehabExamination
                                      appointmentId={id}
                                      appointment={appointment}
                                    />
                                  </>
                                )}
                                {doctor?.specialty?.name === "Medicine" && (
                                  <>
                                    <MedicineExamination
                                      appointmentId={id}
                                      appointment={appointment}
                                    />
                                  </>
                                )}{" "}
                                {doctor?.specialty?.name != "Medicine" &&
                                doctor?.specialty?.name != "Orthopedic" &&
                                doctor?.specialty?.name != "Neurologist" &&
                                doctor?.specialty?.name != "Rehabilitation" ? (
                                  <>
                                    <MedicineExamination
                                      appointmentId={id}
                                      appointment={appointment}
                                    />
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
                                <Assesment
                                  appointmentId={id}
                                  appointment={appointment}
                                />
                              </div>
                              <div
                                role="tabpanel"
                                id="tab-14"
                                className="tab-pane fade"
                              >
                                <EPrescription
                                  appointmentId={id}
                                  eprescription={appointment?.eprescription}
                                  assesment={appointment?.assesment}
                                  patient={appointment?.patient}
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
        </div>
      </div>
      <div style={{ display: "none" }}>
        <EprescriptionReport
          ref={prescriptionRef}
          appointments={appointment}
          specialty={doctor?.specialty}
          bloodGroup={bloodGroup}
        />
      </div>
      <div style={{ display: "none" }}>
        <AssesmentReport
          ref={assesmentRef}
          appointments={appointment}
          specialty={doctor?.specialty}
          bloodGroup={bloodGroup}
        />
      </div>
      <div style={{ display: "none" }}>
        <ExaminationReport
          ref={examinationRef}
          appointments={appointment}
          specialty={doctor?.specialty}
          bloodGroup={bloodGroup}
        />
      </div>{" "}
      <div style={{ display: "none" }}>
        <SubjectiveReport
          ref={subjectiveRef}
          appointments={appointment}
          specialty={doctor?.specialty}
          bloodGroup={bloodGroup}
        />
      </div>
    </>
  );
};

export default withAuth(ClinicalExaminations);
