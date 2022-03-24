import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { apiUrl } from "config/api";
import { useAuth } from "context";
const EducationInfo = ({ data }) => {
  const { auth } = useAuth();
  const [degree, setDegree] = useState();
  const [institute, setInstitute] = useState();
  const [year, setYear] = useState();

  const addEducation = async () => {
    const payload = {
      educationAndAwards: [
        ...data?.educationAndAwards,
        {
          degreeOrAward: degree,
          institution: institute,
          receivingYear: year,
        },
      ],
    };
    try {
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
        <div className="card-body">
          <div className="doc-education mb-4">
            <div className="row align-items-center">
              <div className="col-3">
                <label className="mb-2">Degree or Award</label>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Degree or Award"
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-3">
                <label className="mb-2">Institution Name</label>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Institution Name"
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-3">
                <label className="mb-2">Receiving Year</label>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Receiving Year"
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-3">
                <button className="btn btn-primary" onClick={addEducation}>
                  Add Education
                </button>
              </div>
            </div>
          </div>
          <div className="card-table mt-5">
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
                {data?.educationAndAwards?.map((items, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{items?.degreeOrAward}</td>
                    <td>{items?.institution}</td>
                    <td>{items?.receivingYear}</td>
                    <td className="text-end">
                      <div className="table-action">
                        <Link href="#">
                          <a className="btn btn-sm bg-danger-light">
                            <i className="far fa-trash-alt"></i> Delete
                          </a>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInfo;
