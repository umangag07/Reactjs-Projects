import React from "react";

import web from '../src/images/building_websites.svg'
import 'animate.css'
import CommonComp from "./CommonComp";
const Home = () => {
  return (
    <>
      <CommonComp
      name="Your business will reach out to Millions by getting online, all you need is"
      brand_name="TechoService."
      sub_head="You will get full web & mobile app solution for your business."
      visit='/services'
      btnName="Get Started"
      imgsrc={web}
      />
    </>
  );
};

export default Home;
