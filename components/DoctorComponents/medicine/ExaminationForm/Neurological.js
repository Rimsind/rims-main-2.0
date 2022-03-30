import { useState } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { useAuth } from "context";
import { Slide, toast } from "react-toastify";
import { neurogenical } from "pages/api/medicineExaminationData";
const Neurological = ({ data, appointmentId }) => {
  const { auth } = useAuth();

  const [option, setOption] = useState();
  const [description, setDescription] = useState();
  const [allData, setAllData] = useState([]);

  const addItems = () => {
    setAllData([
      ...allData,
      {
        option: option,
        description: description,
      },
    ]);
    setDescription("");
  };

  const submitForm = async () => {
    const payload = {
      medicine: {
        ...data,
        neurological: allData,
      },
    };
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
    alert("Form Submitted Succesfully");
    return result;
  };

  return (
    <>
      <div className="section-content pb-3 border-bottom">
        <div className="section-item mt-3">
          <div className="doctor-assessments-form-title text-center py-3 rounded my-4 shadow">
            <p className="fs-4 text-light lh-1 pt-2">Neurological</p>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-5">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setOption(e.target.value)}
              >
                <option selected>Select any one</option>
                {neurogenical.map((items, index) => (
                  <option value={items} key={index}>
                    {items}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-5">
              <div className="items">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="items text-end">
                <button className="btn btn-primary" onClick={addItems}>
                  Add Items
                </button>
              </div>
            </div>
          </div>
          <div className="section-content-table">
            <table className="table table-borderless table-striped">
              <thead className="table-primary">
                <tr>
                  <th className="text-center" colSpan="2">
                    Title
                  </th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((items, index) => (
                  <tr key={index}>
                    <td>x</td>
                    <td>{items?.option}</td>
                    <td>{items?.description}</td>
                  </tr>
                ))}
                {data?.neurological.map((items, index) => (
                  <tr key={index}>
                    <td>*</td>
                    <td>{items?.option}</td>
                    <td>{items?.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="medicine-save-btn text-center">
          <button className="btn btn-primary mt-3" onClick={submitForm}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Neurological;
