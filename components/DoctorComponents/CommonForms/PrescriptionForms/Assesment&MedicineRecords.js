const AssesmentAndMedicineRecords = ({ patient, assesment }) => {
  return (
    <>
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
                <tbody>
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
                    <>
                      <tr>
                        <td colSpan={2} className="text-center text-danger">
                          No reconds found!!
                        </td>
                      </tr>
                    </>
                  )}
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
                    <th scope="col">Name</th>
                    <th scope="col">MG</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {patient?.past_medication_history.length != 0 ? (
                    <>
                      {patient?.past_medication_history?.map((items, index) => (
                        <tr key={index}>
                          <td className="fw-bold">#{index + 1}</td>
                          <td>{items?.medicineName}</td>
                          <td>{items?.dose}</td>
                          <td>{items?.startDate}</td>
                          <td>{items?.status}</td>
                          <td>{items?.type}</td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td colSpan={6} className="text-center text-danger">
                          No records found!!
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssesmentAndMedicineRecords;
