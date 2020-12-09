import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components'
import { Marginer } from '../../Components/Marginer/Index';
import { Service_index } from '../../Components/OurServices/Service_index';
import {SectionTitle} from '../../Components/SectionTitle/index_sectionTitle'

import MobileApplication from '../../Assets/illustrations/Mobile_application.svg'
import cloudHosting from '../../Assets/illustrations/cloud_hosting.svg'
import FrontEndWeb from '../../Assets/illustrations/experience_design.svg'
import BackeEndWeb from '../../Assets/illustrations/server_cluster.svg'
import Maintenance from '../../Assets/illustrations/maintenance.svg'
const ServiceContainer = styled(Element)`
   display:flex;
   flex-direction:column;
   width:100%;
   min-height:100vh;
`;



export function ServiceSection(props){
    return( <ServiceContainer name="ServiceSection">
        <SectionTitle>Our Services</SectionTitle>
        <Marginer direction="vertical" margin="3em" ></Marginer>
        <Service_index
         title="Mobile Programming"
         description="You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms. " 
         imageUrl={MobileApplication}
         order={false}></Service_index>
         <Marginer direction="vertical" margin="3em" ></Marginer>
        <Service_index
         title="Managing Cloud"
         description="Get your cloud managed by the experience developers or solve querries regarding to it.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms." 
         imageUrl={cloudHosting}
         order={true}></Service_index>
         <Marginer direction="vertical" margin="3em" ></Marginer>
        <Service_index
         title="Front-end WebDevlopment"
         description="Get your cloud managed by the experience developers or solve querries regarding to it.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms." 
         imageUrl={FrontEndWeb}
         order={false}></Service_index>
         <Marginer direction="vertical" margin="3em" ></Marginer>
        <Service_index
         title="Back-end WebDevlopment"
         description="Get your cloud managed by the experience developers or solve querries regarding to it.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms." 
         imageUrl={BackeEndWeb}
         order={true}></Service_index>
         <Marginer direction="vertical" margin="3em" ></Marginer>
        <Service_index
         title="Maintenance"
         description="Get your cloud managed by the experience developers or solve querries regarding to it.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
         develop your app for both OS(Android & IOS) platforms." 
         imageUrl={Maintenance}
         order={false}></Service_index>
    </ServiceContainer>)
}