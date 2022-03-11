import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import { useState } from "react";
const FamilyHistory = ({ familyHistory, patientId, updated_at }) => {
  const dataLength = familyHistory?.length;
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const updateFamilyHistory = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        familyHistory: [
          ...familyHistory,
          {
            relation: data.relation,
            age_if_living: data.age_if_living,
            age_if_death: data.age_if_death,
            cause_of_death: data.cause_of_death,
            diseases: data.disease.toString(),
          },
        ],
      };
      // console.log(payload, "payload");
      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      reset();
      alert("FamilyMedical History Updated Succesfully");
      return result, setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const disease = [
    "Anemia",
    "Cancer",
    "Diabetes",
    "Epilepsy",
    "Glaucoma",
    "Heart Disease",
    "High Blood Pressure",
    "Hay Fever",
    "Hives",
    "Kidney Disease",
    "Mental Illness",
    "Rheumatoid Arthritis",
    "Tuberculosis",
    "Others",
  ];
  return (
    <>
      <form onSubmit={handleSubmit(updateFamilyHistory)}>
        <div className="gen-form mb-3">
          <div
            className="row justify-centent-between align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Relation
                  </label>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    {...register("relation")}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Elder Brother">Elder Brother</option>
                    <option value="Younger Brother">Younger Brother</option>
                    <option value="Elder Sister">Elder Sister</option>
                    <option value="Younger Sister">Younger Sister</option>
                    <option value="Grand Father">Grand Father</option>
                    <option value="Grand Mother">Grand Mother</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <label htmlFor="" className="form-label">
                    Age (if leaving)
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="age_if_living"
                    defaultValue="0"
                    {...register("age_if_living")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-centent-between align-items-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <label htmlFor="" className="form-label">
                    Age (if dead)
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="age_if_death"
                    defaultValue="0"
                    {...register("age_if_death")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-7">
                  <label htmlFor="" className="form-label">
                    Cause of death
                  </label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    name="cause_of_death"
                    defaultValue="NA"
                    {...register("cause_of_death")}
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="mt-2 fs-6 fs-bold text-dark">
            Please mention Medical Problems (Check all that apply)
          </h3>
          <div className="row justify-centent-between align-items-center">
            {disease.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="row">
                  <div className="col-md-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="disease"
                      value={item}
                      {...register("disease")}
                    />
                  </div>
                  <div className="col-md-10">
                    <p>{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gen-form-soft-button">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="right-button" style={{ textAlign: "right" }}>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value={loading ? "Saving..." : "Save Changes"}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div
        className="rfa-gen-form-data-table mb-3"
        style={{
          background: "white",
          padding: "10px",
          borderRadius: "3px",
          borderBottom: "1px solid #bbbaba",
        }}
      >
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Relation</th>
                <th scope="col">Age (if living)</th>
                <th scope="col">Age (if death)</th>
                <th scope="col">Cause of death</th>
                <th>Problems</th>
              </tr>
            </thead>
            <tbody>
              {dataLength === 0 ? (
                <>
                  <tr>
                    <td colSpan="5" className="text-danger text-center">
                      No Previous Data Found !!
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {familyHistory?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="delete-table-icon">
                          <button className="btn rounded-circle">
                            <i className="fad fa-trash"></i>
                          </button>
                        </div>
                      </td>
                      <td>{item.relation}</td>
                      <td>{item.age_if_living}</td>
                      <td>{item.age_if_death}</td>
                      <td>{item.cause_of_death}</td>
                      <td>{item.diseases}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-info">Last Updated On : {updated_at}</p>
    </>
  );
};

export default FamilyHistory;
