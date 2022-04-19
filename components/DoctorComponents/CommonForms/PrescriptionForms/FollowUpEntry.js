import { useForm } from "react-hook-form";
import AssesmentAndMedicineRecords from "./Assesment&MedicineRecords";
import axios from "axios";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";

const FollowUpEntry = ({
  patient,
  assesment,
  appointmentId,
  eprescription,
}) => {
  var today = new Date();

  var day = today.getDate() + 1;
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
    var newDay = "0" + day;
  } else {
    var newDay = day;
  }
  if (month < 10) {
    var newMonth = "0" + month;
  } else {
    var newMonth = month;
  }
  const minDate = year + "-" + newMonth + "-" + newDay;

  const { register, handleSubmit } = useForm();
  const submitFollowUp = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        eprescription: {
          ...eprescription,
          followUp_date: data.followUp_date,
          followUp_type: data.followUp_type,
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
      {/* <div className="gen-form border-bottom border-2 border-dark py-4">
        <AssesmentAndMedicineRecords assesment={assesment} patient={patient} />
      </div> */}
      <form onSubmit={handleSubmit(submitFollowUp)}>
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Set Follow Time Period</p>
          <div className="row align-items-end">
            <div className="col-md-6">
              <label className="form-label">Date : </label>
              {eprescription?.followUp_date ? (
                <span>{eprescription?.followUp_date}</span>
              ) : (
                <span
                  className="text-danger"
                  style={{ fontSize: "13px", marginLeft: "5px" }}
                >
                  No date selected!!
                </span>
              )}

              <input
                type="date"
                className="form-control"
                name="days"
                min={minDate}
                {...register("followUp_date")}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Followup Type</label>
              <select
                className="form-control"
                aria-label="Default select example"
                {...register("followUp_type")}
              >
                <option
                  defaultValue={!!eprescription && eprescription?.followUp_type}
                >
                  {!!eprescription && eprescription?.followUp_type
                    ? eprescription?.followUp_type
                    : "Select"}
                </option>
                <option value="Regular Visit">Regular Visit</option>
                <option value="Annual Exam">Annual Exam</option>
              </select>
            </div>
          </div>
        </div>
        <div className="gen-form-btn mt-3 text-end">
          <button className="btn btn-success" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default FollowUpEntry;
