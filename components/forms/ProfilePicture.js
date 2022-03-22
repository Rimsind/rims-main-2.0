import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "config/api";
import { uploadImage } from "utils/uploadImage";
import { useAuth } from "context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePicture = ({ data }) => {
  const { auth } = useAuth();

  if (auth?.user?.role?.id === 1) {
    var role = "patients";
  }
  if (auth?.user?.role?.id === 3) {
    var role = "doctors";
  }
  if (auth?.user?.role?.id === 6) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 7) {
    var role = "nursing-homes";
  }

  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [profileImage, setProfileImage] = useState();
  const [error, setError] = useState(false);
  const imageHandler = (e) => {
    const selected = e.target.files[0];
    setProfileImage(e.target.files[0]);
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setError(false);
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  const uploadProfileImage = async () => {
    setLoading(true);
    try {
      const image = await uploadImage(profileImage, auth.token);

      const payload = {
        image,
      };

      const response = await axios.put(
        `${apiUrl}/${role}/${auth.user.profileId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = await response.data;

      toast.success("Profile Picture updated Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return result, setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
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
                      src={previewImage || "/assets/images/profile.png"}
                      alt="User Image"
                    />
                  </div>
                  <div className="upload-img">
                    <input
                      type="file"
                      className="upload form-control"
                      onChange={imageHandler}
                    />

                    {!!error === true && (
                      <small className="form-text text-danger">
                        Allowed JPG, JPEG or PNG. Max size of 2MB
                      </small>
                    )}
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
      <ToastContainer />
    </>
  );
};

export default ProfilePicture;
