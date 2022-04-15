import router, { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "context";
import {
  testNameList,
  Specification,
  frequencyList,
  medicineNameList,
  restriction,
  pEducation,
  precautionList,
} from "pages/api/prescriptionData";
import axios from "axios";
import { apiUrl } from "config/api";
import useSWR from "swr";
import { Slide, toast } from "react-toastify";
const Prescription = ({ appointmentId }) => {
  const { auth } = useAuth();

  const { data: appointmentDetails } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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

  const [precaution, setPrecaution] = useState();
  const [allPrecaution, setAllPrecaution] = useState([]);
  const addPrecaution = () => {
    setAllPrecaution((oldItems) => {
      return [...oldItems, precaution];
    });
    setPrecaution("");
  };

  const deletePrecaution = (index) => {
    const id = index;
    setAllPrecaution((oldPrecaution) => {
      return oldPrecaution.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [referral, setReferral] = useState();
  const [allReferral, setAllReferral] = useState([]);
  const addReferral = () => {
    setAllReferral((oldItems) => {
      return [...oldItems, referral];
    });
    setReferral("");
  };
  const deleteReferral = (index) => {
    const id = index;
    setAllReferral((oldReferral) => {
      return oldReferral.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [patientEducation, setPatientEducation] = useState();
  const [patientEducationList, setPatientEducationList] = useState([]);
  const addPatientEducation = () => {
    setPatientEducationList((oldItems) => {
      return [...oldItems, patientEducation];
    });
    setPatientEducation("");
  };

  const deleteEducation = (index) => {
    const id = index;
    setPatientEducationList((oldEducation) => {
      return oldEducation.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [patientRestriction, setPatientRestriction] = useState();
  const [patientRestrictionList, setPatientRestrictionList] = useState([]);

  const addPatientRestriction = () => {
    setPatientRestrictionList((oldItems) => {
      return [...oldItems, patientRestriction];
    });
    setPatientRestriction("");
  };
  const deleteRestriction = (index) => {
    const id = index;
    setPatientRestrictionList((oldRestriction) => {
      return oldRestriction.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [testName, setTestName] = useState();
  const [specification, setSpecification] = useState();
  const [testList, setTestList] = useState([]);

  const addTest = () => {
    setTestList([
      ...testList,
      {
        name: testName,
        specification: specification,
      },
    ]);
  };

  const deleteTest = (index) => {
    const id = index;
    setTestList((oldMedicine) => {
      return oldMedicine.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [medicineName, setMedicineName] = useState();
  const [mg, setMg] = useState();
  const [route, setRoute] = useState();
  const [duration, setDuration] = useState();
  const [frequency, setFrequency] = useState();
  const [reasons, setReasons] = useState();
  const [instructions, setInstructions] = useState();
  const [sideEffects, setSideEffects] = useState();
  const [medicineList, setMedicineList] = useState([]);

  const addMedicine = () => {
    setMedicineList((oldMedicine) => {
      return [
        ...oldMedicine,
        {
          name: medicineName,
          mg: mg,
          route: route,
          duration: duration,
          frequency: frequency,
          reasons: reasons,
          instruction: instructions,
          sideEffects: sideEffects,
        },
      ];
    });

    setSideEffects("");
    setInstructions("");
    setReasons("");
    setMg("");
    setDuration("");
  };

  const deleteMedicine = (index) => {
    const id = index;
    setMedicineList((oldMedicine) => {
      return oldMedicine.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const [revisitDate, setRevisitDate] = useState();
  const [revisitType, setRevisitType] = useState();
  const submitPrescription = async () => {
    const payload = {
      eprescription: {
        ...appointmentDetails.eprescription,
        medicine: medicineList,
        patient_education: patientEducationList.toString(),
        restrictions: patientRestrictionList.toString(),
        safetyMeasures: allPrecaution.toString(),
        treatmentreferral: allReferral.toString(),
        test: testList,
        followUp_date: revisitDate,
        followUp_type: revisitType,
      },
    };

    try {
      const res = await axios.put(
        `${apiUrl}/appointments/${appointmentId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;

      toast.success("E-Prescription Submitted ", {
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
      return result;
    } catch (error) {
      console.log(error);
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
    }
  };

  var today = new Date();

  var day = today.getDate() + 1;
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }
  const minDate = year + "-" + newMonth + "-" + newDay;

  const treatmentList = ["option 1", "option 2", "option 3", "option 4"];
  return (
    <>
      <div className="general-information-form">
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <div className="row align-items-start">
            <div className="col-6 border-end border-2">
              <p className="fs-5 fw-bold">Medical Diagnosis</p>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th>Sl</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentDetails?.assesment?.diagnosis.map(
                        (items, index) => (
                          <tr key={index}>
                            <th>#{index + 1}</th>
                            <th scope="col">{items?.description}</th>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="fs-5 fw-bold">Past Medicine Records</p>
              <div className="rfa-gen-form-data-table bg-white p-2 rounded-3 mt-4">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th>Sl</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">MG</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentDetails?.patient?.past_medication_history?.map(
                        (items, index) => (
                          <tr key={index}>
                            <td>#{index + 1}</td>
                            <td>{items?.medicineName}</td>
                            <td>{items?.dose}</td>
                            <td>{items?.startDate}</td>
                            <td>{items?.status}</td>
                            <td>{items?.type}</td>
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

        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Medicine</p>
          <div className="row justify-content-between align-items-end mt-3">
            <div className="col-md-4">
              <label className="form-label">Medicine Name:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setMedicineName(e.target.value)}
              >
                {medicineNameList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-1">
              <label className="form-label">MG</label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="500"
                onChange={(e) => setMg(e.target.value)}
                value={mg}
              />
            </div>
            <div className="col-md-2">
              <label className="form-label">Route</label>
              <select
                className="form-select "
                aria-label="Default select example"
                onChange={(e) => setRoute(e.target.value)}
              >
                <option selected>Select</option>
                <option value="Oral">Oral</option>
                <option value="Injection">Injection</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Duration (Days)</label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="60"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Frequency</label>
              <select
                className="form-select "
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
            <div className="col-md-4">
              <label className="form-label">Reason</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the reason"
                onChange={(e) => setReasons(e.target.value)}
                value={reasons}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Instruction</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the reason"
                onChange={(e) => setInstructions(e.target.value)}
                value={instructions}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Side-Effects</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSideEffects(e.target.value)}
                value={sideEffects}
              />
            </div>
            <div className="col-md-1">
              <div className="prescription-add-btn">
                <span
                  className="btn btn-primary prescription-btn"
                  onClick={addMedicine}
                >
                  Add
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3 border-bottom border-2 border-dark py-4">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="bg-info">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Medicine Name</th>
                  <th scope="col">MG</th>
                  <th scope="col">Route</th>
                  <th scope="col">Duration (Days)</th>
                  <th scope="col">Frequency</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Instruction</th>
                  <th scope="col">Side Effects</th>
                </tr>
              </thead>
              <tbody>
                {medicineList?.map((item, index) => (
                  <tr key={index}>
                    <td scope="row">
                      <i
                        className="fas fa-times-circle text-danger"
                        onClick={() => {
                          deleteMedicine(index);
                        }}
                      ></i>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.mg}</td>
                    <td>{item?.route}</td>
                    <td>{item?.duration}</td>
                    <td>{item?.frequency}</td>
                    <td>{item?.reasons}</td>
                    <td>{item?.instruction}</td>
                    <td>{item?.sideEffects} </td>
                  </tr>
                ))}
                {appointmentDetails?.eprescription?.medicine.map(
                  (item, index) => (
                    <tr key={index}>
                      <td scope="row">
                        <i className="fas fa-trash text-danger"></i>
                      </td>
                      <td>{item?.name}</td>
                      <td>{item?.mg}</td>
                      <td>{item?.route}</td>
                      <td>{item?.duration}</td>
                      <td>{item?.frequency}</td>
                      <td>{item?.reasons}</td>
                      <td>{item?.instruction}</td>
                      <td>{item?.sideEffects} </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="gen-form mt-3 border-bottom border-2 border-dark py-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6 border-end border-2">
              <p className="fs-5 fw-bold">Test</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Test</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setTestName(e.target.value)}
                    >
                      {testNameList?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Specification:</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setSpecification(e.target.value)}
                    >
                      {Specification?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="prescription-add-btn text-end">
                    <span className="btn btn-primary" onClick={addTest}>
                      Add
                    </span>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Test Name</th>
                        <th scope="col">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testList?.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">
                            <i
                              className="fas fa-times-circle text-danger"
                              onClick={() => {
                                deleteTest(index);
                              }}
                            ></i>
                          </td>
                          <td>{item?.name}</td>
                          <td>{item?.specification}</td>
                        </tr>
                      ))}
                      {appointmentDetails?.eprescription?.test.map(
                        (item, index) => (
                          <tr key={index}>
                            <th scope="row">
                              <i className="fas fa-trash text-danger"></i>
                            </th>
                            <td>{item?.name}</td>
                            <td>{item?.specification}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Precaution & Safety Measures</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Options</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setPrecaution(e.target.value)}
                    >
                      <option selected>Select</option>
                      {precautionList?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Others</label>
                    <input
                      type="text"
                      className="form-control"
                      name="patientEducation"
                      placeholder="Others:"
                      onChange={(e) => setPrecaution(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="prescription-add-btn text-end">
                    <span className="btn btn-primary" onClick={addPrecaution}>
                      Add
                    </span>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Precautions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allPrecaution.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">
                            <i
                              className="fas fa-times-circle text-danger"
                              onClick={() => {
                                deletePrecaution(index);
                              }}
                            ></i>
                          </td>
                          <td>{item}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <i className="fas fa-trash text-danger"></i>
                        </td>
                        <td>
                          {appointmentDetails?.eprescription?.safetyMeasures}
                        </td>{" "}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form mt-3 border-bottom border-2 border-dark py-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6 border-end border-2">
              <p className="fs-5 fw-bold">Food & Fluid Restriction</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Options</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setPatientRestriction(e.target.value)}
                    >
                      <option selected>Select</option>
                      {restriction?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Others</label>
                    <input
                      type="text"
                      className="form-control"
                      name="patientRestriction"
                      placeholder="Other Restrictions"
                      onChange={(e) => setPatientRestriction(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="prescription-add-btn text-end">
                    <span
                      className="btn btn-primary"
                      onClick={addPatientRestriction}
                    >
                      Add
                    </span>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Food & Fluid Restriction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientRestrictionList.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">
                            <i
                              className="fas fa-times-circle text-danger"
                              onClick={() => {
                                deleteRestriction(index);
                              }}
                            ></i>
                          </td>
                          <td>{item}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <i className="fas fa-trash text-danger"></i>
                        </td>

                        <td>
                          {appointmentDetails?.eprescription?.restrictions}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Patient Education</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Options</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setPatientEducation(e.target.value)}
                    >
                      <option selected>Select</option>
                      {pEducation?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Others</label>
                    <input
                      type="text"
                      className="form-control"
                      name="patientEducation"
                      placeholder="Others"
                      onChange={(e) => setPatientEducation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="prescription-add-btn text-end">
                    <span
                      className="btn btn-primary"
                      onClick={addPatientEducation}
                    >
                      Add
                    </span>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Patient Education</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientEducationList.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">
                            <i
                              className="fas fa-times-circle text-danger"
                              onClick={() => {
                                deleteEducation(index);
                              }}
                            ></i>
                          </td>
                          <td>{item}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <i className="fas fa-trash text-danger"></i>
                        </td>
                        <td>
                          {appointmentDetails?.eprescription?.patient_education}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form mt-3">
          <div className="row align-items-start mt-3">
            <div className="col-md-6 border-end border-2">
              <p className="fs-5 fw-bold">Other Treatment Referral</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Options</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setReferral(e.target.value)}
                    >
                      <option select>Select</option>
                      {treatmentList?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Others</label>
                    <input
                      type="text"
                      className="form-control"
                      name="patientEducation"
                      placeholder="Others"
                      onChange={(e) => setReferral(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="prescription-add-btn text-end">
                    <span className="btn btn-primary" onClick={addReferral}>
                      Add
                    </span>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Treatment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allReferral.map((item, index) => (
                        <tr key={index}>
                          <td scope="row">
                            <i
                              className="fas fa-times-circle text-danger"
                              onClick={() => {
                                deleteReferral(index);
                              }}
                            ></i>
                          </td>
                          <td>{item}</td>
                        </tr>
                      ))}{" "}
                      <tr>
                        <td>
                          {" "}
                          <i className="fas fa-trash text-danger"></i>
                        </td>
                        <td>
                          {appointmentDetails?.eprescription?.treatmentreferral}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Set Follow Time Period</p>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <label className="form-label">Date : </label>
                  <span>
                    {appointmentDetails?.eprescription?.followUp_date}
                  </span>

                  <input
                    type="date"
                    className="form-control"
                    name="days"
                    min={minDate}
                    onChange={(e) => setRevisitDate(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Followup Type</label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                    onChange={(e) => setRevisitType(e.target.value)}
                  >
                    <option
                      name="language"
                      defaultValue={
                        !!appointmentDetails?.eprescription &&
                        appointmentDetails?.eprescription?.followUp_type
                      }
                    >
                      {!!appointmentDetails?.eprescription &&
                      appointmentDetails?.eprescription?.followUp_type
                        ? appointmentDetails?.eprescription?.followUp_type
                        : "Select"}
                    </option>
                    <option value="Regular Visit">Regular Visit</option>
                    <option value="Annual Exam">Annual Exam</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form-btn mt-3 text-center">
          <button className="btn btn-success" onClick={submitPrescription}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Prescription;
