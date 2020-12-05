import React from "react";
import Card from "./Card";
import s_data from "./Servicedata";

const Service = () => {
  return (
    <>
      {console.log(s_data)}
      <div className="my-4">
        <h1 className="tab-center">Our Services</h1>
        <div className="container-fluid mb-2">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="Mycard">
              <div className="row gy-4">
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
