import { BreadCrums } from "components/common/index";
import UserNav from "components/UserComponents/UserNav";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { withAuth } from "helpers/withAuth";
const AdvanceSettings = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/patients/${auth.user?.profileId}`,
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
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Advance-Settings"
          title1="Advance-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status7="active" patient={data} />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Do you want to delete the account? Please press below
                      &quot;Delete&quot; button
                    </p>
                    <button type="button" className="btn btn-danger shadow">
                      Delete Account
                    </button>
                    <div className="row">
                      <div className="col-6">
                        <div className="delete-form mt-5">
                          <form>
                            <div className="mb-3">
                              <label className="mb-2">
                                Why you delete your account?
                              </label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Any One</option>
                                <option>Mind has been change</option>
                                <option>Find better option</option>
                                <option>Doctor fees very high</option>
                                <option>Just kidding</option>
                                <option>Software is not user friendly</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="mb-2">
                                Describe reason (optional)
                              </label>
                              <textarea className="form-control"></textarea>
                            </div>
                            <div className="complain-submit-btn">
                              <button type="submit" className="btn btn-danger">
                                Request For Delete
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-6"></div>
                    </div>
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
export default withAuth(AdvanceSettings);
