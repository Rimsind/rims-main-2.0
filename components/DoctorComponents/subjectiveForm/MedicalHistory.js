import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import { useState } from "react";

const MedicalHistory = ({ medicalHistory, patientId, updated_at, gender }) => {
  //
  const surgicalDataLength = medicalHistory?.surgicalHistory.length;
  const medicineDataLength = medicalHistory?.medicationHistory.length;
  //
  const { auth } = useAuth();
  //
  const [surgery, setSurgery] = useState();
  const [surgeryDate, setSurgeryDate] = useState();
  const [loading, setLoading] = useState(false);
  //
  const submitSurgery = async () => {
    const payload = {
      medicalHistory: {
        ...medicalHistory,
        surgicalHistory: [
          ...medicalHistory?.surgicalHistory,
          {
            name: surgery,
            date: surgeryDate,
          },
        ],
      },
    };
    const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    const result = res.data;
    alert("Surgical History added Succesfully");
    return result, setLoading(false), setSurgery(""), setSurgeryDate("");
  };
  //
  const [medicineName, setMedicineName] = useState();
  const [dose, setDose] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [route, setRoute] = useState();
  const [frequency, setFrequency] = useState();
  const [sideEffect, setSideEffect] = useState();
  const [ifYes, setIfYes] = useState();

  const submitMedicine = async () => {
    const payload = {
      medicalHistory: {
        ...medicalHistory,
        medicationHistory: [
          ...medicalHistory?.medicationHistory,
          {
            medicineName: medicineName,
            dose: dose,
            startData: date,
            status: status,
            type: type,
            route: route,
            frequency: frequency,
            sideEffect: sideEffect,
            ifYes: ifYes,
          },
        ],
      },
    };

    const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    const result = res.data;
    alert("Medical History Updated Succesfully");
    return result, setMedicineName(""), setDose(""), setDate(""), setIfYes("");
  };

  const { register, handleSubmit } = useForm();
  const updateMedicalHistory = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        medicalHistory: {
          ...medicalHistory,
          past_medical_history: data.past_medical_history?.toString(),
          diagnostic_tests: data.diagnostic_tests?.toString(),
          allergies: data.allergies,
          vactions: data.vactions,
          pastMedicalHistoryForWomen: {
            pelvicDisease: data.pelvicDisease,
            endometriosis: data.endometriosis,
            periodTrouble: data.periodTrouble,
            isPregnant: data.isPregnant,
            complicatedPregnancy: data.complicatedPregnancy,
            other: data.other,
          },
        },
      };

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      alert("Medical History Updated Succesfully");
      return result, setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
  };

  const pastMedicalHistory = [
    "No past medical history",
    "Diabetes",
    "Genetic Disease",
    "Pacemaker",
    "AIDS",
    "Anemia",
    "Emphysema",
    "Kidney Disease",
    "Parkinson’s Disease",
    "Asthma",
    "Epilepsy/Seizures",
    "Fractures",
    "Liver Disease",
    "Prostate Disease",
    "Arthritis",
    "Glaucoma",
    "Low Blood Pressure",
    "Skin Disorder",
    "Blood Disorder",
    "Heart Attack",
    "Lung Disorder",
    "CVA/Stroke",
    "Broken Bones",
    "Heart Disease",
    "Lyme’s Disease",
    "Thyroid Disorder",
    "Circulation Problems",
    "Hepatitis",
    "Macular Degeneration",
    "Ulcers (Stomach)",
    "Cancer",
    "Head Injury",
    "Multiple Sclerosis",
    "Repeated Infections",
    "Cystic Fibrosis",
    "High Blood Pressure",
    "Osteoporosis",
    "Depression",
    "High Cholesterol",
    "Muscular Dystrophy",
    "Restless Leg Syndrome",
    "Fibromyalgia",
    "Migraine",
    "Others",
  ];

  const diagnostic_tests = [
    "No Diagnostic Testing",
    "Bronchoscopy",
    "EMG/Nerve Conduction",
    "Stool Test",
    "Angiogram",
    "CT scan",
    "Mammogram",
    "Stress Test",
    "Arthroscopy",
    "Ultrasound",
    "MRI",
    "Urine Test",
    "Biopsy",
    "Echocardiogram",
    "Pap smear",
    "X - Ray",
    "Blood Test",
    "EEG",
    "Pulmonary function Test",
    "Bone Scan",
    "EKG",
    "Spinal Tap",
    "Others",
  ];

  const frequencyList = [
    "Select",
    "DAILY",
    " 2 TIMES A WEEK",
    "2 TIMES DAILY",
    "3 TIMES A WEEK",
    "3 TIMES DAILY",
    "4 TIMES A WEEK",
    "4 TIMES DAILY",
    "AS DIRECTED",
    "AS NEEDED",
    "BED TIME",
    "EVERY 12 HOURS",
    "EVERY 2 HOURS",
    "EVERY 4 HOURS",
    "EVERY 6 HOURS",
    "EVERY 72 HOURS",
    "EVERY 8 HOURS",
    "EVERY AM",
    "EVERY OTHER DAY",
    "EVERY OTHER WEEK",
    "EVERY PM",
    "HOURLY",
    "ENTERMITTENT",
    "MONTHLY",
    "WEEKLY",
    "O2- CONTINUOUS",
    "O2- NIGHTLY",
    "O2- PRN",
  ];
  return (
    <>
      <form onSubmit={handleSubmit(updateMedicalHistory)}>
        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <h3 className="fs-6 fs-bold text-dark">
            Past medical history - Please check if you have or had any of the
            following:
          </h3>
          <div className="row justify-content-between align-items-center">
            {pastMedicalHistory.map((item, index) => (
              <div className="col-md-3 col-sm-3" key={index}>
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="past_medical_history"
                      value={item}
                      {...register("past_medical_history")}
                      defaultChecked={
                        !!medicalHistory &&
                        !!medicalHistory?.past_medical_history &&
                        makeArrfromString(
                          medicalHistory?.past_medical_history
                        ).includes(item)
                      }
                    />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <p className="space-x-4">{item}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
        {gender === "Female" ? (
          <div
            className="gen-form mb-3"
            style={{ borderBottom: "1px solid #bbbaba" }}
          >
            <h3 className="fs-6 fs-bold text-dark mb-3">
              Past medical history - For Women Only:
            </h3>
            <div className="row justify-content-between align-items-start">
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Pelvic Inflammatory Disease</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pelvicDisease"
                          value="Yes"
                          {...register("pelvicDisease")}
                          defaultChecked={
                            !!medicalHistory &&
                            !!medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .pelvicDisease === "Yes"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pelvicDisease"
                          value="No"
                          {...register("pelvicDisease")}
                          defaultChecked={
                            !!medicalHistory &&
                            !!medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .pelvicDisease === "No"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Trouble with Period</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="periodTrouble"
                          value="Yes"
                          {...register("periodTrouble")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .periodTrouble === "Yes"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="periodTrouble"
                          value="No"
                          {...register("periodTrouble")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .periodTrouble === "No"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Complicated Pregnancies</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="complicatedPregnancy"
                          value="Yes"
                          {...register("complicatedPregnancy")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .complicatedPregnancy === "Yes"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="complicatedPregnancy"
                          value="No"
                          {...register("complicatedPregnancy")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .complicatedPregnancie === "No"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Pregnant</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isPregnant"
                          value="Yes"
                          {...register("isPregnant")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .isPregnant === "Yes"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isPregnant"
                          value="No"
                          {...register("isPregnant")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .isPregnant === "No"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Endometriosis</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="endometriosis"
                          value="Yes"
                          {...register("endometriosis")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .endometriosis === "Yes"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">Yes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="endometriosis"
                          value="No"
                          {...register("endometriosis")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.pastMedicalHistoryForWomen &&
                            medicalHistory.pastMedicalHistoryForWomen
                              .endometriosis === "No"
                          }
                        />
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <p className="space-x-4">No</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6" {...register("other")}>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <p className="space-x-4">☆ Any Other</p>
                  </div>
                  <div className="col-md-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="other"
                      placeholder=""
                      defaultValue={
                        !!medicalHistory &&
                        !!medicalHistory.pastMedicalHistoryForWomen
                          ? medicalHistory.pastMedicalHistoryForWomen.other
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <h3 className="fs-6 fs-bold text-dark">
            Surgical History – Please list any surgeries you had, and if known
            include dates:
          </h3>
          <div
            className="gen-form mb-3 mt-3"
            style={{ backgroundColor: "aliceblue", padding: "15px" }}
          >
            <div className="row justify-centent-between align-items-center">
              <div className="col-md-1 col-lg-1 col-xl-1 mb-2 mb-md-0 mb-lg-0">
                Title:
              </div>
              <div className="col-md-3 col-lg-5 col-xl-5 mb-2 mb-md-0 mb-lg-0">
                <input
                  type="text"
                  className="form-control"
                  name="surgery"
                  value={surgery}
                  onChange={(e) => setSurgery(e.target.value)}
                />
              </div>
              <div className="col-md-5 col-lg-4 col-xl-4">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3 col-lg-3 col-xl-3 mb-2 mb-md-0 mb-lg-0">
                    Date:
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-9 mb-2 mb-md-0 mb-lg-0">
                    <input
                      type="date"
                      className="form-control"
                      name="surgeryDate"
                      value={surgeryDate}
                      onChange={(e) => setSurgeryDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 text-end mt-2 mt-md-0 mt-lg-0">
                <span className="btn btn-primary" onClick={submitSurgery}>
                  Add Items
                </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {surgicalDataLength === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-danger text-center">
                      No Previous Records Found !!
                    </td>
                  </tr>
                ) : (
                  <>
                    {medicalHistory?.surgicalHistory?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="delete-table-icon">
                            <button className="btn rounded-circle">
                              <i className="fad fa-trash"></i>
                            </button>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <h3 className="fs-6 fs-bold text-dark">
            Diagnostic Test/Measures - within the past year, have you had any of
            the following (Check all that apply):
          </h3>
          <div className="row justify-centent-between align-items-start">
            <div className="col-md-12">
              <div className="row">
                {diagnostic_tests.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="diagnostic_tests"
                          value={item}
                          {...register("diagnostic_tests")}
                          defaultChecked={
                            !!medicalHistory &&
                            medicalHistory.diagnostic_tests &&
                            makeArrfromString(
                              medicalHistory.diagnostic_tests
                            ).includes(item)
                          }
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3 className="fs-6 fs-bold text-dark">
          Medications & Allergies – please check or list all medications or
          allergies:
        </h3>
        <div
          className="gen-form mb-3"
          style={{ backgroundColor: "aliceblue", padding: "15px" }}
        >
          <div className="row justify-centent-between align-items-start mb-3 mt-3">
            <div className="col-md-4 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-4 col-lg-4 col-xxl-4 col-xl-4">
                  Type:
                </div>
                <div className="col-md-8 col-lg-8 col-xxl-8 col-xl-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected>Select Types</option>
                    <option value="Prescribed">Prescribed</option>
                    <option value="Non-Prescribed">Non-Prescribed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-4 col-lg-6 col-xxl-6 col-xl-6">
                  Medicine Name:
                </div>
                <div className="col-md-8 col-lg-6 col-xxl-6 col-xl-6">
                  <input
                    type="text"
                    className="form-control"
                    name="MedicineName"
                    value={medicineName}
                    onChange={(e) => setMedicineName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-8 col-lg-8 col-xxl-8 col-xl-8">
                  Medicine Dose (MG/MCG):
                </div>
                <div className="col-md-4 col-lg-4 col-xxl-4 col-xl-4">
                  <input
                    type="text"
                    className="form-control"
                    name="MedicineName"
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-4 col-lg-4 col-xxl-4 col-xl-4">
                  Start Date:
                </div>
                <div className="col-md-8 col-lg-8 col-xxl-8 col-xl-8">
                  <input
                    type="date"
                    className="form-control"
                    name="MedicineName"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-centent-between align-items-start mb-3 mt-3">
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-3 col-lg-4 col-xxl-4 col-xl-4">
                  Status:
                </div>
                <div className="col-md-9 col-lg-8 col-xxl-8 col-xl-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option selected>Select Status</option>
                    <option value="Continue">Continue</option>
                    <option value="End">End</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-4 col-lg-6 col-xxl-6 col-xl-6">
                  Friquency:
                </div>
                <div className="col-md-8 col-lg-6 col-xxl-6 col-xl-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    {frequencyList.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-3 col-lg-4 col-xxl-4 col-xl-4">
                  Route:
                </div>
                <div className="col-md-9 col-lg-8 col-xxl-8 col-xl-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setRoute(e.target.value)}
                  >
                    <option selected>Select Route</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Injection">Injection</option>
                    <option value="Other Way">Other Way</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <div className="row justify-centent-between align-items-center">
                <div className="col-md-6 col-lg-6 col-xxl-6 col-xl-6">
                  Any Side Effect:
                </div>
                <div className="col-md-6 col-lg-6 col-xxl-6 col-xl-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setSideEffect(e.target.value)}
                  >
                    <option selected>Select Effects</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-centent-between align-items-center mb-3 mt-3">
            <div className="col-md-2 col-lg-1 col-xxl-1 col-xl-1">If Yes:</div>
            <div className="col-md-10 col-lg-11 col-xxl-11 col-xl-11">
              <input
                type="text"
                className="form-control"
                name="MedicineName"
                value={ifYes}
                onChange={(e) => setIfYes(e.target.value)}
              />
            </div>
          </div>
          <div className="text-end">
            <span className="btn btn-primary" onClick={submitMedicine}>
              Add Items
            </span>
          </div>
        </div>

        <div className="table-responsive mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Medicine Dose</th>
                <th scope="col">Start Date</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Route</th>
                <th scope="col">Friquency </th>
                <th scope="col">Any Side Effect</th>
                <th scope="col">If Yes </th>
              </tr>
            </thead>
            <tbody>
              {medicineDataLength === 0 ? (
                <tr>
                  <td colSpan="9" className="text-danger text-center">
                    No Previous Records Found !!
                  </td>
                </tr>
              ) : (
                <>
                  {medicalHistory?.medicationHistory?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="delete-table-icon">
                          <button className="btn rounded-circle">
                            <i className="fad fa-trash"></i>
                          </button>
                        </div>
                      </td>
                      <td>{item.medicineName}</td>
                      <td>{item.dose}</td>
                      <td>{item.startDate}</td>
                      <td>{item.status}</td>
                      <td>{item.type}</td>
                      <td>{item.route}</td>
                      <td>{item.frequency}</td>
                      <td>{item.sideEffect}</td>
                      <td>{item.ifYes}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <h3 className="fs-6 fs-bold text-dark">Allergies</h3>
            <p className="space-x-4">Known allergies to date</p>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="allergies"
              placeholder=""
              {...register("allergies")}
              defaultValue={
                !!medicalHistory && !!medicalHistory.allergies
                  ? medicalHistory.allergies
                  : ""
              }
            />
          </div>
        </div>
        <div className="row mb-3" style={{ borderBottom: "1px solid #bbbaba" }}>
          <div className="col-md-4">
            <h3 className="fs-6 fs-bold text-dark">Vaccination</h3>
            <p className="space-x-4">Known Vaccine to date</p>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="vactions"
              placeholder=""
              defaultValue={
                !!medicalHistory && !!medicalHistory.vactions
                  ? medicalHistory.vactions
                  : ""
              }
              {...register("vactions")}
            />
          </div>
        </div>
        <div className="gen-form-soft-button">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <p className="text-info">Last Updated On : {updated_at}</p>
            </div>
            <div className="col-md-4">
              <div className="right-button" style={{ textAlign: "right" }}>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value={loading ? "Saving..." : "Save Changes"}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
