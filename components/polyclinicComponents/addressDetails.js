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
  if (auth?.user?.role?.id === 6) {
    var role = "hospitals";
  }
  if (auth?.user?.role?.id === 9) {
    var role = "diagnostic-centers";
  }
  const { register, handleSubmit } = useForm();
  const submit_polyaddress = async (data, event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const payload = {
        building_name: data.building_name,
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
              <div className="col-md-4">
                <label>Flat no/ Building/ House</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                  {...register("building_name")}
                  defaultValue={!!data?.building_name ? data.building_name : ""}
                />
              </div>
              <div className="col-md-4">
                <label>Street / Area</label>
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
              <div className="col-md-4">
                <label>City</label>
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
            <div className="row mb-3">
              <div className="col-md-4">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  {...register("state")}
                  defaultValue={!!data?.state ? data.state : ""}
                />
              </div>
              <div className="col-md-4">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  name="country"
                  {...register("country")}
                  defaultValue={!!data?.country ? data.country : ""}
                />
              </div>
              <div className="col-md-4">
                <label>Pin Code</label>
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
            <div className="row mb-3">
              <div className="col-md-12">
                <label>Google Map Location</label>
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
