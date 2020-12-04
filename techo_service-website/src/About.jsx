import React from 'react'
import CommonComp from './CommonComp'
import web from '../src/images/Team_page.svg'

const About = ()=>{
    return(
        <>
          <CommonComp
           name="Welcome to About Page"
           brand_name=""
           sub_head="We started as few college freelance developers in 2019.At that time we were a team of 5 people.
           Now we have got 50 developers for differnet things and all are best in their part. Our aim is to bring more 
           business Online so that they have a better reach. And we have the simplest process and customer friendly, 
           so that they won't feel it's big task to get online. We even provide maintainers for the service on weekly basis.
           That makes it even more simple to maintain the site or an app. "
           visit='/contact'
           btnName="Contact Us"
           imgsrc={web}
          />
        </>
    )
   
    
}

export default About