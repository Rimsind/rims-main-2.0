import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { ProfileInfo, ProfilePicture, AddressInfo } from "components/forms";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { withAuth } from "helpers/withAuth";
const ProfileSettings = () => {
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
    },
    { refreshInterval: 1000 }
  );

  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Profile-Settings"
          title1="Profile Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status4="active" patient={data} />
              {data ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div>
                    <ProfilePicture data={data} />
                    <ProfileInfo data={data} />
                    <AddressInfo data={data} />
                  </div>
                </div>
              ) : (
                <UserPageLoader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProfileSettings);
