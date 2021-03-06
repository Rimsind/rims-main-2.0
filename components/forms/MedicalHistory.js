import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import {
  pastMedicalHistory,
  diagnostic_tests,
  frequencyList,
} from "pages/api/pastMedicalHistoryData";

const MedicalHistory = ({
  medicalHistory,
  patientId,
  updated_at,
  gender,
  past_medication_history,
  past_surgical_history,
}) => {
  const { auth } = useAuth();
  var today = new Date();
  var maxDay = today.getDate();
  var maxMonth = today.getMonth() + 1;
  var maxYear = today.getFullYear();
  if (maxDay < 10) {
    var newMaxDay = "0" + maxDay;
  } else {
    var newMaxDay = maxDay;
  }
  if (maxMonth < 10) {
    var newMaxMonth = "0" + maxMonth;
  } else {
    var newMaxMonth = maxMonth;
  }
  const maxDate = maxYear + "-" + newMaxMonth + "-" + newMaxDay;
  const [loading, setLoading] = useState(false);

  const [surgery, setSurgery] = useState();
  const [surgeryDate, setSurgeryDate] = useState();
  const [allSurgery, setAllSurgery] = useState(
    past_surgical_history?.concat([])
  );

  const addNewSurgery = async () => {
    if (!!surgery && !!surgeryDate) {
      setAllSurgery((oldItems) => {
        return [
          ...oldItems,
          {
            name: surgery,
            date: surgeryDate,
          },
        ];
      });
      setSurgery(""), setSurgeryDate("");
    }
  };
  const deleteSurgery = (index) => {
    const id = index;
    setAllSurgery((oldItems) => {
      return oldItems.filter((items, index) => {
        return id !== index;
      });
    });
  };

  const [medicineName, setMedicineName] = useState();
  const [dose, setDose] = useState();
  const [startDate, setStartDate] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [route, setRoute] = useState();
  const [frequency, setFrequency] = useState();
  const [sideEffect, setSideEffect] = useState();
  const [ifYes, setIfYes] = useState();
  const [allMedicaton, setAllMediation] = useState(
    past_medication_history?.concat([])
  );

  const addNewMedicine = async () => {
    if (!!medicineName && !!dose && !!type) {
      setAllMediation((oldItems) => {
        return [
          ...oldItems,
          {
            medicineName: medicineName,
            dose: dose,
            startDate: startDate,
            status: status,
            type: type,
            route: route,
            frequency: frequency,
            sideEffect: sideEffect,
            ifYes: ifYes,
          },
        ];
      });
    } else {
      toast("Please enter all the fields ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,

        transition: Slide,
      });
    }
  };

  const deleteMedication = (index) => {
    const id = index;
    setAllMediation((oldItems) => {
      return oldItems.filter((items, index) => {
        return id !== index;
      });
    });
  };

  const { register, handleSubmit } = useForm();
  const updateMedicalHistory = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        medicalHistory: {
          ...medicalHistory,
          past_symptoms: data.past_symptoms?.toString(),
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
        past_surgical_history: allSurgery,
      };

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      toast.success("Medical History Updated", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return result, setLoading(false);
    } catch (err) {
      console.log(err.message);
      toast.error("Something Went Wrong Try Again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setLoading(false);
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
                      name="past_symptoms"
                      value={item}
                      {...register("past_symptoms")}
                      defaultChecked={
                        !!medicalHistory &&
                        !!medicalHistory.past_symptoms &&
                        makeArrfromString(
                          medicalHistory.past_symptoms
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
                    <p className="space-x-4">??? Pelvic Inflammatory Disease</p>
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
                    <p className="space-x-4">??? Trouble with Period</p>
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
                    <p className="space-x-4">??? Complicated Pregnancies</p>
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
                    <p className="space-x-4">??? Pregnant</p>
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
                    <p className="space-x-4">??? Endometriosis</p>
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
                    <p className="space-x-4">??? Any Other</p>
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
            Surgical History ??? Please list any surgeries you had, and if known
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
                      max={maxDate}
                      value={surgeryDate}
                      onChange={(e) => setSurgeryDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 text-end mt-2 mt-md-0 mt-lg-0">
                <span className="btn btn-primary" onClick={addNewSurgery}>
                  Add Items
                </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allSurgery?.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-danger text-center">
                      No Previous Records Found !!
                    </td>
                  </tr>
                ) : (
                  <>
                    {allSurgery?.map((item, index) => (
                      <tr key={index}>
                        <td>#{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>
                          <div className="delete-table-icon">
                            <button
                              className="btn"
                              onClick={() => deleteSurgery(index)}
                            >
                              <i className="fad fa-trash"></i>
                            </button>
                          </div>
                        </td>
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
          Medications & Allergies ??? please check or list all medications or
          allergies:
        </h3>
        <div
          className="gen-form mb-3"
          style={{ backgroundColor: "aliceblue", padding: "15px" }}
        >
          <div className="row justify-centent-between align-items-start mb-3 mt-3">
            <div className="col-md-4 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label> Type:</label>
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
            <div className="col-md-8 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label>Medicine Name:</label>
              <input
                type="text"
                className="form-control"
                name="MedicineName"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label>Dose (MG/MCG):</label>
              <input
                type="text"
                className="form-control"
                name="MedicineName"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label> Start Date:</label>
              <input
                type="date"
                className="form-control"
                name="MedicineName"
                max={maxDate}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-centent-between align-items-start mb-3 mt-3">
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label> Status:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Select Status</option>
                <option value="Continue">Continue</option>
                <option value="End">End</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label> Frequency:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setFrequency(e.target.value)}
              >
                {frequencyList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label>Route:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setRoute(e.target.value)}
              >
                <option>Select Route</option>
                <option value="Capsule">Capsule</option>
                <option value="Injection">Injection</option>
                <option value="Other Way">Other Way</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-3 col-xxl-3 col-xl-3 mb-0 mb-md-3 mb-lg-0 mb-xl-0">
              <label>Any Side Effect:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSideEffect(e.target.value)}
              >
                <option>Select Effects</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row justify-centent-between align-items-center mb-3 mt-3">
            <div className="col-md-12 col-lg-12 col-xxl-12 col-xl-12">
              <label htmlFor="">If Yes:</label>
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
            <span className="btn btn-primary" onClick={addNewMedicine}>
              Add Items
            </span>
          </div>
        </div>

        <div className="table-responsive mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Medicine Dose</th>
                <th scope="col">Start Date</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Route</th>
                <th scope="col">Friquency </th>
                <th scope="col">Any Side Effect</th>
                <th scope="col">If Yes </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allMedicaton?.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-danger text-center">
                    No Previous Records Found !!
                  </td>
                </tr>
              ) : (
                <>
                  {allMedicaton?.map((item, index) => (
                    <tr key={index}>
                      <td>#{index + 1}</td>
                      <td>{item.medicineName}</td>
                      <td>{item.dose}</td>
                      <td>{item.startDate}</td>
                      <td>{item.status}</td>
                      <td>{item.type}</td>
                      <td>{item.route}</td>
                      <td>{item.frequency}</td>
                      <td>{item.sideEffect}</td>
                      <td>{item.ifYes}</td>
                      <td>
                        {" "}
                        <div className="delete-table-icon">
                          <button
                            className="btn"
                            onClick={() => deleteMedication(index)}
                          >
                            <i className="fad fa-trash"></i>
                          </button>
                        </div>
                      </td>
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
