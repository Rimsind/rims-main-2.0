import useSWR from "swr";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const GeneralInfo = ({ generalInformation, patientId, updated_at }) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const updateGeneralInformation = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        generalInformation: {
          race: data.race,
          language: data.language,
          education: data.education,
          physical_dominance: data.handFootDominance,
        },
      };

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      alert("General Information Updated Succesfully");
      setLoading(false);
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(updateGeneralInformation)}>
        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <div className="row align-items-start">
            <div className="col-lg-3 col-sm-12">
              <h3 className="fs-6 fs-bold text-dark">Race / Ethnicity</h3>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="row">
                <div className="col-md-4 col-sm-4" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="Asian"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "Asian"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">Asian</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="African"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "African"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">African</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="European"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "European"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">European</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-5" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="North American"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "North American"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-10">
                      <p className="space-x-4">North American</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-5" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="South American"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "South American"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-10">
                      <p className="space-x-4">South American</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-5" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="Australian"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "Australian"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-10">
                      <p className="space-x-4">Australian</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3" {...register("race")}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="race"
                        value="Others"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.race === "Others"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-9">
                      <p className="space-x-4">Others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row align-items-start mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <div className="col-md-6 col-sm-6">
            <div className="gen-form mb-3">
              <div className="row justify-content-between align-items-start">
                <div className="col-md-6 col-sm-6">
                  <h3 className="fs-6 fs-bold text-dark">Language</h3>
                </div>
                <div className="col-md-6 col-sm-6">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    {...register("language")}
                  >
                    <option
                      name="language"
                      defaultValue={
                        !!generalInformation && generalInformation.language
                      }
                    >
                      {!!generalInformation && generalInformation.language
                        ? generalInformation.language
                        : ""}
                    </option>
                    <option value="English" name="language">
                      English
                    </option>
                    <option value="Hindi" name="language">
                      Hindi
                    </option>
                    <option value="Bengali" name="language">
                      Bengali
                    </option>
                    <option value="Marathi" name="language">
                      Marathi
                    </option>
                    <option value="Telugu" name="language">
                      Telugu
                    </option>
                    <option value="Tamil" name="language">
                      Tamil
                    </option>
                    <option value="Gujarati" name="language">
                      Gujarati
                    </option>
                    <option value="Urdu" name="language">
                      Urdu
                    </option>
                    <option value="Kannada" name="language">
                      Kannada
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="gen-form mb-3">
              <div className="row justify-content-between align-items-start">
                <div className="col-md-8 col-sm-6">
                  <h3 className="fs-6 fs-bold text-dark">
                    Highest Level of Education
                  </h3>
                </div>
                <div className="col-md-4 col-sm-6">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    {...register("education")}
                  >
                    <option
                      defaultChecked={
                        !!generalInformation && generalInformation.education
                          ? generalInformation.education
                          : ""
                      }
                    >
                      {!!generalInformation && generalInformation.education
                        ? generalInformation.education
                        : ""}
                    </option>
                    <option value="Grade School" name="education">
                      Grade School
                    </option>
                    <option value="Technical School" name="education">
                      Technical School
                    </option>
                    <option value="Some College" name="education">
                      Some College
                    </option>
                    <option value="Master's Degree" name="education">
                      Master&apos;s Degree
                    </option>
                    <option value="High School" name="education">
                      High School
                    </option>
                    <option value="Trade School" name="education">
                      Trade School
                    </option>
                    <option value="College Graduate" name="education">
                      College Graduate
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="gen-form mb-3"
          style={{ borderBottom: "1px solid #bbbaba" }}
        >
          <div className="row justify-centent-between align-items-start">
            <div className="col-md-4 col-sm-4">
              <h3 className="fs-6 fs-bold text-dark">Hand Foot Dominance</h3>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="row">
                <div
                  className="col-md-4 col-sm-4"
                  {...register("handFootDominance")}
                >
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="handFootDominance"
                        value="N/A"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.physical_dominance === "N/A"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">N/A</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-4 col-sm-4"
                  {...register("handFootDominance")}
                >
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="handFootDominance"
                        value="Left"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.physical_dominance === "Left"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">Left</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-4"
                  {...register("handFootDominance")}
                >
                  <div className="row">
                    <div className="col-md-2 col-sm-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="handFootDominance"
                        value="Right"
                        defaultChecked={
                          !!generalInformation &&
                          generalInformation.physical_dominance === "Right"
                        }
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <p className="space-x-4">Right</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-soft-button">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <p className="text-info">Last Updated On : {updated_at}</p>
            </div>

            <div className="col-md-4 col-sm-4">
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
      </form>
    </>
  );
};

export default GeneralInfo;
