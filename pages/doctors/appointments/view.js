import { BreadCrums } from "components/common";

import Image from "next/image";
import useSWR from "swr";
import { apiUrl, fetcher } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";

import { useRouter } from "next/router";
import { withAuth } from "helpers/withAuth";
import {
  AllergyCard,
  PatientDemographics,
  VactionCard,
} from "components/DoctorComponents";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { EprescriptionReport } from "components/reports/Eprescription";
import { AssesmentReport } from "components/reports/AssesmentReport";
import { ExaminationReport } from "components/reports/ExaminationReport";
const View = () => {
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

  const { data: specialty } = useSWR(
    `${apiUrl}/specialties/${appointment?.doctor?.specialty}`,
    fetcher
  );
  const { data: bloodGroup } = useSWR(
    `${apiUrl}/blood-groups/${appointment?.patient?.blood_group}`,
    fetcher
  );
  const chiefComplaintsLength = appointment?.chiefComplaints.length;

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
  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / My Appointments"
          title1="My Appointments"
        />

        <div className="content mb-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 left-nav">
                <PatientDemographics patientInfo={appointment?.patient} />

                <AllergyCard
                  medicalHistory={appointment?.patient?.medicalHistory}
                />

                <VactionCard
                  medicalHistory={appointment?.patient?.medicalHistory}
                />
              </div>
              <div className="col-md-12 col-sm-12 col-lg-9 col-xl-9">
                <div className="upper-section">
                  <div className="row align-items-baseline">
                    <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
                      <div className="left-upper-content pt-3 ps-2 mb-3 rounded text-light">
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <p className="fs-6 lh-1">Revisit Details</p>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="end-items d-flex left-para-date">
                              <p className="fs-6 me-2 lh-1 ms-3 ms-lg-0 ms-xl-0 ms-xxl-0">
                                Date -{" "}
                              </p>
                              <p className="fs-6 lh-1">
                                {appointment?.eprescription?.followUp_date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-9 col-xxl-9">
                      <div className="right-upper-content">
                        <div className="row">
                          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 text-end">
                            <div className="d-grid gap-2 mb-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <button
                                className="btn btn-success py-2"
                                onClick={printExamination}
                              >
                                Download Examination
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 text-end">
                            <div className="d-grid gap-2 mb-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <button
                                className="btn btn-primary py-2"
                                onClick={printAssesment}
                              >
                                Download Assessments
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="d-grid gap-2 mb-2 mb-lg-0 mb-xl-0 mb-xxl-0">
                              <button
                                className="btn btn-danger "
                                onClick={printPrescription}
                              >
                                Download e-Prescription
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Id</p>
                        <p className="fs-6 fst-italic">#{appointment?.id}</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Date</p>
                        <p className="fs-6 fst-italic">{appointment?.date}</p>
                      </div>
                      {/* <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 app-items">
                        <p className="fs-6 fw-bold">Appt Time</p>

                        <p className="fs-6 fst-italic">12:24 P.M</p>
                      </div> */}
                      <div className="col-sm-6 col-md-6 col-lg-4 app-items">
                        <p className="fs-6 fw-bold">Doctor Details</p>
                        <div className="app-items-inner d-flex">
                          <div className="left-image me-2">
                            <Image
                              height="50"
                              width="50"
                              src={
                                appointment?.doctor?.image?.url ||
                                "/assets/images/profile.png"
                              }
                              className="img-fluid rounded"
                              alt="User Image"
                            />
                          </div>
                          <div className="right-details">
                            <p className="fs-6 lh-1 fst-normal">
                              Dr. {appointment?.doctor?.firstName}{" "}
                              {appointment?.doctor?.lastName}
                            </p>
                            <p className="fs-6 fst-italic lh-1">
                              {specialty?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 app-items">
                        <p className="fs-6 fw-bold">Clinic Details</p>
                        <div className="app-items-inner d-flex">
                          <div className="left-image me-2">
                            <Image
                              height="50"
                              width="50"
                              src={
                                appointment?.polyclinic?.image?.url ||
                                appointment?.nursing_home?.image?.url ||
                                appointment?.hospital?.image?.url ||
                                "/assets/images/alternate/alt-hospital.png"
                              }
                              className="img-fluid rounded"
                              alt="User Image"
                            />
                          </div>
                          <div className="right-details">
                            <p className="fs-6 lh-1 fst-normal">
                              {appointment?.polyclinic?.name ||
                                appointment?.nursing_home?.name ||
                                appointment?.hospital?.name}
                            </p>
                            <p className="fs-6 fst-italic lh-1">
                              {appointment?.polyclinic?.city ||
                                appointment?.nursing_home?.city ||
                                appointment?.hospital?.city}
                              ,
                              {appointment?.polyclinic?.state ||
                                appointment?.nursing_home?.state ||
                                appointment?.hospital?.state}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body">
                    <p className="fs-5 text-center border-bottom pb-2">
                      Chief Complains
                    </p>
                    <table className="table table-striped mt-4">
                      <thead className="table-primary">
                        <tr>
                          <th>Sl No.</th>
                          <th scope="col">Description</th>
                          <th scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chiefComplaintsLength === 0 ? (
                          <>
                            <tr>
                              <td
                                colSpan={3}
                                className="text-danger text-center"
                              >
                                No Records Found !!
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            {appointment?.chiefComplaints.map(
                              (items, index) => (
                                <tr key={index}>
                                  <td className="fw-bold">#{index + 1}</td>
                                  <td>{items?.description}</td>
                                  <td>{items?.duration} Days</td>
                                </tr>
                              )
                            )}
                          </>
                        )}
                      </tbody>
                    </table>
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
            specialty={specialty}
            bloodGroup={bloodGroup}
          />
        </div>
        <div style={{ display: "none" }}>
          <AssesmentReport
            ref={assesmentRef}
            appointments={appointment}
            specialty={specialty}
            bloodGroup={bloodGroup}
          />
        </div>
        <div style={{ display: "none" }}>
          <ExaminationReport
            ref={examinationRef}
            appointments={appointment}
            specialty={specialty}
            bloodGroup={bloodGroup}
          />
        </div>
      </div>
    </>
  );
};

export default withAuth(View);
