import { useForm } from "react-hook-form";
const ProfileDetails = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const submit_polydetails = async (data, event) => {
    event.preventDefault();
    const payload = {
      name: data.name,
      phone: data.phone,
      workingHours: {
        start: data.start,
        end: data.end,
      },
    };
    console.log(payload);
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="fs-5 fw-bold text-center">Polyclinic Details</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submit_polydetails)}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Polyclinic Name</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Polyclinic Name"
                        name="polyclinic_name"
                        {...register("name")}
                        defaultValue={!!data?.name ? data.name : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Email Id</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        disabled
                        defaultValue={!!data?.email ? data.email : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Phone</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="eg: 987456321"
                        name="polyclinic_phone"
                        {...register("phone")}
                        defaultValue={!!data?.phone ? data.phone : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Opening Time</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: 10:00 A.M."
                        name="polyclinic_start_time"
                        {...register("start")}
                        defaultValue={!!data?.start ? data.start : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Closing Time</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: 03:30 P.M."
                        name="polyclinic_end_time"
                        {...register("end")}
                        defaultValue={!!data?.end ? data.end : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn-poly mt-4 text-end">
              <button className="btn btn-primary" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
