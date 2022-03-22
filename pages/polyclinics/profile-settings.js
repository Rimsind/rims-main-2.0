import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
import { ProfilePicture } from "components/forms";
import ProfileDetails from "components/polyclinicComponents/profileDetails";
import AddressDetails from "components/polyclinicComponents/addressDetails";
const ProfileSettings = () => {
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
      {" "}
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <PolyclinicSideBar data={data} status1="active" />

            <div className="col-md-7 col-lg-8 col-xl-9">
              <ProfilePicture data={data} />

              <ProfileDetails data={data} />
              <AddressDetails data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
