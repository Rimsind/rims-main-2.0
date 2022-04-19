import AssesmentAndMedicineRecords from "./Assesment&MedicineRecords";
import { useForm } from "react-hook-form";
import { useAuth } from "context";
import { precautionList } from "pages/api/prescriptionData";
import axios from "axios";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { useState } from "react";
const PrecautionEntry = ({
  patient,
  assesment,
  appointmentId,
  eprescription,
}) => {
  const { auth } = useAuth();
  const [state, setState] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const submitPrecaution = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        eprescription: {
          ...eprescription,

          safetyMeasures: [
            ...eprescription.safetyMeasures,
            {
              name: data.name,
            },
          ],
        },
      };

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
      toast.success("E-Prescription Submitted ", {
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
      reset();
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
      {" "}
      <div className="gen-form border-bottom border-2 border-dark py-4">
        <AssesmentAndMedicineRecords assesment={assesment} patient={patient} />
      </div>
      <form onSubmit={handleSubmit(submitPrecaution)}>
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Precaution & Safety Measures</p>
          <div className="row align-items-end">
            <div className="col-5">
              <div className="items">
                <label className="form-label">Options</label>
                <select
                  className="form-select"
                  {...register("name")}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option selected>Select</option>
                  {precautionList?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-5">
              {state === "Others" ? (
                <div className="items">
                  <label className="form-label">Others</label>
                  <input
                    type="text"
                    className="form-control"
                    name="patientEducation"
                    placeholder="Others:"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="col-2">
              <div className="prescription-add-btn text-end">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="bg-info">
                  <tr>
                    <th>Sl No.</th>
                    <th scope="col">Precautions</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {eprescription?.safetyMeasures.map((items, index) => (
                    <tr key={index}>
                      <td>#{index + 1}</td>
                      <td>{items?.name}</td>
                      <td>
                        <i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PrecautionEntry;
