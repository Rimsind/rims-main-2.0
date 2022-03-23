import { BreadCrums, DeleteAccount } from "components/common/index";

import { withAuth } from "helpers/withAuth";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
const AdvanceSettings = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/polyclinics/${auth?.user?.profileId}`,
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
              <PolyclinicSideBar data={data} status1="active" />

              <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <DeleteAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuth(AdvanceSettings);
