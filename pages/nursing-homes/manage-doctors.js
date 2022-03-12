import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { NursingSideBar } from "components/common";
const ManageDoctors = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/nursing-homes/${auth?.user?.profileId}`,
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
  return (
    <>
      {" "}
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <NursingSideBar data={data} status2="active" />

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <p className="fs-5 fw-bold text-center lh-1">Doctors</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="fs-6 fw-bold">Add Doctors</label>
                        </div>
                        <div className="col-md-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Doctors</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="save-btn-poly mt-4 text-end">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDoctors;
