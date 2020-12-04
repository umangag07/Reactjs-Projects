import React from "react";
import Card from "./Card";
import s_data from "./Servicedata";

const Service = () => {
  return (
    <>
      {console.log(s_data)}
      <div className="my-3">
        <h1 className="tab-center">Our Services</h1>
        <div className="container-fluid mb-4">
          <div className="row gy-4">
            <div className="col-10 mx-auto">
              <div className="Mycard">
              <div className="row ">
                {s_data.map((val, index) => {
                  return (
                    <Card img={val.imgsrc} title={val.title} text={val.text} />
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// data=>{
//   <Card img={data.imgsrc} title={data.title} text={data.text}/>
// }
export default Service;
