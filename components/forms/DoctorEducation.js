import Link from "next/link";
const DoctorEducation = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="doc-education mb-4">
            <form>
              <div className="row align-items-center">
                <div className="col-3">
                  <label className="mb-2">Degree or Award</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Degree or Award"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <label className="mb-2">Institution Name</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Institution Name"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <label className="mb-2">Receiving Year</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Receiving Year"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary">Add Education</button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-table mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Degree or Award</th>
                  <th scope="col">Institution Name</th>
                  <th scope="col">Receiving Year</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>MBBS</td>
                  <td>XYZ Collage</td>
                  <td>2002</td>
                  <td className="text-end">
                    <div className="table-action">
                      <Link href="#">
                        <a className="btn btn-sm bg-danger-light">
                          <i className="far fa-trash-alt"></i> Delete
                        </a>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorEducation;
