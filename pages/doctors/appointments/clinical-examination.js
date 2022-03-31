import { BreadCrums } from "components/common";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import {
  AllergyCard,
  PatientDemographics,
  NotesCard,
  NeuroExamination,
  OrthoExamination,
  RehabExamination,
  MedicineExamination,
  StatusChanger,
} from "components/DoctorComponents";
import HistoryOfPresentIllness from "components/DoctorComponents/CommonForms/HistoryOfPresentIllness";
import Assesment from "components/DoctorComponents/CommonForms/Assesment";
import Prescription from "components/DoctorComponents/CommonForms/Prescription";
import { toast, Slide } from "react-toastify";
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

  return (
    <>
      <div className="page-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="Clinical Examination"
        />
        <div
          className="page-wrapper-inner"
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

                <AllergyCard />

                <NotesCard />
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
