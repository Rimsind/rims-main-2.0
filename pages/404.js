const Custom404 = () => {
  return (
    <>
      <main className="main">
        <div className="content">
          <div className="container">
            <div className="page-not-found-sec text-center">
              <img src="/assets/images/404.png" className="mb-4" />
              <p className="fs-2 fw-bold my-3">Oops! This Page Not Found</p>
              <p>
                We are Really Sorry But the Page you Requested is Missing :(
              </p>
              <button className="btn btn-primary py-2 px-lg-5">
                Go Back To Home
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
