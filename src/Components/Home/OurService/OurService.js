import React from "react";
import "./OurService.css";

const OurService = () => {
  return (
    <div>
      {/* <!-- our services-------- --> */}
      <section id="website-features">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 imgstyle shadow service-box">
              <img src="https://i.ibb.co/CwXtTXv/100.png" alt="erorr!" />
              <div className="features-text">
                <p>
                  <b>100% Original items</b>-are available.
                </p>
              </div>
            </div>

            <div className="col-md-3 imgstyle shadow service-box">
              <img src="https://i.ibb.co/YQcjhDP/images.png" alt="erorr!" />
              <div className="features-text">
                <p>
                  <b>Return within 14 days</b>-of receving your order.
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-3 imgstyle shadow service-box">
              <img src="https://i.ibb.co/6nCLxp6/imeges.png" alt="erorr!" />
              <div className="features-text">
                <p>
                  <b>Get free delivery for every</b>-on more than price.
                </p>
              </div>
            </div>

            <div className="col-md-3 imgstyle shadow service-box">
              <img src="https://i.ibb.co/qsVPS82/return.png" alt="erorr!" />
              <div className="features-text">
                <p>
                  <b>Pay online through with</b>-multiple option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- our services-------- --> */}
    </div>
  );
};

export default OurService;
