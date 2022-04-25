import { fetcher, apiUrl } from "config/api";
import useSWR from "swr";

const TimeTableAccordian = ({ data, collaps, heading }) => {
  console.log(data);
  const { data: hospitals } = useSWR(`${apiUrl}/hospitals`, fetcher);
  const { data: polyclinics } = useSWR(`${apiUrl}/polyclinics`, fetcher);
  const { data: nursingHomes } = useSWR(`${apiUrl}/nursing-homes`, fetcher);
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={heading}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collaps}`}
            aria-expanded="false"
            aria-controls={`${collaps}`}
          >
            {data?.polyclinic?.name ||
              data?.nursing_home?.name ||
              data?.hospital?.name}
          </button>
        </h2>
        <div
          id={`${collaps}`}
          className="accordion-collapse collapse"
          aria-labelledby={heading}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="row align-items-center">
              <div className="col-3">
                <label>Polyclinic:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={!!data?.polyclinic ? data?.polyclinic?.id : ""}
                >
                  <option
                    value={!!data?.polyclinic ? data?.polyclinic?.id : ""}
                  >
                    {!!data?.polyclinic ? data?.polyclinic?.name : "-"}
                  </option>
                  {polyclinics?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                {" "}
                <label>Nursing Home:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={
                    !!data?.nursing_home ? data?.nursing_home?.id : ""
                  }
                >
                  <option
                    value={!!data?.nursing_home ? data?.nursing_home?.id : ""}
                  >
                    {!!data?.nursing_home ? data?.nursing_home?.name : "-"}
                  </option>
                  {nursingHomes?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                {" "}
                <label>Hospital:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={!!data?.hospital ? data?.hospital?.id : ""}
                >
                  <option value={!!data?.hospital ? data?.hospital?.id : ""}>
                    {!!data?.hospital ? data?.hospital?.name : "-"}
                  </option>
                  {hospitals?.map((items, index) => (
                    <option key={index} value={items?.id}>
                      {items?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                <label>Fee (₹):</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Fees Ex: ₹300"
                  defaultValue={!!data ? data?.fee : ""}
                />
              </div>
            </div>
            <div className="accrd-table mt-5">
              <table className="table table-bordered border-dark">
                <tbody>
                  {data?.slots?.map((items, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="date"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={!!items?.date ? items?.date : ""}
                          />
                          <label htmlFor="floatingInput">Date</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={
                              !!items?.time_from ? items?.time_from : ""
                            }
                          />
                          <label htmlFor="floatingInput">Start Time</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            defaultValue={
                              !!items?.time_to ? items?.time_to : ""
                            }
                          />
                          <label htmlFor="floatingInput">End Time</label>
                        </div>
                      </td>
                      <td>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Seat"
                            defaultValue={!!items?.seats ? items?.seats : ""}
                          />
                          <label htmlFor="floatingInput">Seat</label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="accrd-acrd-btn">
              <div className="mt-3 text-end">
                <button className="btn bg-danger-light me-2">
                  <i className="fad fa-trash-alt me-2"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTableAccordian;
