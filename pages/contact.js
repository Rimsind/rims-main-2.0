import axios from "axios";
import { BreadCrums } from "components/common";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { apiUrl } from "config/api";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const submitEnquirey = async (data, event) => {
    event.preventDefault();
    const payload = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const res = await axios.post(`${apiUrl}/enquireys`);
    const result = res.data;

    return result;
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
                    <p>+152 534-468-854</p>
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
                    <p>demo.rimsind@gmail.com</p>
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
                    <p>C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.716346058072!2d-95.5565430855612!3d29.872453233633234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cfe4516785ed%3A0x774974592a609121!2s54%20Northwest%20Fwy%20%23558%2C%20Houston%2C%20TX%2077040%2C%20USA!5e0!3m2!1sen!2sin!4v1631855334452!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default Contact;
