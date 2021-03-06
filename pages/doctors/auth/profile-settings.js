import { AuthNav, BreadCrums } from "components/common";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import { ProfilePicture, AddressInfo } from "components/forms";
import { useAuth } from "context";
import { UserPageLoader } from "components/Loaders";
import { DoctorSidebar, EducationInfo } from "components/DoctorComponents";
import ProfileInfo from "components/DoctorComponents/ProfileInfo";
import { withAuth } from "helpers/withAuth";
import FeeScale from "components/forms/FeeScale";
const ProfileSettings = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
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
          title="Home / Doctor / Profile-Settings"
          title1="Profile-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <DoctorSidebar status4="active" data={data} />
              {data ? (
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                  <div>
                    <ProfilePicture data={data} />
                    <ProfileInfo data={data} />
                    <FeeScale data={data} />
                    <AddressInfo data={data} />
                    <EducationInfo
                      educationAndAwards={data?.educationAndAwards}
                    />
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
