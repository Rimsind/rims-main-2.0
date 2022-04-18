import React from "react";

const EPrescription = () => {
  return (
    <>
      <div className="card">
        <div class="card-body">
          <ul class="nav nav-tabs nav-tabs-bottom">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#bottom-justified-tab11"
                data-bs-toggle="tab"
              >
                Medicine
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab12"
                data-bs-toggle="tab"
              >
                Test
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab13"
                data-bs-toggle="tab"
              >
                Precaution & Safety Measures
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab14"
                data-bs-toggle="tab"
              >
                Food & Fluid Restriction
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab15"
                data-bs-toggle="tab"
              >
                Patient Education
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab16"
                data-bs-toggle="tab"
              >
                Other Treatment Referral
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#bottom-justified-tab17"
                data-bs-toggle="tab"
              >
                Set Follow Time Period
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane show active" id="bottom-justified-tab11">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
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
                      // onChange={(e) => setMedicineName(e.target.value)}
                    >
                      <option selected>Select a medicine</option>
                      {/* {medicineNameList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))} */}
                    </select>
                  </div>
                  <div className="col-md-1">
                    <label className="form-label">MG</label>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="500"
                      // onChange={(e) => setMg(e.target.value)}
                      // value={mg}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Route</label>
                    <select
                      className="form-select "
                      aria-label="Default select example"
                      // onChange={(e) => setRoute(e.target.value)}
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
                      // onChange={(e) => setDuration(e.target.value)}
                      // value={duration}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Frequency</label>
                    <select
                      className="form-select "
                      aria-label="Default select example"
                      // onChange={(e) => setFrequency(e.target.value)}
                    >
                      {/* {frequencyList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))} */}
                    </select>
                  </div>
                  <div className="col-md-4 mt-2">
                    <label className="form-label">Reason</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the reason"
                      // onChange={(e) => setReasons(e.target.value)}
                      // value={reasons}
                    />
                  </div>
                  <div className="col-md-4 mt-2">
                    <label className="form-label">Instruction</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the reason"
                      // onChange={(e) => setInstructions(e.target.value)}
                      // value={instructions}
                    />
                  </div>
                  <div className="col-md-3 mt-2">
                    <label className="form-label">Side-Effects</label>
                    <input
                      type="text"
                      className="form-control"
                      // onChange={(e) => setSideEffects(e.target.value)}
                      // value={sideEffects}
                    />
                  </div>
                  <div className="col-md-1">
                    <div className="prescription-add-btn">
                      <span
                        className="btn btn-primary prescription-btn"
                        //   onClick={addMedicine}
                      >
                        Add
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rfa-gen-form-data-table mt-4 bg-white p-2 border-bottom border-2 border-dark py-4">
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
                    {/* <tbody>
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
                {!!eprescription?.medicine ||
                eprescription?.medicine === 0 ||
                medicineList.length === 0 ? (
                  <>
                    <tr>
                      <td colSpan={9} className="text-center text-danger">
                        No records found!!
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {" "}
                    {eprescription?.medicine.map((item, index) => (
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
                    ))}
                  </>
                )}
              </tbody> */}
                    <tbody>
                      <tr>
                        <td colSpan={9} className="text-center text-danger">
                          No records found!!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab12">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Test</p>
                <div className="row align-items-end">
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Test</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setTestName(e.target.value)}
                      >
                        {/* {testNameList?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Specification:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        // onChange={(e) => setSpecification(e.target.value)}
                      >
                        {/* {Specification?.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="prescription-add-btn text-end">
                      <span
                        className="btn btn-primary"
                        //   onClick={addTest}
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
                          <th scope="col">Test Name</th>
                          <th scope="col">Specification</th>
                        </tr>
                      </thead>
                      {/* <tbody>
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
                        {testList.length != 0 ? (
                          <>
                            {eprescription?.test.map((item, index) => (
                              <tr key={index}>
                                <th scope="row">
                                  <i className="fas fa-trash text-danger"></i>
                                </th>
                                <td>{item?.name}</td>
                                <td>{item?.specification}</td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <tr>
                            <td colSpan={3} className="text-center text-danger">
                              *No previous records found!!
                            </td>
                          </tr>
                        )}
                      </tbody> */}
                      <tbody>
                        <tr>
                          <td colSpan={3} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab13">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Precaution & Safety Measures</p>
                <div className="row align-items-end">
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Options</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        //   onChange={(e) => setPrecaution(e.target.value)}
                      >
                        <option selected>Select</option>
                        {/* {precautionList?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Others</label>
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others:"
                        //   onChange={(e) => setPrecaution(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="prescription-add-btn text-end">
                      <span
                        className="btn btn-primary"
                        // onClick={addPrecaution}
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
                          <th scope="col">Precautions</th>
                        </tr>
                      </thead>
                      {/* <tbody>
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
                      {eprescription?.safetyMeasures ? (
                        <tr>
                          <td>
                            <i className="fas fa-trash text-danger"></i>
                          </td>
                          <td>{eprescription?.safetyMeasures}</td>
                        </tr>
                      ) : (
                        <>
                          <tr>
                            <td colSpan={2} className="text-center text-danger">
                              *No previous records found!!
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody> */}
                      <tbody>
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab14">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Food & Fluid Restriction</p>
                <div className="row align-items-end">
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Options</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        //   onChange={(e) => setPatientRestriction(e.target.value)}
                      >
                        <option selected>Select</option>
                        {/* {restriction?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Others</label>
                      <input
                        type="text"
                        className="form-control"
                        name="patientRestriction"
                        placeholder="Other Restrictions"
                        //   onChange={(e) => setPatientRestriction(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="prescription-add-btn text-end">
                      <span
                        className="btn btn-primary"
                        //   onClick={addPatientRestriction}
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
                      {/* <tbody>
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
                      {eprescription?.restrictions ? (
                        <tr>
                          <td>
                            <i className="fas fa-trash text-danger"></i>
                          </td>
                          <td>{eprescription?.restrictions}</td>
                        </tr>
                      ) : (
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      )}
                    </tbody> */}
                      <tr>
                        <td colSpan={2} className="text-center text-danger">
                          *No previous records found!!
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab15">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Patient Education</p>
                <div className="row align-items-end">
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Options</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        //   onChange={(e) => setPatientEducation(e.target.value)}
                      >
                        <option selected>Select</option>
                        {/* {pEducation?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Others</label>
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others"
                        //   onChange={(e) => setPatientEducation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="prescription-add-btn text-end">
                      <span
                        className="btn btn-primary"
                        //   onClick={addPatientEducation}
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
                      {/* <tbody>
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
                      {eprescription?.patient_education ? (
                        <tr>
                          <td>
                            <i className="fas fa-trash text-danger"></i>
                          </td>
                          <td>{eprescription?.patient_education}</td>
                        </tr>
                      ) : (
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      )}
                    </tbody> */}
                      <tbody>
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab16">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Other Treatment Referral</p>
                <div className="row align-items-end">
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Options</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        //   onChange={(e) => setReferral(e.target.value)}
                      >
                        <option select>Select</option>
                        {/* {treatmentList?.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="items">
                      <label className="form-label">Others</label>
                      <input
                        type="text"
                        className="form-control"
                        name="patientEducation"
                        placeholder="Others"
                        //   onChange={(e) => setReferral(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="prescription-add-btn text-end">
                      <span
                        className="btn btn-primary"
                        //  onClick={addReferral}
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
                          <th scope="col">Treatment</th>
                        </tr>
                      </thead>
                      {/* <tbody>
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
                      ))}
                      {eprescription?.treatmentreferral ? (
                        <tr>
                          <td>
                            <i className="fas fa-trash text-danger"></i>
                          </td>
                          <td>{eprescription?.treatmentreferral}</td>
                        </tr>
                      ) : (
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      )}
                    </tbody> */}
                      <tbody>
                        <tr>
                          <td colSpan={2} className="text-center text-danger">
                            *No previous records found!!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div class="tab-pane" id="bottom-justified-tab17">
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 border-end border-2">
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
                          {/* <tbody>
                      {assesment?.diagnosis ? (
                        <>
                          {" "}
                          {assesment?.diagnosis.map((items, index) => (
                            <tr key={index}>
                              <th>#{index + 1}</th>
                              <th scope="col">{items?.description}</th>
                            </tr>
                          ))}
                        </>
                      ) : (
                        
                      )}
                    </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                className="text-center text-danger"
                              >
                                No reconds found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
                          {/* <tbody>
                            {patient?.past_medication_history.length != 0 ? (
                              <>
                                {patient?.past_medication_history?.map(
                                  (items, index) => (
                                    <tr key={index}>
                                      <td className="fw-bold">#{index + 1}</td>
                                      <td>{items?.medicineName}</td>
                                      <td>{items?.dose}</td>
                                      <td>{items?.startDate}</td>
                                      <td>{items?.status}</td>
                                      <td>{items?.type}</td>
                                    </tr>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                               
                              </>
                            )}
                          </tbody> */}
                          <tbody>
                            <tr>
                              <td
                                colSpan={6}
                                className="text-center text-danger"
                              >
                                No records found!!
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form border-bottom border-2 border-dark py-4">
                <p className="fs-5 fw-bold">Set Follow Time Period</p>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <label className="form-label">Date : </label>
                    {/* {eprescription?.followUp_date ? (
                    <span>{eprescription?.followUp_date}</span>
                  ) : (
                    <span
                      className="text-danger"
                      style={{ fontSize: "13px", marginLeft: "5px" }}
                    >
                      No date selected!!
                    </span>
                  )} */}
                    <span
                      className="text-danger"
                      style={{ fontSize: "13px", marginLeft: "5px" }}
                    >
                      No date selected!!
                    </span>

                    <input
                      type="date"
                      className="form-control"
                      name="days"
                      //   min={minDate}
                      // onChange={(e) => setRevisitDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Followup Type</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      // onChange={(e) => setRevisitType(e.target.value)}
                    >
                      <option
                        name="language"
                        //   defaultValue={
                        //     !!eprescription && eprescription?.followUp_type
                        //   }
                      >
                        {/* {!!eprescription && eprescription?.followUp_type
                        ? eprescription?.followUp_type
                        : "Select"} */}
                      </option>
                      <option value="Regular Visit">Regular Visit</option>
                      <option value="Annual Exam">Annual Exam</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="gen-form-btn mt-3 text-end">
                <button
                  className="btn btn-success"
                  //   onClick={submitPrescription}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EPrescription;
