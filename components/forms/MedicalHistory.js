import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";

const MedicalHistory = ({ patient }) => {
  const { medicalHistory } = patient;
  const { auth } = useAuth();

  const [surgery, setSurgery] = useState();
  const [surgeryDate, setSurgeryDate] = useState();
  const [allSurgery, setAllSurgery] = useState([]);

  const [loading, setLoading] = useState(false);
  const addSurgicalHistory = () => {
    setAllSurgery([
      ...allSurgery,
      {
        name: surgery,
        date: surgeryDate,
      },
    ]);
    setSurgery("");
    setSurgeryDate("");
  };

  const submitSurgicalHistory = async () => {
    const payload = {
      medicalHistory: {
        surgicalHistory: allSurgery,
      },
    };
    const res = await axios.put(
      `${apiUrl}/patients/${auth.user?.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    alert("Medical History Updated Succesfully");
    return result;
  };

  const [medicineName, setMedicineName] = useState();
  const [dose, setDose] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [route, setRoute] = useState();
  const [frequency, setFrequency] = useState();
  const [sideEffect, setSideEffect] = useState();
  const [ifYes, setIfYes] = useState();
  const [medicineList, setMedicineList] = useState([]);

  const addMedicine = () => {
    setMedicineList([
      ...medicineList,
      {
        medicineName: medicineName,
        dose: dose,
        data: date,
        status: status,
        type: type,
        route: route,
        frequency: frequency,
        sideEffect: sideEffect,
        ifYes: ifYes,
      },
    ]);
    setMedicineName("");
    setDose("");
    setDate("");
    setIfYes("");
  };

  const { register, handleSubmit } = useForm();
  const updateMedicalHistory = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        medicalHistory: {
          past_medical_history: data.past_medical_history?.toString(),
          diagnostic_tests: data.diagnostic_tests?.toString(),
          // allergies: data.allergies,
          // prescription_medications: data.prescription_medications,
          // non_prescription_medications: data.non_prescription_medications?.toString(),
          pastMedicalHistoryForWomen: {
            pelvicDisease: data.pelvicDisease,
            endometriosis: data.endometriosis,
            periodTrouble: data.periodTrouble,
            isPregnant: data.isPregnant,
            complicatedPregnancy: data.complicatedPregnancy,
            other: data.other,
          },
          // surgicalHistory: [
          //   ...medicalHistory.surgicalHistory,
          //   {
          //     name: data.surgicalHistoryTitle,
          //     date: data.surgicalHistoryDate,
          //   },
          // ],
        },
      };
      // console.log(payload, "surgical history");

      const res = await axios.put(
        `${apiUrl}/patients/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
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
              <div className="col-md-3" key={index}>
                <div className="row">
                  <div className="col-md-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="past_medical_history"
                      value={item}
                      {...register("past_medical_history")}
                      defaultChecked={
                        !!medicalHistory &&
                        !!medicalHistory.past_medical_history &&
                        makeArrfromString(
                          medicalHistory.past_medical_history
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
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <h3 className="fs-6 fs-bold text-dark mb-3">
            Past medical history - For Women Only:
          </h3>
          <div className="row justify-content-between align-items-start">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Pelvic Inflammatory Disease</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">No</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Trouble with Period</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">No</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Complicated Pregnancies</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">No</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Pregnant</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">No</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Endometriosis</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                      <p className="space-x-4">No</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" {...register("other")}>
              <div className="row">
                <div className="col-md-6">
                  <p className="space-x-4">☆ Any Other</p>
                </div>
                <div className="col-md-6 mb-3">
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
        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <h3 className="fs-6 fs-bold text-dark">
            Surgical History – Please list any surgeries you had, and if known
            include dates:
          </h3>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#surgicalhistory"
                    >
                      Add New Entry
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="surgicalhistory"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h3 className="fs-6 fs-bold text-dark">
                            Surgical History – Please list any surgeries you
                            had, and if known include dates:
                          </h3>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="gen-form mb-3">
                            <div className="row justify-centent-between align-items-start mb-3">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-1">Title:</div>
                                  <div className="col-md-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="surgery"
                                      value={surgery}
                                      onChange={(e) =>
                                        setSurgery(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="col-md-5">
                                    <div className="row">
                                      <div className="col-md-4">Date:</div>
                                      <div className="col-md-8">
                                        <input
                                          type="date"
                                          className="form-control"
                                          name="surgeryDate"
                                          value={surgeryDate}
                                          onChange={(e) =>
                                            setSurgeryDate(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_btn text-end mb-3">
                            <span
                              className="btn btn-primary"
                              onClick={addSurgicalHistory}
                            >
                              Add
                            </span>
                          </div>
                          <div
                            className="table-responsive"
                            style={{ borderTop: "1px solid #bbbaba" }}
                          >
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Title</th>
                                  <th scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allSurgery.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <span
                            className="btn btn-primary"
                            onClick={submitSurgicalHistory}
                          >
                            Save changes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory?.surgicalHistory?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
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

        <div className="row mb-3">
          <div className="col-md-9">
            <h3 className="fs-6 fs-bold text-dark">
              Medications & Allergies – please check or list all medications or
              allergies:
            </h3>
          </div>
          <div className="col-md-3">
            <div className="text-end">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add New Entry
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="fs-6 fs-bold text-dark">
                      Medications & Allergies – please check or list all
                      medications or allergies:
                    </h3>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="gen-form mb-3">
                      <div className="row justify-centent-between align-items-start mb-3">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-3">Type:</div>
                            <div className="col-md-9">
                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                onChange={(e) => setType(e.target.value)}
                              >
                                <option selected>Select Items</option>
                                <option value="Prescribed">Prescribed</option>
                                <option value="Non-Prescribed">
                                  Non-Prescribed
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-start mb-3">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-3">Medicine Name:</div>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                name="MedicineName"
                                value={medicineName}
                                onChange={(e) =>
                                  setMedicineName(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-4">
                              Medicine Dose (MG/MCG):
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                name="MedicineName"
                                value={dose}
                                onChange={(e) => setDose(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">Start Date:</div>
                                <div className="col-md-8">
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
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-start mb-3">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">Status:</div>
                            <div className="col-md-8">
                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                onChange={(e) => setStatus(e.target.value)}
                              >
                                <option selected>Select Status</option>
                                <option value="Continue">Continue</option>
                                <option value="End">End</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">Friquency:</div>
                            <div className="col-md-8">
                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
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
                      </div>
                      <div className="row justify-centent-between align-items-center mb-3">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">Route:</div>
                            <div className="col-md-8">
                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                onChange={(e) => setRoute(e.target.value)}
                              >
                                <option selected>Select Items</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Injection">Injection</option>
                                <option value="Other Way">Other Way</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-5">Any Side Effect:</div>
                            <div className="col-md-7">
                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                onChange={(e) => setSideEffect(e.target.value)}
                              >
                                <option selected>Select Items</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-centent-between align-items-start mb-3">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-2">If Yes:</div>
                            <div className="col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                name="MedicineName"
                                value={ifYes}
                                onChange={(e) => setIfYes(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add_btn text-end mb-3">
                      <span className="btn btn-primary" onClick={addMedicine}>
                        Add
                      </span>
                    </div>
                    <div
                      className="table-responsive"
                      style={{ borderTop: "1px solid #bbbaba" }}
                    >
                      <table className="table">
                        <thead>
                          <tr>
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
                          {medicineList.map((item, index) => (
                            <tr key={index}>
                              <td>{item.medicineName}</td>
                              <td>{item.dose}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
                              <td>{item.type}</td>
                              <td>{item.route}</td>
                              <td>{item.frequency}</td>
                              <td>{item.sideEffect}</td>
                              <td>{item.ifYes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-responsive mb-3">
          <table className="table">
            <thead>
              <tr>
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
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <h3 className="fs-6 fs-bold text-dark">Vaccination</h3>
            <p className="space-x-4">Known Vaccine to date</p>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="allergies"
              placeholder=""
            />
          </div>
        </div>
        <div className="gen-form-soft-button">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
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
