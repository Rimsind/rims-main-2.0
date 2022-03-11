import { useForm } from "react-hook-form";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import axios from "axios";
const FunctionalStatus = ({ patientId, functionalStatus }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateFunctionalStatus = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        functionalStatus: {
          difficultyBathing: data.difficultyBathing.toString(),
          difficultyBedMobility: data.difficultyBedMobility.toString(),
          difficultyCareOfDependents:
            data.difficultyCareOfDependents.toString(),
          difficultyDressing: data.difficultyDressing.toString(),
          difficultyDriving: data.difficultyDriving.toString(),
          difficultyGai: data.difficultyGai.toString(),
          difficultyHouseholdChores: data.difficultyHouseholdChores.toString(),
          difficultyLevelSurfaces: data.difficultyLevelSurfaces.toString(),
          difficultyPlayActivity: data.difficultyPlayActivity.toString(),
          difficultyRamps: data.difficultyRamps.toString(),
          difficultyRecreation: data.difficultyRecreation.toString(),
          difficultySchool: data.difficultySchool.toString(),
          difficultyShopping: data.difficultyShopping.toString(),
          difficultySport: data.difficultySport.toString(),
          difficultyStairs: data.difficultyStairs.toString(),
          difficultyToileting: data.difficultyToileting.toString(),
          difficultyTransfers: data.difficultyTransfers.toString(),
          difficultyUnevenSurfaces: data.difficultyUnevenSurfaces.toString(),
          difficultyWork: data.difficultyWork.toString(),
        },
      };

      const res = await axios.put(`${apiUrl}/patients/${patientId}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      alert("Current Functional Status Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  const options = ["Current", "Prior"];
  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
  };
  return (
    <>
      <div className="general-information-form ">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <form onSubmit={handleSubmit(updateFunctionalStatus)}>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <p className="fs-5 fw-bold mb-3">
                      Any Difficulty With Current Functional Mobility
                    </p>
                    <div className="col-md-5">
                      <p className="fs-6">Bed Mobility</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyBedMobility"
                                  {...register("difficultyBedMobility")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyBedMobility &&
                                    makeArrfromString(
                                      functionalStatus.difficultyBedMobility
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">
                        Transfers (such as bed to chair, from bed to commode /
                        toilet)
                      </p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyTransfers"
                                  value={item}
                                  {...register("difficultyTransfers")}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyTransfers &&
                                    makeArrfromString(
                                      functionalStatus.difficultyTransfers
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <p className="fs-5 fw-bold mb-3">
                      Any Difficulty with Walking / movement such as
                    </p>
                    <div className="col-md-5">
                      <p className="fs-6">On Ramps</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyRamps"
                                  {...register("difficultyRamps")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyRamps &&
                                    makeArrfromString(
                                      functionalStatus.difficultyRamps
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Gai (Walking)</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyGai"
                                  {...register("difficultyGai")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyGai &&
                                    makeArrfromString(
                                      functionalStatus.difficultyGai
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">On Level Surfaces</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyLevelSurfaces"
                                  {...register("difficultyLevelSurfaces")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyLevelSurfaces &&
                                    makeArrfromString(
                                      functionalStatus.difficultyLevelSurfaces
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">On Stairs</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyStairs"
                                  {...register("difficultyStairs")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyStairs &&
                                    makeArrfromString(
                                      functionalStatus.difficultyStairs
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">On Uneven Surfaces</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyUnevenSurfaces"
                                  {...register("difficultyUnevenSurfaces")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyUnevenSurfaces &&
                                    makeArrfromString(
                                      functionalStatus.difficultyUnevenSurfaces
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <p className="fs-5 fw-bold mb-3">
                      Any Difficulty With Self-Care Activities Such As
                    </p>
                    <div className="col-md-5">
                      <p className="fs-6">Bathing</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyBathing"
                                  {...register("difficultyBathing")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyBathing &&
                                    makeArrfromString(
                                      functionalStatus.difficultyBathing
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Dressing</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyDressing"
                                  {...register("difficultyDressing")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyDressing &&
                                    makeArrfromString(
                                      functionalStatus.difficultyDressing
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Toileting</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyToileting"
                                  {...register("difficultyToileting")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyToileting &&
                                    makeArrfromString(
                                      functionalStatus.difficultyToileting
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <p className="fs-5 fw-bold mb-3">
                      Any Difficulty With Home Management Such As
                    </p>
                    <div className="col-md-5">
                      <p className="fs-6">Household Chores</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyHouseholdChores"
                                  {...register("difficultyHouseholdChores")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyHouseholdChores &&
                                    makeArrfromString(
                                      functionalStatus.difficultyHouseholdChores
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Shopping</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyShopping"
                                  {...register("difficultyShopping")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyShopping &&
                                    makeArrfromString(
                                      functionalStatus.difficultyShopping
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Driving / Transporting</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyDriving"
                                  {...register("difficultyDriving")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyDriving &&
                                    makeArrfromString(
                                      functionalStatus.difficultyDriving
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Care Of Dependents</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyCareOfDependents"
                                  {...register("difficultyCareOfDependents")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyCareOfDependents &&
                                    makeArrfromString(
                                      functionalStatus.difficultyCareOfDependents
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form mb-3">
                  <div className="row justify-content-between align-items-start">
                    <p className="fs-5 fw-bold mb-3">
                      Any Difficulty With Community And Work Activities Such As
                    </p>
                    <div className="col-md-5">
                      <p className="fs-6">Work</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyWork"
                                  {...register("difficultyWork")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyWork &&
                                    makeArrfromString(
                                      functionalStatus.difficultyWork
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">School</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultySchool"
                                  {...register("difficultySchool")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultySchool &&
                                    makeArrfromString(
                                      functionalStatus.difficultySchool
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Recreation</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyRecreation"
                                  {...register("difficultyRecreation")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyRecreation &&
                                    makeArrfromString(
                                      functionalStatus.difficultyRecreation
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Sport</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultySport"
                                  {...register("difficultySport")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultySport &&
                                    makeArrfromString(
                                      functionalStatus.difficultySport
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="fs-6">Play Activity</p>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        {options.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="difficultyPlayActivity"
                                  {...register("difficultyPlayActivity")}
                                  value={item}
                                  defaultChecked={
                                    !!functionalStatus &&
                                    !!functionalStatus.difficultyPlayActivity &&
                                    makeArrfromString(
                                      functionalStatus.difficultyPlayActivity
                                    ).includes(item)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="space-x-4">{item}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-soft-button mt-3 text-end">
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalStatus;
