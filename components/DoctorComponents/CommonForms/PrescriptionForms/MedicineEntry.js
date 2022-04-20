import AssesmentAndMedicineRecords from "./Assesment&MedicineRecords";
import { useAuth } from "context";
import { medicineNameList, frequencyList } from "pages/api/prescriptionData";
import axios from "axios";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const MedicineEntry = ({
  patient,
  assesment,
  appointmentId,
  eprescription,
}) => {
  const { auth } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const submitMedicine = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        eprescription: {
          ...eprescription,
          medicine: [
            ...eprescription?.medicine,
            {
              duration: data.duration,
              frequency: data.frequency,
              instruction: data.instruction,
              mg: data.mg,
              name: data.name,
              reason: data.reason,
              route: data.route,
              sideEffects: data.sideEffect,
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
      <form onSubmit={handleSubmit(submitMedicine)}>
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Medicine</p>
          <div className="row justify-content-between align-items-end mt-3">
            <div className="col-md-4">
              <label className="form-label">Medicine Name:</label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("name")}
              >
                <option selected>Select a medicine</option>
                {medicineNameList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-1">
              <label className="form-label">MG</label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="500"
                {...register("mg")}
              />
            </div>
            <div className="col-md-2">
              <label className="form-label">Route</label>
              <select className="form-select " {...register("route")}>
                <option selected>Select</option>
                <option value="Oral">Oral</option>
                <option value="Injection">Injection</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Duration (Days)</label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="60"
                {...register("duration")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Frequency</label>
              <select
                className="form-select "
                aria-label="Default select example"
                {...register("frequency")}
              >
                {frequencyList?.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mt-2">
              <label className="form-label">Reason</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the reason"
                {...register("reason")}
              />
            </div>
            <div className="col-md-4 mt-2">
              <label className="form-label">Instruction</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the reason"
                {...register("instruction")}
              />
            </div>
            <div className="col-md-3 mt-2">
              <label className="form-label">Side-Effects</label>
              <input
                type="text"
                className="form-control"
                {...register("sideEffect")}
              />
            </div>
            <div className="col-md-1">
              <div className="prescription-add-btn">
                <button
                  className="btn btn-primary prescription-btn"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="rfa-gen-form-data-table mt-4 bg-white p-2 border-bottom border-2 border-dark py-4">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="bg-info">
              <tr>
                <th scope="col"></th>
                <th scope="col">Medicine Name</th>
                <th scope="col">MG</th>
                <th scope="col">Route</th>
                <th scope="col">Duration (Days)</th>
                <th scope="col">Frequency</th>
                <th scope="col">Reason</th>
                <th scope="col">Instruction</th>
                <th scope="col">Side Effects</th>
              </tr>
            </thead>
            <tbody>
              {eprescription?.medicine.map((item, index) => (
                <tr key={index}>
                  <td scope="row">
                    <i className="fas fa-trash text-danger"></i>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.mg}</td>
                  <td>{item?.route}</td>
                  <td>{item?.duration}</td>
                  <td>{item?.frequency}</td>
                  <td>{item?.reasons}</td>
                  <td>{item?.instruction}</td>
                  <td>{item?.sideEffects} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MedicineEntry;
