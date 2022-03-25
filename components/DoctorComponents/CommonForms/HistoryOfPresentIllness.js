import { useState } from "react";

import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import axios from "axios";
import { Slide, toast } from "react-toastify";
const HistoryOfPresentIllness = ({ appointmentId }) => {
  const { auth } = useAuth();

  const [cameTo, setCameTo] = useState();
  const [problem, setProblem] = useState();
  const [stated, setStated] = useState();
  const [hasDone, setHasDone] = useState();
  const [medication, setMedication] = useState();
  const [other, setOther] = useState();

  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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

  const historyOfIllness = `${data?.patient?.first_name} ${data?.patient?.last_name} is a ${data?.patient?.age} y.o ${data?.patient?.gender} came to the ${cameTo} with a problem of ${problem}. Patient stated ${stated}. Patient was done ${hasDone}. Patient current medication includes ${medication}. Other relevant factors are ${other}.`;
  const submitForm = async (event) => {
    event.preventDefault();
    if (!cameTo || !problem || !stated || !hasDone || !medication || !other) {
      alert("Fill all the data");
    }

    const payload = {
      historyOfIllness: historyOfIllness,
    };
    try {
      const res = await axios.put(
        `${apiUrl}/appointments/${appointmentId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;

      toast.success("History Of Present Illness Updated", {
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

      return result;
    } catch {
      console.log(err.message);
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
      <div className="general-information-form ">
        <div className="gen-form">
          <div className="history-of-present-illness-content">
            <div className="row align-items-center">
              <div className="col-3">
                <p>
                  <span className="fs-6 fw-bold">
                    {data?.patient?.title} {data?.patient?.first_name}{" "}
                    {data?.patient?.last_name}
                  </span>{" "}
                  is a{" "}
                  <span className="fs-6 fw-bold">{data?.patient?.age}</span>{" "}
                  Year Old{" "}
                  <span className="fs-6 fw-bold">{data?.patient?.gender}</span>
                </p>
              </div>
              <div className="col-1">
                <p className="fs-6">came to the</p>
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCameTo(e.target.value)}
                />
              </div>
              <div className="col-2">
                <p className="fs-6">with a problem of</p>
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProblem(e.target.value)}
                />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col">
                <p className="fs-6">Patient stated</p>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setStated(e.target.value)}
                />
              </div>
              <div className="col">
                <p className="fs-6">Patient was done</p>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setHasDone(e.target.value)}
                />
              </div>
              <div className="col">
                <p className="fs-6">Patient current medication</p>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setMedication(e.target.value)}
                />
              </div>
            </div>
            <div className="row align-items-center mt-2">
              <div className="col-md-2">Other relevant factors are</div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setOther(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-para gen-form mt-2">
          <p className="fs-5 fw-bold">Preview:</p>

          <p className="fs-6">
            <strong>{data?.patient?.title}</strong>.{" "}
            <strong>
              {data?.patient?.first_name} {data?.patient?.last_name}
            </strong>{" "}
            is a<strong> {data?.patient?.age}</strong> y.o{" "}
            <strong>{data?.patient?.gender}</strong> came to the
            <strong> {cameTo} </strong>
            with a problem of
            <strong> {problem}</strong>. Patient stated
            <strong> {stated}</strong>. Patient was done
            <strong> {hasDone}</strong>. Patient current medication includes{" "}
            <strong>{medication}</strong>. Other relevant factors are{" "}
            <strong> {other}</strong>.
          </p>
        </div>

        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p className="fs-5 fw-bold">Allergies</p>
            </div>
            <div className="col-md-8">
              <p className="fs-6">{data?.patient?.medicalHistory?.allergies}</p>
            </div>
          </div>
        </div>
        <div className="gen-form">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p className="fs-5 fw-bold">Vaccination</p>
            </div>
            <div className="col-md-8">
              <p className="fs-6">{data?.patient?.medicalHistory?.vactions}</p>
            </div>
          </div>
        </div>

        <div className="gen-form-btn text-center mt-3">
          <button className="btn btn-success" onClick={submitForm}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;
