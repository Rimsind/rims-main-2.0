import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "context";
import { apiUrl } from "config/api";

const FamilyHistory = ({ familyHistory, patientId }) => {
  const { auth } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const updateFamilyHistory = async (data, event) => {
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

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      reset();
      alert("FamilyMedical History Updated Succesfully");
      return result;
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
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
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
                          <input
                            type="text"
                            className="form-control"
                            name="relation"
                            {...register("relation")}
                          />
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
                  <h3 className="mt-2 fs-6 fs-bold text-dark mb-3">
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

                  <div className="gen-form-soft-button text-end">
                    <button type="submit" className="btn btn-success">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
              <div className="rfa-gen-form-data-table">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Relation</th>
                      <th scope="col">Age (if living)</th>
                      <th scope="col">Age (if death)</th>
                      <th scope="col">Cause of death</th>
                      <th scope="col">Problems</th>
                    </tr>
                  </thead>
                  <tbody>
                    {familyHistory?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.relation}</td>
                        <td>{item.age_if_living}</td>
                        <td>{item.age_if_death}</td>
                        <td>{item.cause_of_death}</td>
                        <td>{item.diseases}</td>
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

export default FamilyHistory;
