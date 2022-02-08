import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import axios from "axios";
import { useAuth } from "context";

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

const AddressInfo = ({ patient }) => {
  const { auth } = useAuth();

  const { register, handleSubmit } = useForm();
  const updateAddress = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        address: {
          street_address: data.street,
          city: data.city,
          pincode: data.pinCode,
          state: data.state,
          country: data.country,
        },
      };

      const res = await axios.put(
        `${apiUrl}/patients/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      alert("Details Updated Succesfully");
      return result;
    } catch (err) {
      console.log(err.message);
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
                      !!patient?.address && !!patient.address.street_address
                        ? patient.address.street_address
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
                      !!patient?.address && !!patient.address.city
                        ? patient.address.city
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
                        !!patient?.address && !!patient.address.state
                          ? patient.address.state
                          : ""
                      }
                    >
                      {!!patient?.address && !!patient.address.state
                        ? patient.address.state
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
                      !!patient?.address && !!patient.address.pincode
                        ? patient.address.pincode
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
                        !!patient?.address && !!patient.address.country
                          ? patient.address.country
                          : ""
                      }
                    >
                      {!!patient?.address && !!patient.address.country
                        ? patient.address.country
                        : ""}
                    </option>
                    <option>India</option>
                  </select>
                </div>
              </div>
              <div className="submit-section text-end">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressInfo;
