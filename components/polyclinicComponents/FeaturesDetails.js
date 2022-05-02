import axios from "axios";
import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import { useAuth } from "context";
import { toast, Slide } from "react-toastify";
const FeaturesDetails = ({ data }) => {
  const { auth } = useAuth();
  if (auth?.user?.role?.id === 4) {
    var role = "polyclinics";
  }
  if (auth?.user?.role?.id === 5) {
    var role = "nursing-homes";
  }
  const features = data?.features;
  const { register, handleSubmit, reset } = useForm();
  const submitFeatures = async (data, event) => {
    event.preventDefault();
    const payload = {
      features: [
        ...features,
        {
          feature_name: data.feature_name,
        },
      ],
    };
    const res = await axios.put(
      `${apiUrl}/${role}/${auth.user?.profileId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    toast.success("Features Updated Succesfully", {
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
    reset();
    return result;
  };
  return (
    <>
      <section className="poly-features">
        <div className="card">
          <div className="card-header">
            <p className="fs-5 fw-bold text-center lh-1">Features</p>
          </div>
          <div className="card-body">
            <div className="row align-items-baseline">
              <form onSubmit={handleSubmit(submitFeatures)}>
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="features-add-sec mb-3">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <p className="fs-6 fw-bold">Add Key Features</p>
                      </div>
                      <div className="col-5">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          {...register("feature_name")}
                        >
                          <option>Select Features</option>
                          <option value="Pharmacy">Pharmacy</option>
                          <option value="Patology">Patology</option>
                          <option value="Ambulance">Ambulance</option>
                          <option value="Radiology">Radiology</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <div className="features-add-btn text-start">
                          <button className="btn btn-primary">
                            Add Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="features-pill-item mt-4">
                  <div className="row align-items-center">
                    {data?.features?.map((items, index) => (
                      <div className="col" key={index}>
                        <p
                          className="badge fs-6 fw-light py-2 px-4"
                          style={{ backgroundColor: "#0001fbb8" }}
                        >
                          <a href="#">
                            <i className="fal fa-times me-2 text-light"></i>
                          </a>
                          {items?.feature_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="save-btn-poly mt-4 text-end">
              <button
                className="btn btn-primary"
                onClick={submitFeatures}
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesDetails;
