import React from "react";
import { Link } from "react-router-dom";
import "./LastPart.css";

const LastPart = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-3 for-resposive">
            <h2>Useful Links</h2>
            <p>
              {" "}
              <Link to="/" className="mar">
                Privecy Plicy{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Terms of Use
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Return Policy{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Discount Coupons{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
          </div>

          <div className="col-md-2 col-lg-3 for-resposive">
            <h2>Company</h2>
            <p>
              {" "}
              <Link to="/" className="mar">
                About us{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Contact Us
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Opend 24/7{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" className="mar">
                Affiliate Marketing{" "}
              </Link>
              <i className="fas fa-long-arrow-alt-right "></i>
            </p>
          </div>

          <div className="col-md-2 col-lg-3 for-resposive">
            <h2>Stay Contected</h2>
            <p>
              {" "}
              <Link to="/">Facebook</Link>
              <i className="fab fa-facebook"></i>
            </p>
            <p>
              {" "}
              <Link to="/">Instagram</Link>
              <i className="fab fa-instagram "> </i>
            </p>

            <p>
              {" "}
              <Link to="/">Linked In</Link>{" "}
              <i className="fab fa-linkedin "> </i>
            </p>
          </div>

          <div className="col-md-2 col-lg-3 download-app">
            <h2>Download Now</h2>
            <p>
              <img src="https://i.ibb.co/V935DfQ/download.png" alt="" />
            </p>
            <p>
              <img
                className="rounded"
                src="https://www.seekpng.com/png/detail/235-2356674_download-on-app-store-png-app-store-logo.png"
                alt=""
              />
            </p>
          </div>
        </div>
        <hr />
        <div>
          {" "}
          <div className="copyright-clip">
            <div className="row">
              <div className="col-lg-5 text-center">
                <p className="copyright-text text-muted font-italic">
                  {" "}
                  &copy;Copyright From Shop.me{" "}
                </p>
              </div>

              <div className="col-lg-5 text-center">
                <p className="last text-white-50">
                  {" "}
                  Last Update 27 april 2021{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LastPart;
