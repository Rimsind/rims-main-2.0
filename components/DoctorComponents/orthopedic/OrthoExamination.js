import router from "next/router";
import { useState } from "react";
import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import useSWR from "swr";

const categoryList = [
  "Cerical Region",
  "Upper Thoracic",
  "Lower Thoracic",
  "Lumber",
  "Sacral Region",
  "Shoulder Elbow",
  "Wrist",
  "Hand",
  "Pelvis",
  "Hip",
  "Knee",
  "Ankle",
  "Foot",
];

const testList = [
  "Inspection",
  "Palpation",
  "Measurments",
  "Movements",
  "Special Test",
  "Complications",
];
const OrthoExamination = ({ appointmentId }) => {
  const { auth } = useAuth();
  const [category, setCategory] = useState();
  const [test, setTest] = useState();
  const [examination, setExamination] = useState([]);

  const addData = () => {
    setExamination([
      ...examination,
      {
        category: category,
        test: test,
      },
    ]);
  };

  const { data: appointment } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const { register, handleSubmit } = useForm();
  const SubmitForm = async (data, event) => {
    event.preventDefault();
    const payload = {
      orthopedic: {
        assesment: data.assesment,
        examination: examination,
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
    router.push(
      `/doctors/appointments/clinical-examination?id=${appointmentId}`
    );
    return result;
  };
  return (
    <>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="general-information-form">
          <div className="gen-form mt-3">
            <div className="row align-items-center mt-3">
              <div className="col-md-5">
                <div className="items mb-2">
                  <p className="fs-6 fw-bold">Examination Category</p>
                  <label className="form-label">Categories</label>
                  <select
                    className="form-select mb-2"
                    aria-label="Default select example"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option selected>Select Option</option>
                    {categoryList.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Other"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <p className="fs-6 fw-bold">Examination Test</p>
                <label className="form-label">Test:</label>
                <select
                  className="form-select mb-2"
                  aria-label="Default select example"
                  onChange={(e) => setTest(e.target.value)}
                >
                  <option selected>Select Option</option>
                  {testList.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Other"
                />
              </div>
              <div className="col-md-2">
                <div className="prescription-add-btn text-end mt-2">
                  <span className="btn btn-primary" onClick={addData}>
                    Add
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="rfa-gen-form-data-table bg-white p-2 rounded-3">
                  <table className="table table-striped">
                    <thead className="bg-info">
                      <tr>
                        <th className="text-center" colSpan="2" scope="col">
                          Categories
                        </th>
                        <th scope="col">Test</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examination.map((item, index) => (
                        <tr key={index}>
                          <td>X</td>
                          <td>{item.category}</td>
                          <td>{item.test}</td>
                        </tr>
                      ))}
                      {appointment?.orthopedic?.examination.map(
                        (item, index) => (
                          <tr key={index}>
                            <td>*</td>
                            <td>{item.category}</td>
                            <td>{item.test}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="gen-form mt-3">
            <p className="fs-5 fw-bold">Assessment</p>
            <input
              type="text"
              className="form-control"
              placeholder="Others:"
              {...register("assesment")}
              defaultValue={
                !!appointment?.orthopedic &&
                !!appointment?.orthopedic?.assesment
                  ? appointment?.orthopedic?.assesment
                  : ""
              }
            />
          </div>
          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button className="btn btn-success" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrthoExamination;
