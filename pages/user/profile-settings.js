import { BreadCrums } from "components/common";
import UserNav from "components/UserComponents/UserNav";
import Image from "next/image";
import { apiUrl } from "config/api";
import axios from "axios";
import useSWR from "swr";
import AddressInfo from "components/forms/AddressInfo";
import ProfileInfo from "components/forms/ProfileInfo";

import { useAuth } from "context";
import ProfilePicture from "components/forms/ProfilePicture";

const ProfileSettings = () => {
  const { auth } = useAuth();

  const { data, loading, error } = useSWR(
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

  // if (!data) {
  //   return <LoadingError />;
  // }

  return (
    <>
      <div className="main-wrapper">
        <BreadCrums
          title="Home / Dashboard / Profile-Settings"
          title1="Profile-Settings"
        />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <UserNav status4="active" patient={data} />

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div>
                  <ProfilePicture patient={data} />
                  <ProfileInfo patient={data} />
                  <AddressInfo patient={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
