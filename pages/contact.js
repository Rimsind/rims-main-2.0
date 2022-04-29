import axios from "axios";
import { BreadCrums } from "components/common";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
import { toast, Slide } from "react-toastify";
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitEnquirey = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      const res = await axios.post(`${apiUrl}/contact-uses`, payload);
      const result = res.data;
      console.log(result);
      toast.success("Enquirey Submitted Succesfully.", {
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
    } catch (error) {
      console.log(error.message);
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
    }
  };
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Contact" title1="Contact" />
        <section className="contact-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h3 className="mb-4">Contact Us</h3>
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div className="contact-box flex-fill">
                  <div className="infor-img">
                    <div className="image-circle">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label>Phone Number</label>
                    <p>+91 8597-3944-14</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-box flex-fill">
                  <div className="infor-img">
                    <div className="image-circle bg-cus-primary">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label>Email</label>
                    <p>info@rimsind.com</p>
                    <p>support@rimsind.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-box flex-fill">
                  <div className="infor-img">
                    <div className="image-circle">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="infor-details text-center">
                    <label>Location</label>
                    <p>
                      Module-208, Webel IT Park, City Center, Haldia West
                      Bengal, 721657
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form py-5">
          <div className="container">
            <div className="section-header text-center">
              <h2>Get in touch!</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <Image
                  src="/user_assets/img/about-2.png"
                  height="500px"
                  width="450px"
                  alt="contact Image"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="contact-form-main shadow">
                  <form onSubmit={handleSubmit(submitEnquirey)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3 input-level">
                          <label>
                            Your Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3 input-level">
                          <label>
                            Your Email <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3 input-level">
                          <label>Phone Nuber</label>
                          <input
                            type="number"
                            className="form-control"
                            required
                            {...register("phone")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3 input-level">
                          <label>Subject</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            {...register("subject")}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3 input-level">
                          <label>
                            Comments <span>*</span>
                          </label>
                          <textarea
                            className="form-control"
                            required
                            {...register("message")}
                          >
                            {" "}
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <button className="btn bg-cus-primary">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-map d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.656727869912!2d88.07755181541287!3d22.06272295705107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0c7d1cdc935%3A0xdc5e28eac9b1b75b!2sWebel%20IT%20Park!5e0!3m2!1sen!2sin!4v1648626968245!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default Contact;
