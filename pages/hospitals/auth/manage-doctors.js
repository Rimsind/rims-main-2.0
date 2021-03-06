import { useState } from "react";
import { useAuth } from "context";
import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { HospitalSideBar } from "components/common";
import { toast, Slide } from "react-toastify";
import { MyDoctors } from "components/polyclinicComponents";
import { withAuth } from "helpers/withAuth";
const ManageDoctors = () => {
  const { auth } = useAuth();
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  if (auth?.user?.role?.id === 6) {
    var role = "hospitals";
  }
  const { data } = useSWR(
    `${apiUrl}/hospitals/${auth?.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    },
    { refreshInterval: 1000 }
  );

  const { data: doctors } = useSWR(`${apiUrl}/doctors`, fetcher);
  const [allDoctors, setAllDoctors] = useState([]);
  const addNewDoctor = (e) => {
    setAllDoctors([...data?.doctors, e.target.value]);
  };
  const addDoctor = async () => {
    const payload = {
      doctors: allDoctors,
    };

    const res = await axios.put(
      `${apiUrl}/${role}/${auth?.user?.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    toast.success("Doctor Added Succesfully", {
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
  };
  return (
    <>
      {" "}
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <HospitalSideBar data={data} status2="active" />

            <div className="col-md-12 col-lg-8 col-xl-9 col-xxl-9">
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Doctors</p>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="row align-items-center mb-3">
                      <div className="col-md-4">
                        <label className="fs-6 fw-bold">Add Doctors</label>
                      </div>
                      <div className="col-md-8">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={addNewDoctor}
                        >
                          <option>Select a Doctor</option>
                          {doctors?.map((items, index) => (
                            <option value={items?.id} key={index}>
                              {items?.firstName} {items?.lastName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="save-btn-poly mt-4 text-end">
                    <button className="btn btn-primary" onClick={addDoctor}>
                      Add Doctor
                    </button>
                  </div>
                </div>
              </div>
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor ID</th>
                          <th>Doctor Details</th>

                          <th>Specialities</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.doctors?.map((items, index) => (
                          <MyDoctors data={items} key={index} />
                        ))}
                      </tbody>
                    </table>
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

export default withAuth(ManageDoctors);
