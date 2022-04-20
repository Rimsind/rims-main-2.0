import AssesmentAndMedicineRecords from "./Assesment&MedicineRecords";
import { useState } from "react";
import { useAuth } from "context";
import axios from "axios";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const ReferralEntry = ({
  patient,
  assesment,
  appointmentId,
  eprescription,
}) => {
  const { auth } = useAuth();
  const [state, setState] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const submitReferral = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        eprescription: {
          ...eprescription,

          treatmentReferral: [
            ...eprescription.treatmentReferral,
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

  const treatmentList = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "Others",
  ];
  return (
    <>
      {" "}
      <div className="gen-form border-bottom border-2 border-dark py-4">
        <AssesmentAndMedicineRecords assesment={assesment} patient={patient} />
      </div>
      <form onSubmit={handleSubmit(submitReferral)}>
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Other Treatment Referral</p>
          <div className="row align-items-end">
            <div className="col-5">
              <div className="items">
                <label className="form-label">Options</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("name")}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option select>Select</option>
                  {treatmentList?.map((item, index) => (
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
                    <th scope="col">Sl No.</th>
                    <th scope="col">Treatment</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {eprescription?.treatmentReferral?.map((items, index) => (
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

export default ReferralEntry;
