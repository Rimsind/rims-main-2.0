import AuthLayout from "components/layout/AuthLayout";

const OrthoExamination = ({ data }) => {
  return (
    <>
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
              {data?.examination?.map((items, index) => (
                <tr className="text-center" key={index}>
                  <th>{index + 1}</th>
                  <td>{items?.category}</td>
                  <td>{items?.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="assessment-content mt-4">
          <div className="assessment-title">
            <p className="fs-5 fw-bold">Assessment :</p>
          </div>
          <div className="assessment-info">
            <p className="fs-6">{data?.assesment}</p>
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
