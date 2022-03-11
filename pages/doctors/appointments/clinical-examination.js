import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  AllergyCard,
  PatientDemographics,
  NotesCard,
} from "components/DoctorComponents";

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
  return (
    <>
      <div
        className="page-wrapper"
        id="page-wrapper"
        style={{
          padding: "1.875rem 1.875rem 0",
        }}
      >
        {/* <BreadCrum title="Diagnosis" /> */}
        <p>Diagnosis</p>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12 col-md-7"></div>
              <div className="col-md-5 col-sm-12">
                <div className="patient-btn-group d-flex justify-content-end">
                  <div className="btn-group-item me-2 shadow-sm">
                    <button className="btn btn-success">
                      Print Clinical Report
                    </button>
                  </div>
                  <div className="btn-group-item ms-2 shadow-sm">
                    <button className="btn btn-danger">
                      Print E-Prescription
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <PatientDemographics patientInfo={appointment?.patient} />

              <AllergyCard />

              <NotesCard />
            </div>
            <div className="col-md-10 col-lg-10 col-xl-10">
              <div className="card">
                <div className="card-header">
                  <div className="custom-tab row align-items-center">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6 appt-tab-btn">
                      <Link
                        href={`/doctors/appointments/subjective-details?id=${id}`}
                      >
                        <div
                          className="tablinks diag-inner-content bg-danger pt-4 pb-1 text-center "
                          id="defaultOpen"
                        >
                          <p className="fs-5 fw-bold text-light">
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
                              {/* <HistoryOfPresentIllness /> */}
                              <p>History of Present Illness</p>
                              {/* <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Race / Ethnicity -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Asian</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">Language -</p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">English</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Highest Level of Edcuation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Master Degree</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Hand Foot Dominance -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Right</p>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-12"
                              className="tab-pane fade"
                            >
                              {/* <ClinicalAssessment /> */}
                              <p>Clinical Assesment</p>

                              {/* <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Where Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Private Home</p>
                                      <p className="fs-6">Rented Home</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        With Whom Do You Live?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Alone</p>
                                      <p className="fs-6">Relative(s)</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Does Your Home Have?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">One Level</p>
                                      <p className="fs-6">Two Level</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        How Many Steps?
                                      </p>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Outside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                    <div className="item d-flex">
                                      <div className="item-inner me-3">
                                        <p className="fs-6 fw-bold">
                                          No. Steps Inside The Home -
                                        </p>
                                      </div>
                                      <div className="item-inner">
                                        <p>2</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Do You Use?
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Forearm Crutches</p>
                                      <p className="fs-6">Axillary Crutches</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Cultural / Religious
                                  </p>
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="item">
                                        <p className="fs-6 fw-bold">
                                          Any cultural or religious beliefs or
                                          wishes that might affect care?
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="item-inner">
                                        <p className="fs-6">
                                          Some quick example text to build on
                                          the card title and make up the bulk of
                                          the card&apos;s content. Some quick
                                          example text to build on the card
                                          title and make up the bulk of the
                                          card&apos;s content.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-5 fw-bold">
                                    Social / Health Habits
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Smoke Tobacco?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Do You Drink Alchohol?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">No</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Excercise?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            If yes how many times per week?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">10</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            How many minutes per day?
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">20</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-13"
                              className="tab-pane fade"
                            >
                              {/* <Assesment /> */}
                              <p>Assesment</p>
                              {/* <div className="row">
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Work Status -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Work Full Time</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Occupation -
                                      </p>
                                    </div>
                                    <div className="item">
                                      <p className="fs-6">Businessman</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="inner-item d-flex align-items-center justify-content-between">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Your Work Involves (Check All That
                                        Apply)
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center justify-content-between">
                                      <p className="fs-6">Prolonged Standing</p>
                                      <p className="fs-6">
                                        Working with bent neck
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-14"
                              className="tab-pane fade"
                            >
                              {/* <EPrescription /> */}
                              <p>E-Prescription</p>
                              {/* <div className="row">
                                <div className="col-md-12">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Past Medical History - Please Check If
                                        Anyone In Your Family Has Or Had Any Or
                                        The Following:
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Diabetes</p>
                                      <p className="fs-6">Genetic Disease</p>
                                      <p className="fs-6">Pacemaker</p>
                                      <p className="fs-6">AIDS</p>
                                      <p className="fs-6">Anemia</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Past Medical History - For Women Only:
                                  </p>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pelvic Inflammatory Disease -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Trouble with Period -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Complicated Pregnancies -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Pregnant -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Endometriosis -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">Yes</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="inner-item d-flex align-items-center justify-content-between">
                                        <div className="item">
                                          <p className="fs-6 fw-bold">
                                            Any Other -
                                          </p>
                                        </div>
                                        <div className="item">
                                          <p className="fs-6">
                                            Hello I am Fine
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Surgical History – Please List Any Surgeries
                                    You Had, And If Known Include Dates:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Title</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>First</td>
                                        <td>2022-01-18</td>
                                      </tr>
                                      <tr>
                                        <td>Second</td>
                                        <td>2022-01-14</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-md-12 mt-3">
                                  <div className="inner-item">
                                    <div className="item">
                                      <p className="fs-6 fw-bold">
                                        Diagnostic Test/Measures - Within The
                                        Past Year, Have You Had Any Of The
                                        Following (Check All That Apply):
                                      </p>
                                    </div>
                                    <div className="item-multi d-flex align-items-center">
                                      <p className="fs-6">Bronchoscopy</p>
                                      <p className="fs-6">
                                        EMG/Nerve Conduction
                                      </p>
                                      <p className="fs-6">Angiogram</p>
                                      <p className="fs-6">Stool Test</p>
                                      <p className="fs-6">CT scan</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <p className="fs-6 fw-bold">
                                    Medications & Allergies – Please Check Or
                                    List All Medications Or Allergies:
                                  </p>
                                  <table className="table">
                                    <thead className="table-info table-striped table-bordered">
                                      <tr>
                                        <th>Medicine Name</th>
                                        <th>Medicine Dose</th>
                                        <th>Start Date</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Route</th>
                                        <th>Frequency</th>
                                        <th>Any Side Effect</th>
                                        <th>If Yes</th>
                                        <th>Allergies</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                      <tr>
                                        <td>Cipcal</td>
                                        <td>500</td>
                                        <td>13/01/2022</td>
                                        <td>Continue</td>
                                        <td>Prescribed</td>
                                        <td>Oral</td>
                                        <td>2 times per day</td>
                                        <td>Yes</td>
                                        <td>Headech</td>
                                        <td>Rashes</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div> */}
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
