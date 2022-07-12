import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <>
      <section className="terms-condiotion">
        <div className="container">
          <div
            className="inner-terms-content p-5 my-4"
            style={{ background: "#f1f1f1" }}
          >
            <p className="fs-6 fst-italic">Updated June 16, 2022</p>
            <p className="fs-4 fw-bold text-center border-bottom border-1 border-dark pb-3">
              Copyright
            </p>
            <p className="fs-6">
              The entire
              <Link href="/">
                <a className="mx-1">www.rimsind.in</a>
              </Link>
              the website is © 2019-2022
              <b className="mx-1">RIMS IND Unit Of Retar Mediserve Pvt. Ltd.</b>
              All Rights reserved.{" "}
              <Link href="/">
                <a className="mx-1">www.rimsind.com</a>
              </Link>
              the website may not be copied or duplicated in whole or part by
              any means without express prior agreement in writing or unless
              specifically noted on the site. Some Photograph&apos;s contents on
              the site may be copyrighted property of others; acknowledgment of
              those copyright is hereby given. All such material is used with
              the permission of the owner. On this Website “www.rimsind.in /
              www.rimsind.com” we invented a unique technology (Digital
              Platform) based on the medical system. This thinking started and
              it was documented in 1996 By Mr. Samir Kumar Barman (Director). In
              2019, Mr. Arya Jana (Present Managing Director) was given the
              responsibility for this project. After taking charge of this
              project, some innovations were added to this project based on
              discussions with the director. Then, Mr. Arya Jana formed a team
              and completed the project, and 70% of it was published on May
              27-2022.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopyRight;
