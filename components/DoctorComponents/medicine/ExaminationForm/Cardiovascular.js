import { useState } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { useAuth } from "context";

const Cardiovascular = ({ data, appointmentId }) => {
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
        cardiovascular: allData,
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
  const cardiovascular = [
    "No Known heart disease or high blood pressure",
    "No dyspnea",
    "Chest pain palpitation",
    "Jugular venous pressure 1 cm above the sternal angle",
    "Carotid upstrokes brisks",
    "Apical impulse discrete and tapping",
    "A II/VI medium-pitched midsystolic murmur at the 2nd right interspace",
    "Has never had an electrocardiogram (ECG)",
    "With head of examining table raised to 30 degree",
    "Without bruits",
    "Barely palpable in the 5th left interspace",
    "Good S1, S2; no S3 or S4",
    "Does not radiate to the neck",
    "Last blood pressure taken in 1998",
  ];
  return (
    <>
      <div className="section-content pb-3 border-bottom">
        <div className="section-item mt-3">
          <p className="fs-6 fw-bold">Cardiovascular</p>
          <div className="row align-items-center mb-3">
            <div className="col-5">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setOption(e.target.value)}
              >
                <option selected>Select any one</option>
                {cardiovascular.map((items, index) => (
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
                {data?.cardiovascular.map((items, index) => (
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
        <button onClick={submitForm}>Save Changes</button>
      </div>
    </>
  );
};

export default Cardiovascular;
