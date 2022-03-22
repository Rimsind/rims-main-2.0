import { useForm } from "react-hook-form";

const AddressDetails = ({ data }) => {
  console.log(data);
  const { register, handleSubmit } = useForm();
  const submit_polyaddress = async (data, event) => {
    event.preventDefault();
    const payload = {
      street_address: data.street_address,
      state: data.state,
      city: data.city,
      country: data.country,
      pincode: data.pincode,
      google_map: data.google_map,
    };
    console.log(payload);
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="fs-5 fw-bold text-center lh-1">Address</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submit_polyaddress)}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <label>Street Address</label>
                  </div>
                  <div className="col-md-9">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Enter address"
                        rows="5"
                        name="street_address"
                        {...register("street_address")}
                        defaultValue={
                          !!data?.street_address ? data.street_address : ""
                        }
                      ></textarea>
                      <label>Enter here</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <label>State</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        name="state"
                        {...register("state")}
                        defaultValue={!!data?.state ? data.state : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <label>City</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        name="city"
                        {...register("city")}
                        defaultValue={!!data?.city ? data.city : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <label>Country</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country"
                        name="country"
                        {...register("country")}
                        defaultValue={!!data?.country ? data.country : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="nursing-form-input">
                      <label>Pin Code</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="nursing-form-input">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Pin Code"
                        name="pincode"
                        {...register("pincode")}
                        defaultValue={!!data?.pincode ? data.pincode : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <label>Google Map Location</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nursing-form-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter map url"
                        name="google_map"
                        {...register("google_map")}
                        defaultValue={!!data?.google_map ? data.google_map : ""}
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

export default AddressDetails;
