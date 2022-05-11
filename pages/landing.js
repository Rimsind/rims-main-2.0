import React from "react";

const Landing = () => {
  return (
    <section
      className="section section-landing"
      style={{
        background: "url(/assets/images/landing-background.jpg)",
        backgroundSize: "cover",
        height: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="landing-content">
          <p className="fs-1">Hello World</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
