import axios from "axios";
import { useAuth } from "context";
import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
const FeeScale = ({ data }) => {
  const { auth } = useAuth();
  const { register, handleSubmit } = useForm();
  const submitFee = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        feeScale: {
          min: data.min,
          max: data.max,
        },
      };
      const res = await axios.put(
        `${apiUrl}/doctors/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = await res.data;
      toast.success("Fee Scale Updated Succesfully", {
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
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.", {
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
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-header fs-6 fw-bold">Fee Scale</div>
        <form onSubmit={handleSubmit(submitFee)}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                  <label>Minimum:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ex: ₹200"
                    defaultValue={
                      !!data.feeScale && !!data.feeScale.min
                        ? data.feeScale.min
                        : ""
                    }
                    {...register("min")}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                  <label>Maximum:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ex: ₹500"
                    defaultValue={
                      !!data.feeScale && !!data.feeScale.max
                        ? data.feeScale.max
                        : ""
                    }
                    {...register("max")}
                  />
                </div>
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
    </>
  );
};

export default FeeScale;
