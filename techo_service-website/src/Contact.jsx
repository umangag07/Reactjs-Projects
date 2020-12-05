import React from "react";
import contact_us from "../src/images/contact_us.svg";

const Contact = () => {
 const handleSubmit = ()=>{
    window.alert("Your form is submited")
  }
  return (
    <>
      <div className="my-3">
        <h1 className="tab-center"> Contact Us</h1>
      </div>
      <div className="container contacts">
        <div className="row">
          <div className="col-md-6 col-10 mx-left">
            <form action="/" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name."
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone No.</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+91"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Enter your views
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-4 order-2 order-lg-1 mt-2 ml-lg-2 d-flex justify-content-center flex-column">
            <img
              src={contact_us}
              className="img-animation"
              width="500px"
              height="500px"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
