import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/building_websites.svg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" width="376.167px" height="379.6 px" src={props.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
          </NavLink>
          </div>
        </div>
       <div className="row mb-5 mt-1"></div>
      </div>
    </>
  );
};

export default Card;
