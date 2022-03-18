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
