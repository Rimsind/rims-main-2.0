import { useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { useAuth } from "context";
import router from "next/router";
const StatusChanger = ({ id }) => {
  const { auth } = useAuth();
  const [btn1Status, setBtn1Status] = useState("btn btn-warning");
  const [btn2Status, setBtn2Status] = useState("btn btn-light");

  const changeStatus = async () => {
    setBtn1Status("btn btn-light");
    setBtn2Status("btn btn-success");
    const payload = {
      appointment_status: true,
    };
    try {
      const res = await axios.put(`${apiUrl}/appointments/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      toast.success("Appointment Completed", {
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
      router.push(`/doctors/appointments`);
      return result;
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
    }
  };
  return (
    <>
      <div className="col-sm-12 col-md-6">
        <div className="row">
          <div className="col-6">
            <div className="status-sec">
              <div className="row align-items-center">
                <div className="col-2">
                  <p className="fs-5 lh-1" style={{ marginBottom: "7px" }}>
                    Status
                  </p>
                </div>
                <div className="col-10">
                  <div className="status-btn d-flex">
                    <div className="left-off-btn">
                      <button
                        className={btn1Status}
                        style={{ borderRadius: "2px 0 0 2px" }}
                      >
                        Pending
                      </button>
                    </div>
                    <div className="right-off-btn">
                      <button
                        className={btn2Status}
                        style={{
                          borderRadius: "0 2px 2px 0",
                          paddingRight: "17px",
                        }}
                        onClick={changeStatus}
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusChanger;
