import router, { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "config/api";
import useSWR from "swr";
import { Slide, toast } from "react-toastify";
import { catagoryList, testList } from "pages/api/neuroData";
const NeuroExamination = ({ appointmentId }) => {
  const { auth } = useAuth();
  const [category, setCategory] = useState();
  const [test, setTest] = useState();
  const [examination, setExamination] = useState([]);

  const addData = () => {
    setExamination([
      ...examination,
      {
        category: category,
        test: test,
      },
    ]);
  };

  const { data: appointment } = useSWR(
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

  const { register, handleSubmit } = useForm();
  const SubmitForm = async (data, event) => {
    event.preventDefault();
    const payload = {
      neurology: {
        assesment: data.assesment,
        examination: examination,
      },
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

      toast.success("Clinical Examination Submitted", {
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
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="general-information-form relative p-6 flex-auto">
          <div className="gen-form mt-3">
            <div className="row align-items-center mt-3">
              <p className="fs-5 fw-bold">Examination category</p>
              <div className="col-md-12">
                <div className="row align-items-end mb-2">
                  <div className="col-md-5">
                    <div className="items">
                      <label className="form-label">Categories:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option selected>Select Option</option>
                        {catagoryList.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label className="form-label">Test:</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setTest(e.target.value)}
                    >
                      <option selected>Select Option</option>
                      {testList.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="prescription-add-btn text-end">
                      <span className="btn btn-primary" onClick={addData}>
                        Add
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rfa-gen-form-data-table mt-4 bg-white p-2 rounded-3">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead className="bg-info">
                        <tr>
                          <th className="text-center" colSpan="2" scope="col">
                            Categories
                          </th>
                          <th scope="col">Test</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examination.map((item, index) => (
                          <tr key={index}>
                            <td>X</td>
                            <td>{item.category}</td>
                            <td>{item.test}</td>
                          </tr>
                        ))}
                        {appointment?.neurology?.examination.map(
                          (item, index) => (
                            <tr key={index}>
                              <td>*</td>
                              <td>{item.category}</td>
                              <td>{item.test}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <p className="fs-6 fw-bold">Assessment</p>
                <div className="items">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Others:"
                    {...register("assesment")}
                    defaultValue={
                      !!appointment?.neurology &&
                      !!appointment?.neurology?.assesment
                        ? appointment?.neurology?.assesment
                        : ""
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button className="btn btn-success" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NeuroExamination;
