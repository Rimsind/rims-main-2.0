import AssesmentAndMedicineRecords from "./Assesment&MedicineRecords";
import { useState } from "react";
import { useAuth } from "context";
import { testNameList, Specification } from "pages/api/prescriptionData";
import axios from "axios";
import { apiUrl } from "config/api";
import { Slide, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const TestEntry = ({ patient, assesment, appointmentId, eprescription }) => {
  console.log(eprescription);
  const { auth } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const submitTest = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        eprescription: {
          ...eprescription,
          test: [
            ...eprescription?.test,
            {
              name: data.name,
              specification: data.specification,
            },
          ],
        },
      };
      console.log(payload);

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
      <form onSubmit={handleSubmit(submitTest)}>
        <div className="gen-form border-bottom border-2 border-dark py-4">
          <p className="fs-5 fw-bold">Test</p>
          <div className="row align-items-end">
            <div className="col-5">
              <div className="items">
                <label className="form-label">Test</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("name")}
                >
                  {testNameList?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-5">
              <div className="items">
                <label className="form-label">Specification:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("specification")}
                >
                  {Specification?.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
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
                    <th scope="col"></th>
                    <th scope="col">Test Name</th>
                    <th scope="col">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {eprescription?.test ? (
                    <>
                      {eprescription?.test.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <i className="fas fa-trash text-danger"></i>
                          </th>
                          <td>{item?.name}</td>
                          <td>{item?.specification}</td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td colSpan={3} className="text-center text-danger">
                          *No previous records found!!
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TestEntry;
