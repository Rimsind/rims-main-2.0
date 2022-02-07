import Link from "next/link";

const UploadMedicalRecord = () => {
  return (
    <>
      <form>
        <div className="gen-form mb-3">
          <div className="row justify-centent-between align-items-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Title
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="File Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <input
                type="file"
                className="form-control"
                placeholder="Upload your Image"
                name="uploadFile"
                required=""
              />
            </div>
          </div>

          <div
            className="right-button"
            style={{ textAlign: "right", marginTop: "10px" }}
          >
            <input
              type="submit"
              id="submit"
              name="send"
              className="btn btn-primary"
            />
          </div>
        </div>
        <div
          className="rfa-gen-form-data-table mb-3"
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "3px",
            borderBottom: "1px solid #bbbaba",
          }}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">File Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>
                <Link href="/">
                  <a target="_blank">Download</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default UploadMedicalRecord;
