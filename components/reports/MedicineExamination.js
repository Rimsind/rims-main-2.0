import AuthLayout from "components/layout/AuthLayout";
const MedicineExamination = ({ data }) => {
  return (
    <>
      <div>
        <div className="rfa-gen-form-data-table mt-4 p-3">
          <div className="row align-items-center border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Skin
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.skin?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Head
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.head?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Eyes
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.eyes?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Ears
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.ears?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Nose
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.nose?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Throat
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.throat?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Neck
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.neck?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Lymph Nodes
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.lymphNodes?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Respiratory, Thorax & Lungs
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.respiratoryThorax?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Cardiovascular
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.cardiovascular?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Gastrointestinal
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.gastrointestinal?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Breasts
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.breasts?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Abdominal
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.Abdominal?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Genitourinary
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.genitourinary?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Rectal
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.rectal?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Peripheral Vascular
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.peripheralVascular?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 border-bottom border-2 border-dark pb-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Neurological
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.neurological?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Hematological
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.hematological?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Endrocrinal
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.endocrinal?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th
                        className="text-center bg-info text-light"
                        colSpan="3"
                      >
                        Psychological & Psychiatric Illness
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.psychological?.map((items, index) => (
                      <tr className="text-center" key={index}>
                        <th>{index + 1}</th>
                        <td>{items?.option}</td>
                        <td>{items?.description}</td>
                      </tr>
                    ))}
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

export default MedicineExamination;

MedicineExamination.getLayout = (MedicineExamination) => (
  <AuthLayout>{MedicineExamination}</AuthLayout>
);
