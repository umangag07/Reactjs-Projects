import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/building_websites.svg'
import 'animate.css'
const CommonComp = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-7 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h3 className="mt-5">
                {props.name}
                  <strong className="navbar-brand-content">
                    {props.brand_name}
                  </strong>
                </h3>
                <h4 className="my-3">
                  {props.sub_head}
                </h4>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-outline-primary ">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4 order-2 order-lg-1 mt-2  d-flex justify-content-center flex-column header-img">
                <div className="animate__animated animate__pulse animate__infinite">
                  <img src={props.imgsrc} className="img-animation" width="500px" height="500px" alt="img"/>
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

export default CommonComp;
