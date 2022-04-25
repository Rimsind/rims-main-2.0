import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
import { useState } from "react";
const AddressDetails = ({ data }) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  const { register, handleSubmit } = useForm();
  const submit_polyaddress = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        street_address: data.street_address,
        state: data.state,
        city: data.city,
        country: data.country,
        pincode: data.pincode,
        google_map: data.google_map,
      };
      const res = await axios.put(
        `${apiUrl}/${role}/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      toast.success("Address Updated", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return result, setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong Try Again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="fs-5 fw-bold text-center lh-1">Address Details</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submit_polyaddress)}>
            <div className="row mb-3">
              <div className="col-md-7">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <label>Street Address</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                      {...register("street_address")}
                      defaultValue={
                        !!data?.street_address ? data.street_address : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <div className="nursing-form-input">
                      <label>City</label>
                    </div>
                  </div>
                  <div className="col-md-10">
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
                  <div className="col-md-3">
                    <div className="nursing-form-input">
                      <label>State</label>
                    </div>
                  </div>
                  <div className="col-md-9">
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
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="nursing-form-input">
                      <label>Country</label>
                    </div>
                  </div>
                  <div className="col-md-9">
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
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="nursing-form-input">
                      <label>Google Map Location</label>
                    </div>
                  </div>
                  <div className="col-md-9">
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
              <input
                type="submit"
                className="btn btn-primary submit-btn"
                value={loading ? "Saving..." : "Save Changes"}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressDetails;
