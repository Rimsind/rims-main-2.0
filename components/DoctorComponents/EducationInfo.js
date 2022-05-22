import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { apiUrl } from "config/api";
import { useAuth } from "context";
import { useForm } from "react-hook-form";

const EducationInfo = ({ educationAndAwards }) => {
  const { auth } = useAuth();

  const [allAwards, setAllAwards] = useState(educationAndAwards.concat([]));
  const { register, handleSubmit, reset } = useForm();
  const addEducation = (data, event) => {
    event.preventDefault();
    if (!!data.degreeOrAward && !!data.institution && !!data.receivingYear) {
      setAllAwards((oldItems) => {
        return [
          ...oldItems,
          {
            degreeOrAward: data.degreeOrAward,
            institution: data.institution,
            receivingYear: data.receivingYear,
          },
        ];
      });
      reset();
    } else {
      toast("Please enter all the fields.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Slide,
        pauseOnFocusLoss: false,
      });

      return;
    }
  };

  const deleteAwards = (index) => {
    const id = index;
    setAllAwards((oldItems) => {
      return oldItems.filter((items, index) => {
        return id != index;
      });
    });
  };

  const submitData = async () => {
    try {
      const payload = {
        educationAndAwards: allAwards,
      };

      const res = await axios.put(
        `${apiUrl}/doctors/${auth.user?.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = res.data;
      toast.success("Education Details added.", {
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
    } catch (err) {
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
      <div className="card">
        <div className="card-header fs-6 fw-bold">Education Information</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(addEducation)}>
            <div className="doc-education mb-4">
              <div className="row align-items-center">
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                  <label className="mb-2">Degree or Award</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Degree or Award"
                      {...register("degreeOrAward")}
                    />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                  <label className="mb-2">Institution Name</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Institution Name"
                      {...register("institution")}
                    />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                  <label className="mb-2">Receiving Year</label>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Receiving Year"
                      {...register("receivingYear")}
                    />
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                  <button className="btn btn-primary" type="submit">
                    Add Education
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="card-table mt-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Degree or Award</th>
                    <th scope="col">Institution Name</th>
                    <th scope="col">Receiving Year</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allAwards?.map((items, index) => (
                    <tr key={index}>
                      <td scope="row">#{index + 1}</td>
                      <td>{items?.degreeOrAward}</td>
                      <td>{items?.institution}</td>
                      <td>{items?.receivingYear}</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link href="#">
                            <button
                              className="btn btn-sm bg-danger-light"
                              onClick={() => deleteAwards(index)}
                            >
                              <i className="far fa-trash-alt"></i> Delete
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-end">
              <button className="btn btn-primary" onClick={submitData}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInfo;
