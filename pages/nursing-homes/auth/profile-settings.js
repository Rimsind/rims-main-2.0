import Image from "next/image";
import { useAuth } from "context";
import { apiUrl } from "config/api";
import useSWR from "swr";
import axios from "axios";
import { NursingSideBar } from "components/common";
import { ProfilePicture } from "components/forms";
import ProfileDetails from "components/polyclinicComponents/profileDetails";
import AddressDetails from "components/polyclinicComponents/addressDetails";
import { withAuth } from "helpers/withAuth";
const ProfileSettings = () => {
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
      <div className="content mb-3">
        <div className="container-fluid">
          <div className="row">
            <NursingSideBar data={data} status4="active" />

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

export default withAuth(ProfileSettings);
