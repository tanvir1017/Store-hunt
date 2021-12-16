import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-section">
      <div className="row d-flex align-items-center">
        <div className="col-md-8 col-sm-12 shadow about-ceo col-lg-8">
          <h2 className="fw-bold mb-0">About Ceo</h2>
          <div className="text-start p-4">
            <p style={{ fontSize: "18px", fontWeight: 600 }}>
              Introducing a new CEO to employees should take precedence over
              notifying those outside the organization. An email can be sent
              prior to the new executive's arrival as an initial introduction.
              The standard format includes the CEO's name, title, credentials
              and start date followed by a brief job historyCEO letters are in
              principle documents written for shareholders and investors. An
              observant reader, however, will note that few of these letters are
              addressed directly to shareholders, or even to investors
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4">
          <img
            style={{ marginTop: "-100px" }}
            src="https://i.ibb.co/qyH2mvH/Website-Photo-4.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
