import React from "react";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="tab-center">Our Services</h1>
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <Card/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
