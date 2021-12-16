import React from "react";
import { Link } from "react-router-dom";
import "./LastPart.css";

const LastPart = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-lg-3 for-resposive">
            <h2>Useful Links</h2>
            <p>
              {" "}
              <Link to="/" class="mar">
                Privecy Plicy{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Terms of Use
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Return Policy{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Discount Coupons{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
          </div>

          <div class="col-md-2 col-lg-3 for-resposive">
            <h2>Company</h2>
            <p>
              {" "}
              <Link to="/" class="mar">
                About us{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Contact Us
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Opend 24/7{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
            <p>
              {" "}
              <Link to="/" class="mar">
                Affiliate Marketing{" "}
              </Link>
              <i class="fas fa-long-arrow-alt-right "></i>
            </p>
          </div>

          <div class="col-md-2 col-lg-3 for-resposive">
            <h2>Stay Contected</h2>
            <p>
              {" "}
              <Link to="/">Facebook</Link>
              <i class="fab fa-facebook"></i>
            </p>
            <p>
              {" "}
              <Link to="/">Instagram</Link>
              <i class="fab fa-instagram "> </i>
            </p>

            <p>
              {" "}
              <Link to="/">Linked In</Link> <i class="fab fa-linkedin "> </i>
            </p>
          </div>

          <div class="col-md-2 col-lg-3 download-app">
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
          <div class="copyright-clip">
            <div class="row">
              <div class="col-lg-5 text-center">
                <p class="copyright-text text-muted font-italic">
                  {" "}
                  &copy;Copyright From Shop.me{" "}
                </p>
              </div>

              <div class="col-lg-5 text-center">
                <p class="last text-white-50"> Last Update 27 april 2021 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LastPart;
