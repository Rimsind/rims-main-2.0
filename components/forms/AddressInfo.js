import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StatesList = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AddressInfo = ({ data }) => {
  const { auth } = useAuth();
  if (auth?.user?.role?.id === 1) {
    var role = "patients";
  }
  if (auth?.user?.role?.id === 3) {
    var role = "doctors";
  }
  if (auth?.user?.role?.id === 6) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 7) {
    var role = "nursing-homes";
  }

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const updateAddress = async (data, event) => {
    setLoading(true);
    event.preventDefault();

    const payload = {
      address: {
        street_address: data.street,
        city: data.city,
        pincode: data.pinCode,
        state: data.state,
        country: data.country,
      },
    };
    try {
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
      toast.success("Address Updated Succesfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return result, setLoading(false);
    } catch (err) {
      console.log(err.message);
      toast.error("Address Update Error", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(updateAddress)}>
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="806 Twin Willow Lane"
                    {...register("street")}
                    defaultValue={
                      !!data?.address && !!data.address.street_address
                        ? data.address.street_address
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Old Forge"
                    {...register("city")}
                    defaultValue={
                      !!data?.address && !!data.address.city
                        ? data.address.city
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>State</label>
                  <select
                    className="form-select form-control"
                    {...register("state")}
                  >
                    <option
                      defaultValue={
                        !!data?.address && !!data.address.state
                          ? data.address.state
                          : ""
                      }
                    >
                      {!!data?.address && !!data.address.state
                        ? data.address.state
                        : ""}
                    </option>
                    {StatesList.map((items, index) => (
                      <option key={index}>{items}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="13420"
                    {...register("pinCode")}
                    defaultValue={
                      !!data?.address && !!data.address.pincode
                        ? data.address.pincode
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Country</label>
                  <select
                    className="form-select form-control"
                    {...register("country")}
                  >
                    <option
                      defaultValue={
                        !!data?.address && !!data.address.country
                          ? data.address.country
                          : ""
                      }
                    >
                      {!!data?.address && !!data.address.country
                        ? data.address.country
                        : ""}
                    </option>
                    <option>India</option>
                  </select>
                </div>
              </div>
              <div className="submit-section text-end">
                <input
                  type="submit"
                  className="btn btn-primary submit-btn"
                  value={loading ? "Saving..." : "Save Changes"}
                  disabled={loading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddressInfo;
