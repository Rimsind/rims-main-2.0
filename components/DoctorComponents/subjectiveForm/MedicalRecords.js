import Link from "next/link";
const MedicalRecords = () => {
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div
                className="rfa-gen-form-data-table"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                  marginTop: "10px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Relation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>test1</th>
                      <td>
                        <Link href="#">
                          <a>View</a>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecords;
