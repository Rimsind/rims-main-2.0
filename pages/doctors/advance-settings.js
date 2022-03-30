import { BreadCrums, DeleteAccount } from "components/common/index";
import { DoctorSidebar } from "components/DoctorComponents";
import { withAuth } from "helpers/withAuth";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Slide } from "react-toastify";
const AdvanceSettings = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const { data: delete_request } = useSWR(
    `${apiUrl}/delete-requests?doctor=${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );
  const dataLenght = delete_request?.length;
  const [Delete, setDelete] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
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
        doctor: auth?.user?.profileId,
        reason: data.deleteReasonList,
        description: data.describeDeleteReason,
      };

      const response = await axios.post(`${apiUrl}/delete-requests`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = await response.data;
      if (result) {
        setRequestStatus(true);
        setDelete(false);
      }
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
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Advance-Settings"
          title1="Advance-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status7="active" patient={data} />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                {dataLenght === 0 || !dataLenght ? (
                  <div className="card">
                    <div className="card-body">
                      <p>
                        Do you want to delete the account? Please press below
                        &quot;Delete&quot; button
                      </p>

                      {requestStatus === true ? (
                        <div
                          className="pt-3 pb-2 ps-4 mt-3 rounded"
                          style={{ background: "#f5474785" }}
                        >
                          <p className="text-danger fs-5 fw-bold lh-1">
                            Request Submitted Succesfully. Your account will be
                            deleted within 14 days.
                          </p>
                        </div>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-secondary shadow"
                            onClick={changeState}
                          >
                            Delete Account
                          </button>
                        </>
                      )}

                      {Delete === true ? (
                        <div className="row">
                          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
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
                                    <option value="Just kidding">
                                      Just kidding
                                    </option>
                                    <option value="Software is not user friendly">
                                      Software is not user friendly
                                    </option>
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Describe reason (optional)
                                  </label>
                                  <textarea
                                    className="form-control"
                                    name="describeDeleteReason"
                                    {...register("describeDeleteReason")}
                                  ></textarea>
                                </div>
                                <div className="complain-submit-btn">
                                  <button
                                    type="submit"
                                    className="btn btn-danger"
                                  >
                                    Request For Delete
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6 col-xxl-6"></div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <div
                        className="pt-3 pb-2 ps-4 mt-3 rounded"
                        style={{ background: "#f5474785" }}
                      >
                        <p className="text-danger fs-5 fw-bold lh-1">
                          Request Submitted Succesfully. Your account will be
                          deleted within 14 days.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuth(AdvanceSettings);
