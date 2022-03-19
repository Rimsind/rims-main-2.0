import router, { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "context";
import { useForm } from "react-hook-form";
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

  const [referral, setReferral] = useState();
  const [allReferral, setAllReferral] = useState([]);
  const addReferral = () => {
    setAllReferral((oldItems) => {
      return [...oldItems, referral];
    });
    setReferral("");
  };

  const [patientEducation, setPatientEducation] = useState();
  const [patientEducationList, setPatientEducationList] = useState([]);
  const addPatientEducation = () => {
    setPatientEducationList((oldItems) => {
      return [...oldItems, patientEducation];
    });
    setPatientEducation("");
  };

  const [patientRestriction, setPatientRestriction] = useState();
  const [patientRestrictionList, setPatientRestrictionList] = useState([]);

  const addPatientRestriction = () => {
    setPatientRestrictionList((oldItems) => {
      return [...oldItems, patientRestriction];
    });
    setPatientRestriction("");
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
    setMedicineList([
      ...medicineList,
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
    ]);

    setSideEffects("");
    setInstructions("");
    setReasons("");
    setMg("");
    setDuration("");
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

      toast.success("Form Submitted Succesfully", {
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

  const testNameList = [
    "Select",
    "amniocentesis",
    "blood analysis",
    "gastric fluid analysis",
    "kidney function test",
    "liver function test",
    "lumbar puncture",
    "malabsorption test",
    "Pap smear",
    "phenolsulfonphthalein test",
    "pregnancy test",
    "prenatal testing",
    "protein-bound iodine test",
    "angiocardiography",
    "angiography",
    "brain scanning",
    "cholecystography",
    "myelography",
    "tomography",
    "complementation test",
    " fluorescence in situ hybridization",
    "preimplantation genetic diagnosis",
  ];

  const Specification = [
    "Select",
    "value1",
    "value2",
    "value3",
    "value4",
    "value5",
    "value6",
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

  const medicineNameList = [
    "Select",
    "Brufen 400 Tablet",
    "Brilinta 90mg Tablet",
    "Azax 500 Tablet",
    "Aldactone Tablet",
    "Axcer  90mg Tablet",
    "Azoran Tablet",
    "Betadine 10% Solution",
    "Betnesol Tablet",
    "Alfoo 10mg Tablet PR",
    "Amaryl 1mg Tablet",
    "AB Phylline Capsule",
    "Almox 500 Capsule",
    "Calpol 500mg Tablet",
    "Ceftum 500mg Tablet",
    "Cyra-D Capsule",
    "Clexane 40mg Injection",
    "Cetrizine Tablet",
    "Concor 5 Tablet",
    "Clexane 60mg Injection",
    "Clindac A 1% Gel",
    "Doxt-SL Capsule",
    "Defcort 6 Tablet",
    "Diamox Tablet",
    "Deplatt A 75 Tablet",
    "Doxolin 400mg Tablet",
    "Bilasure M 20mg/10mg Tablet",
    "Betacap Plus 10 Capsule SR",
    "Benzac AC 5% Gel",
    "Bupron XL 150 Tablet",
    "Emanzen-D Tablet",
    "Eliwel 10mg Tablet",
    "Etizola 0.5 Tablet",
    "Eltroxin 25mcg Tablet",
    "Cipladine Ointment",
    "Cepodem XP 325 Tablet",
    "Cardivas 3.125 Tablet",
    "Cabgolin 0.5 Tablet",
    "Ceftas 200 Tablet",
    "Crina-NCR 10mg Tablet",
    "Ciplox D Eye/Ear Drops",
    "Cardace 2.5 Tablet",
    "Codistar-DX Cough Syrup",
    "CTD 6.25 Tablet",
    "Grilinctus  Syrup",
    "Glycomet-GP 1 Tablet PR",
    "Glycomet-GP 2 Tablet PR",
    "Galvus Met 50mg/500mg Tablet",
    "Glycomet Trio 2 Tablet SR",
    "Glycomet 1gm Tablet",
    "Fabiflu Tablet",
    "Flavedon MR Tablet",
    "Fluguard Tablet",
    "Darolac Sachet",
    "Brimolol Eye Drop",
    "Betnesol Oral Drops",
    "Basalog 100IU/ml Refill Cartridge",
    "Budesal 0.5mg Respules 2ml",
    "Headset Tablet",
    "Hyponat-O 15 Tablet",
    "HCQS 400 Tablet",
    "Hepamerz Granules",
    "Hatric 3 Tablet",
  ];

  const restriction = [
    "NO CONCENTRATED SWEETS",
    "NPO",
    "PEG TUBE",
    "PUREED",
    "PUREED NO ADDED SALT",
    "REGULAR DIET",
    "DIABETIC DIET",
    "ENSURE SUPPLEMENT",
    "FLUID RESTRICTED DIET",
    "FULL LIQUID",
    "GLEUCERNIA SUPPLEMENT 1 CAN 1X DAY AND 1 CAN PRN MISSED MEALS",
    "HEART HEALTHY",
    "HIGH FIBER",
    "AVOID CONCENTRATED SWEETS",
    "CARDIAC DIET",
    "CHOPPED MEAT",
    "CONSISTENT CARBOHYDRATE",
    "CONSISTENT CARBOHYDRATE",
    "HIGH FIBER",
    "HONEY THICKENED LIQUIDS",
    "ISOSOURCE",
    "LIBERALIZED DIABETIS",
    "NAS",
    "NO ORANGES,BANANAS,ORANGE JUICE,MELONS,TOMATOES",
    "LIMIT VIT K",
    "LOW CHOLESTEROL",
    "LOW FAT",
    "LOW SODIUM",
    "MECHANICAL SOFT",
    "NECTAR THICK LIQUIDS",
    "NO CARBS",
    "REGULAR NO ADDED FAT",
    "REGULAR NO ADDED SALT",
    "RENAL DIET",
    "RENAL DIET",
    "THIN LIQUIDS",
    "TWOCAL PER PEG TUBE",
    "Others",
  ];
  const pEducation = [
    "Weight loss",
    "Exercise 45-60 min 4-5/wk",
    "EIOH cessation",
    "smoking cessation",
    "Low fat,low salt,low cholesterol diet",
    "Diabetes",
    "No driving or no activity requiring mental aiemess while on _____",
    "Increase oral fluid",
    "No heavy lifting",
    "Plan of care explained to the patient",
    "RTC or go to ED if signs/symptoms worsens _____ Total time face to face ______ minutes >50% conseling/coordination of care",
    "Others",
  ];
  const precautionList = [
    "SHARPS CONTAINERS",
    "SMOKING IN HOME",
    "SOILED/UNHYGENIC LIVING CONDITIONS",
    "STANDARD PRECAUTIONS",
    "UNIVERSAL PRECAUTIONS , INFECTION PRECAUTIONS , FALL PRECAUTIONS , CLERA PATHWAYS , MEDICATION PRECAUTIONS , SAFEETY PRECAUTIONS , EMERGENCY PLAN",
    "UNSAFE FLOORING",
    "CLUTTERED ENVIRONMENT",
    "CONTACT PRECAUTIONS",
    "COVID PRECAUTIONS",
    "DEMENTIA",
    "DEMETIA WITH WANDERING",
    "DEPRESSIVE DISORDER PRECAUTIONS",
    "DIABETIC PRECAUTIONS",
    "EMERGENCY PLAN",
    "EMERGENCY PRECAUTIONS",
    "FALL PRECAUTIONS",
    "HONEY THICKEND LIQUIDS",
    "INADEQUATE LIGHTING",
    "INDOOR PET",
    "INFECTION PRECAUTION",
    "INSECTS/RODENTS",
    "JOINT PRECAUTIONS",
    "LONG TERM ANTICOAGULATION",
    "Others",
  ];

  const treatmentList = ["option 1", "option 2", "option 3", "option 4"];
  return (
    <>
      <div className="general-information-form">
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <div className="row align-items-start">
            <div className="col-6 border-end border-2">
              <p className="fs-5 fw-bold">Medical Diagnosis</p>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentDetails?.assesment?.diagnosis.map(
                      (items, index) => (
                        <tr key={index}>
                          <th scope="col">{items?.description}</th>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <p className="fs-5 fw-bold">Past Medicine Records</p>
              <div className="rfa-gen-form-data-table bg-white p-2 rounded-3 mt-4">
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">MG</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Type</th>
                      <th scope="col">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentDetails?.past_medication_history?.map(
                      (items, index) => (
                        <tr key={index}>
                          <td>{items?.medicineName}</td>
                          <td>{items?.dose}</td>
                          <td>{items?.startDate}</td>
                          <td>{items?.status}</td>
                          <td>{items?.type}</td>
                          <td>no api</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
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
                className="form-select "
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
          <table className="table table-striped">
            <thead className="bg-info">
              <tr>
                <th scope="col">Sl.</th>
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
                  <th scope="row">
                    <i className="ri-close-circle-line"></i>
                  </th>
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
                    <th scope="row">
                      <i className="ri-close-circle-line"></i>
                    </th>
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
        <div className="gen-form mt-3 border-bottom border-2 border-dark py-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6 border-end border-2">
              <p className="fs-5 fw-bold">Test</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
                    <label className="form-label">Test Name:</label>
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
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testList?.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item?.name}</td>
                        <td>{item?.specification}</td>
                      </tr>
                    ))}
                    {appointmentDetails?.eprescription?.test.map(
                      (item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <i className="ri-close-circle-line"></i>
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
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Precaution & Safety Measures</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
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
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Precautions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPrecaution.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item}</td>
                      </tr>
                    ))}
                    <tr colSpan="2">
                      {appointmentDetails?.eprescription?.safetyMeasures}
                    </tr>
                  </tbody>
                </table>
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
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Food & Fluid Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientRestrictionList.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item}</td>
                      </tr>
                    ))}
                    <tr colSpan="2">
                      {appointmentDetails?.eprescription?.restrictions}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Patient Education</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
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
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientEducationList.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item}</td>
                      </tr>
                    ))}
                    <tr colSpan="2">
                      {appointmentDetails?.eprescription?.patient_education}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="gen-form mt-3">
          <div className="row align-items-center mt-3">
            <div className="col-md-6 border-end border-2">
              <p className="fs-5 fw-bold">Other Treatment Referral</p>
              <div className="row align-items-end">
                <div className="col-4">
                  <div className="items">
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
                <table className="table table-striped">
                  <thead className="bg-info">
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allReferral.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="ri-close-circle-line"></i>
                        </th>
                        <td>{item}</td>
                      </tr>
                    ))}{" "}
                    <tr colSpan="2">
                      {appointmentDetails?.eprescription?.treatmentreferral}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-bold">Set Follow Time Period</p>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="days"
                    value={
                      !!appointmentDetails?.eprescription &&
                      appointmentDetails?.eprescription?.followUp_date
                    }
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
