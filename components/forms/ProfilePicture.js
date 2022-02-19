import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { uploadImage } from "utils/uploadImage";
import { useAuth } from "context";

const ProfilePicture = ({ patient }) => {
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);

  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);

    const payload = {
      image,
    };
    const response = await axios.put(
      `${apiUrl}/patients/${auth.user.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = await response.data;
    alert("Image uploaded succesfully");
    return result, setLoading(false);
  };
  return (
    <>
      <div className="row form-row">
        <div className="col-12 col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group d-flex justify-content-between align-items-center upload-profile">
                <div className="change-avatar">
                  <div className="profile-img">
                    <Image
                      height="100"
                      width="100"
                      src={patient?.image?.url || "/assets/images/profile.png"}
                      alt="User Image"
                    />
                  </div>
                  <div className="upload-img">
                    <div className="change-photo-btn">
                      <span>
                        <i className="fa fa-upload"></i> Upload Photo
                      </span>
                      <input
                        type="file"
                        className="upload"
                        onChange={(e) => setProfileImage(e.target.files[0])}
                      />
                    </div>
                    <small className="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>

                <div className="upload-btn">
                  <input
                    type="btn"
                    className="btn btn-primary"
                    value={loading ? "Uploading..." : "upload"}
                    disabled={loading}
                    onClick={uploadProfileImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
