import AuthLayout from "components/layout/AuthLayout";

const OrthoExamination = ({ data }) => {
  return (
    <>
      <div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center bg-info text-light" colSpan="3">
                    Clinical Examination
                  </th>
                </tr>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Test</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr className="text-center">
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="assessment-content mt-4">
            <div className="assessment-title">
              <p className="fs-5 fw-bold">Assessment :</p>
            </div>
            <div className="assessment-info">
              <p className="fs-6">Hello This is Assessment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrthoExamination;

OrthoExamination.getLayout = (OrthoExamination) => (
  <AuthLayout>{OrthoExamination}</AuthLayout>
);
