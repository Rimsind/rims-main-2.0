import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <>
      <section>
        <main className="main mb-5">
          <div className="content">
            <div className="container">
              {/* <div className="page-not-found-sec text-center">
                <Image
                  height={400}
                  width={450}
                  alt=""
                  src="/assets/images/404.png"
                  className="mb-4"
                />
                <p className="fs-2 fw-bold my-3">COMING SOON...</p>
                <p>Some options are active apart from our policy.</p>
                <button className="btn btn-primary py-2 px-lg-5">
                  Go Back To Home
                </button>
              </div> */}
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="section-left-title">
                    <p
                      style={{
                        fontSize: "50px",
                        fontWeight: "600",
                        color: "#15558d",
                        fontFamily: "poppins",
                        letterSpacing: "2px",
                      }}
                    >
                      COMING SOON...
                    </p>
                  </div>
                  <div className="section-right-title">
                    <p style={{ fontSize: "30px", fontWeight: "200" }}>
                      Some options are active apart from our policy.
                    </p>
                  </div>
                  <div className="section-coming-btn mt-5">
                    <Link href="/">
                      <a className="btn btn-primary py-2 px-lg-5">
                        Go Back To Home
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <Image
                    height={500}
                    width={550}
                    alt=""
                    src="/assets/images/coming-soon.png"
                    className="mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ComingSoon;
