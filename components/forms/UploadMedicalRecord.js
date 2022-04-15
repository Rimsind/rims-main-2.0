import { useState } from "react";
import { apiUrl } from "config/api";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "context";
import { uploadImage } from "utils/uploadImage";
import { Slide, toast } from "react-toastify";
const UploadMedicalRecord = ({
  upload_medical_record,
  updated_at,
  patientId,
}) => {
  const dataLenght = upload_medical_record?.length;

  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [profileImage, setProfileImage] = useState();

  const uploadProfileImage = async () => {
    setLoading(true);
    const image = await uploadImage(profileImage, auth.token);
    const payload = {
      upload_medical_record: [
        ...upload_medical_record,
        {
          title: title,
          file: image,
        },
      ],
    };
    try {
      const response = await axios.put(
        `${apiUrl}/patients/${patientId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const result = await response.data;

      toast.success("Medical Records Updated", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setLoading(false);
      return result;
    } catch (error) {
      console.lod(error);
      toast.error("Something Went Wrong Try Again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <div className="gen-form mb-3">
        <div className="row justify-centent-between align-items-center">
          <div className="col-md-6 mb-3 mb-md-0 md-lg-0 md-xl-0">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Title
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="File Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <input
              type="file"
              className="form-control"
              placeholder="Upload your Image"
              name="uploadFile"
              required=""
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>
        </div>

        <div
          className="right-button"
          style={{ textAlign: "right", marginTop: "10px" }}
        >
          {loading ? (
            <div className="upload-btn-spin">
              <button className="btn btn-primary">
                <div className="d-flex align-items-center">
                  <div
                    className="spinner-border ms-auto me-3"
                    role="status"
                    aria-hidden="true"
                  ></div>
                  <strong>Uploading...</strong>
                </div>
              </button>
            </div>
          ) : (
            <input
              type="btn"
              className="btn btn-primary"
              readOnly
              value={loading ? "Uploading..." : "upload Image"}
              disabled={loading}
              onClick={uploadProfileImage}
            />
          )}
        </div>
      </div>
      <div
        className="rfa-gen-form-data-table mb-3"
        style={{
          background: "white",
          padding: "10px",
          borderRadius: "3px",
          borderBottom: "1px solid #bbbaba",
        }}
      />
      <table className="table table-striped mb-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">File Name</th>
          </tr>
        </thead>
        <tbody>
          {dataLenght === 0 ? (
            <tr>
              <td colSpan="2" className="text-danger">
                No Previous Records Found !!
              </td>
            </tr>
          ) : (
            <>
              {upload_medical_record?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="delete-table-icon">
                      <button className="btn rounded-circle">
                        <i className="fad fa-trash"></i>
                      </button>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <Link href={item?.file?.url}>
                      <a target="_blank">Download</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      <p className="text-info">Last Updated On : {updated_at}</p>
    </>
  );
};

export default UploadMedicalRecord;
