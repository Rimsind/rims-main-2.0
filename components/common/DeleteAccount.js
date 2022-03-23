import { useAuth } from "context";
import { apiUrl } from "config/api";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Slide } from "react-toastify";
const DeleteAccount = () => {
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

  const [Delete, setDelete] = useState(false);
  const changeState = () => {
    if (Delete === false) {
      setDelete(true);
    } else {
      setDelete(false);
    }
  };
  const { handleSubmit, register } = useForm();
  const submit_delete = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        patient: auth?.user?.profileId,
        reason_for_delete: data.deleteReasonList,
        description: data.describeDeleteReason,
      };

      const response = await axios.post(`${apiUrl}/delete-accounts`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = await response.data;
      toast.success("Request Submitted Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      });
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p>
            Do you want to delete the account? Please press below
            &quot;Delete&quot; button
          </p>
          <button
            type="button"
            className="btn btn-secondary shadow"
            onClick={changeState}
          >
            Delete Account
          </button>
          {Delete === true ? (
            <div className="row">
              <div className="col-6">
                <div className="delete-form mt-5">
                  <form onSubmit={handleSubmit(submit_delete)}>
                    <div className="mb-3">
                      <label className="mb-2">
                        Why you delete your account?
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        {...register("deleteReasonList")}
                      >
                        <option
                          name="deleteReasonList"
                          defaultValue="Select Any One"
                          selected
                        >
                          Select Any One
                        </option>
                        <option value="Mind has been change">
                          Mind has been change
                        </option>
                        <option value="Find better option">
                          Find better option
                        </option>
                        <option value="Doctor fees very high">
                          Doctor fees very high
                        </option>
                        <option value="Just kidding">Just kidding</option>
                        <option value="Software is not user friendly">
                          Software is not user friendly
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2">Describe reason (optional)</label>
                      <textarea
                        className="form-control"
                        name="describeDeleteReason"
                        {...register("describeDeleteReason")}
                      ></textarea>
                    </div>
                    <div className="complain-submit-btn">
                      <button type="submit" className="btn btn-danger">
                        Request For Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
