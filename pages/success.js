import { BreadCrums } from "components/common";
const Success = () => {
  return (
    <>
      <main className="main">
        <BreadCrums title="Home / Thank You" title1="Thank You" />
        <div className="thank_you_main d-flex justify-content-center">
          <div className="thank_you_inner shadow-lg">
            <div className="container">
              <div className="success_icon text-center">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="success_content text-center mt-3">
                <p className="fs-4">Appointment Booked Successfully!</p>
                <p className="fs-6 lh-sm">
                  Appointment booked with <b>Dr. Samir Barman</b> <br />
                  on
                  <b>12 Nov 2019 5:00 P.M. to 6:00 P.M</b>
                </p>
              </div>
              <div className="scs_inv_btn text-center mt-5">
                <a href="index.html" className="btn btn-primary">
                  View Invoice
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Success;
