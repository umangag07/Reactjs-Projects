import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/building_websites.svg'
import 'animate.css'
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-7 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h3 className="mt-5">
                  Your business will reach out to Millions by getting online,
                  <strong className="navbar-brand-content">
                    TechoService{" "}
                  </strong>{" "}
                  is all you need.{" "}
                </h3>
                <h4 className="my-3">
                  You will get full web & mobile app solution for your business.
                </h4>
                <div className="mt-3">
                  <NavLink to="/services" className="btn btn-outline-primary ">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4 order-2 order-lg-1 mt-2  d-flex justify-content-center flex-column header-img">
                <div className="animate__animated animate__pulse animate__infinite">
                  <img src={web} className="img-animation" width="500px" height="500px" alt="img"/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
