import React from 'react'
import { Marginer } from '../../Components/Marginer/Index'
import { SectionTitle } from '../../Components/SectionTitle/index_sectionTitle'
import AboutImg from '../../Assets/illustrations/MoreAbout.svg'
import { MoreAbout } from '../../Components/MoreAbout/MoreAbout'
function AboutSection() {
    return (
        <div>
            <Marginer direction="vertical" margin="3em"/>
            <SectionTitle>More about EasyOnline</SectionTitle>
            <Marginer direction="vertical" margin="3em"/>
            <MoreAbout
         title=" "
         description="You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.You will get your app customised for your needs.Pricing Depends how big is the app. We will 
                      develop your app for both OS(Android & IOS) platforms.  " 
         imageUrl={AboutImg}
         order={false}></MoreAbout>
        </div>
    )
}

export default AboutSection
