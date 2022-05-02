import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { PolyclinicSideBar } from "components/common";
import { ProfilePicture } from "components/forms";
import ProfileDetails from "components/polyclinicComponents/profileDetails";
import AddressDetails from "components/polyclinicComponents/addressDetails";
import { withAuth } from "helpers/withAuth";
import FeaturesDetails from "components/polyclinicComponents/FeaturesDetails";
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
    },
    { refreshInterval: 1000 }
  );
  return (
    <>
      {" "}
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <PolyclinicSideBar data={data} status1="active" />

            <div className="col-md-12 col-lg-12 col-xl-9 col-xxl-9">
              <ProfilePicture data={data} />
              <ProfileDetails data={data} />
              <AddressDetails data={data} />
              <FeaturesDetails data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProfileSettings);
